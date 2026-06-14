
/* =========================
   ARTWORK DATA (ARRAY OF OBJECTS)
========================= */

const artworks = [
    {
        title: "Nok Terracotta",
        category: "sculpture",
        region: "Northern Nigeria",
        image: "images/nok.webp",
        description: "One of the earliest known African civilizations known for terracotta sculptures."
    },
    {
        title: "Benin Bronzes",
        category: "sculpture",
        region: "Edo State",
        image: "images/benin_bronze.jpg",
        description: "Royal bronze plaques and sculptures from the Kingdom of Benin."
    },
    {
        title: "Ife Heads",
        category: "sculpture",
        region: "Oyo State",
        image: "images/ife.webp",
        description: "Highly realistic bronze heads created by the Yoruba civilization."
    },
    {
        title: "Osun Festival Art",
        category: "festival",
        region: "Osun State",
        image: "images/osun.webp",
        description: "Colorful cultural festival honoring the river goddess Osun."
    },
    {
        title: "Durbar Celebration",
        category: "festival",
        region: "Kano State",
        image: "images/durbar.webp",
        description: "Royal horse parade featuring traditional northern Nigerian culture."
    },
    {
        title: "Argungu Festival",
        category: "festival",
        region: "Kebbi State",
        image: "images/argungu.webp",
        description: "Annual fishing festival attracting thousands of participants."
    },
    {
        title: "Modern Nigerian Painting",
        category: "painting",
        region: "Lagos",
        image: "images/hero1.jpg",
        description: "Contemporary artwork blending tradition with modern expression."
    }
];

/* =========================
   SELECT CONTAINER
========================= */

const galleryContainer = document.getElementById("artGallery");

/* =========================
   DISPLAY FUNCTION
========================= */

function displayArtworks(list) {
    if (!galleryContainer) return;

    galleryContainer.innerHTML = "";

    list.forEach(art => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${art.image}" alt="${art.title}" loading="lazy">
            <h3>${art.title}</h3>
            <p><strong>Region:</strong> ${art.region}</p>
            <p>${art.description}</p>
        `;

        galleryContainer.appendChild(card);
    });
}

/* =========================
   FILTER FUNCTION
========================= */

function filterArtworks(category) {
    if (category === "all") {
        displayArtworks(artworks);
    } else {
        const filtered = artworks.filter(art => art.category === category);
        displayArtworks(filtered);
    }
}

/* =========================
   FILTER BUTTON EVENTS
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        filterArtworks(category);
    });
});

/* =========================
   INITIAL LOAD
========================= */

displayArtworks(artworks);