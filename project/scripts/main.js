
/* =========================
   FOOTER DATES
========================= */

const yearSpan = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

const today = new Date();

if (yearSpan) {
    yearSpan.textContent = today.getFullYear();
}

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navigation");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

/* =========================
   HERO IMAGE SLIDER (HOME PAGE)
========================= */

const heroImages = [
    "images/hero1.webp",
    "images/nok.webp",
    "images/benin_bronze.jpg",
    "images/festival.webp"
];

let currentIndex = 0;
const heroImage = document.getElementById("heroImage");

function changeHeroImage() {
    if (!heroImage) return;

    currentIndex++;

    if (currentIndex >= heroImages.length) {
        currentIndex = 0;
    }

    heroImage.src = heroImages[currentIndex];
}

// change image every 4 seconds
setInterval(changeHeroImage, 4000);