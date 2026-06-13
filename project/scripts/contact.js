
/* =========================
   GET ELEMENTS
========================= */

const form = document.getElementById("contactForm");
const responseBox = document.getElementById("responseMessage");

const nameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const topicInput = document.getElementById("topic");
const messageInput = document.getElementById("message");

/* =========================
   LOAD VISITOR NAME (LOCAL STORAGE)
========================= */

window.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("visitorName");

    if (savedName) {
        responseBox.style.display = "block";
        responseBox.innerHTML = `
            <h2>Welcome back, ${savedName}!</h2>
            <p>We’re glad to see you again at the Nigerian Art & Culture Showcase.</p>
        `;
    }
});

/* =========================
   FORM SUBMIT HANDLER
========================= */

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validation
        if (
            nameInput.value.trim() === "" ||
            emailInput.value.trim() === "" ||
            countryInput.value.trim() === "" ||
            messageInput.value.trim() === ""
        ) {
            responseBox.style.display = "block";
            responseBox.innerHTML = `
                <h2>Error</h2>
                <p>Please fill in all required fields.</p>
            `;
            return;
        }

        // Save name in localStorage
        localStorage.setItem("visitorName", nameInput.value);

        // Success message
        responseBox.style.display = "block";
        responseBox.innerHTML = `
            <h2>Thank You, ${nameInput.value}!</h2>
            <p>Your message has been received.</p>
            <p>We appreciate your interest in Nigerian art and culture.</p>
        `;

        // Reset form
        form.reset();
    });
}