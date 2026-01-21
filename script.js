// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Simple Contact Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Message sent successfully!");
    contactForm.reset();
});
