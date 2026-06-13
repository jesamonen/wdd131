const artists = [
    {
        name: "Ben Enwonwu",
        specialty: "Sculptor & Painter",
        region: "Eastern Nigeria",
        image: "images/ben.webp",
        description: "One of Nigeria's most influential modern artists."
    },
    {
        name: "Bruce Onobrakpeya",
        specialty: "Printmaker",
        region: "Delta State",
        image: "images/bruce.webp",
        description: "Known for experimental printmaking techniques."
    },
    {
        name: "Nike Okundaye",
        specialty: "Textile Artist",
        region: "Oyo State",
        image: "images/nike.webp",
        description: "Internationally known for Adire textile art."
    },
    {
        name: "Yusuf Grillo",
        specialty: "Painter",
        region: "Lagos State",
        image: "images/yusuf.webp",
        description: "Famous for blue-toned modern Nigerian paintings."
    }
];

/* =========================
   ELEMENTS
========================= */

const container = document.getElementById("artistContainer");
const search = document.getElementById("searchArtist");
const randomBtn = document.getElementById("randomArtistBtn");
const featured = document.getElementById("featuredArtist");
const greeting = document.getElementById("visitorGreeting");

/* =========================
   DISPLAY FUNCTION
========================= */

function display(list) {
    container.innerHTML = "";

    list.forEach(artist => {
        const card = document.createElement("div");
        card.classList.add("artist-card");

        card.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}" loading="lazy">
            <h3>${artist.name}</h3>
            <p><strong>${artist.specialty}</strong></p>
            <p>${artist.region}</p>
            <p>${artist.description}</p>
        `;

        container.appendChild(card);
    });
}

/* =========================
   SEARCH FUNCTION
========================= */

search.addEventListener("input", () => {
    const value = search.value.toLowerCase();

    const filtered = artists.filter(a =>
        a.name.toLowerCase().includes(value)
    );

    display(filtered);
});

/* =========================
   RANDOM ARTIST
========================= */

randomBtn.addEventListener("click", () => {
    const random = artists[Math.floor(Math.random() * artists.length)];

    featured.innerHTML = `
        <div class="artist-card">
            <img src="${random.image}" alt="${random.name}" loading="lazy">
            <h3>${random.name}</h3>
            <p><strong>${random.specialty}</strong></p>
            <p>${random.description}</p>
        </div>
    `;
});

/* =========================
   LOCAL STORAGE GREETING
========================= */

window.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("visitorName");

    if (savedName) {
        greeting.textContent = `Welcome back, ${savedName}!`;
    }
});

/* =========================
   INITIAL LOAD
========================= */

display(artists);