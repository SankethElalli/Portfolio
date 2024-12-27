// Select elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

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

// Initialize ScrollReveal
const scrollRevealConfig = {
    distance: '80px',
    duration: 2000,
    delay: 200
};

ScrollReveal(scrollRevealConfig).reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal(scrollRevealConfig).reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal(scrollRevealConfig).reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal(scrollRevealConfig).reveal('.home-content p, .about-content', { origin: 'right' });

// Toggle navbar on menu icon click
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

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

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);
