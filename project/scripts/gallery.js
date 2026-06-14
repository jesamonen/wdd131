
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
        description: "The Benin Bronzes are royal bronze plaques and sculptures created by artists of the Kingdom of Benin in present-day Nigeria.Cast using the lost-wax technique, they depict kings, chiefs, warriors, and important historical events, showcasing the kingdom's rich culture, history, and exceptional craftsmanship."
    },
    {
        title: "Ife Heads",
        category: "sculpture",
        region: "Oyo State",
        image: "images/ife.webp",
        description: "The Ife Bronze Heads are highly realistic bronze and brass sculptures created by the Yoruba civilization in Ile-Ife. They portray kings and other important figures with remarkable detail and are celebrated for their artistic excellence and naturalistic style.."
    },
    {
        title: "Osun Festival Art",
        category: "festival",
        region: "Osun State",
        image: "images/osun.webp",
        description: "The Osun-Osogbo Festival is a colorful annual cultural festival that honors the river goddess Osun, celebrating Yoruba traditions through sacred rituals, music, dance, and vibrant processions."
    },
    {
        title: "Durbar Celebration",
        category: "festival",
        region: "Kano State",
        image: "images/durbar.webp",
        description: "Royal horse parade featuring traditional northern Nigerian cultureA spectacular royal horse parade celebrating northern Nigerian culture through traditional horsemanship, colorful regalia, music, and ceremonial displays."
    },
    {
        title: "Argungu Festival",
        category: "festival",
        region: "Kebbi State",
        image: "images/argungu.webp",
        description: "The Argungu Fishing Festival is a traditional Nigerian festival held in Kebbi State that features a large communal fishing competition on the Argungu River, along with cultural dances, music, and celebrations of local heritage."
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