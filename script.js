const form = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xzdaygbo", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        form.reset();
        formMessage.style.display = "block";
    } else {
        alert("Something went wrong. Please try again.");
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("navLinks");

    burger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

});