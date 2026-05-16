// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("show");

    if (menuBtn.textContent === "☰") {
        menuBtn.textContent = "X";
    } else {
        menuBtn.textContent = "☰";
    }
});