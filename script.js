// Select elements
const menuIcon = document.querySelector('#menu-icon');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
}));

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Function to handle scroll events
const handleScroll = () => {
    const top = window.scrollY;

    sections.forEach(section => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    header.classList.toggle('sticky', top > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Enhanced scroll reveal configurations
const scrollRevealConfig = {
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true
};

// Initialize ScrollReveal
ScrollReveal(scrollRevealConfig).reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal(scrollRevealConfig).reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal(scrollRevealConfig).reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal(scrollRevealConfig).reveal('.home-content p, .about-content', { origin: 'right' });

// Close navbar on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Disable context menu
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('All mouse functions disabled!');
});

// Add cursor trailer effect
const cursor = document.createElement('div');
cursor.className = 'cursor-trailer';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);
