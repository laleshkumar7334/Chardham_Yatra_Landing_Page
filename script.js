// Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // Auto change every 4 seconds

// Form Submission Handler
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.fullName.value;
    const from = this.from.value;
    const to = this.to.value;
    const date = this.journeyDate.value;

    document.getElementById('form-message').textContent =
        `Thanks ${name}, your ride from ${from} to ${to} on ${date} has been requested. We’ll contact you soon!`;

    this.reset();
});

// Toggle Menu on Mobile
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});