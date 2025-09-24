window.addEventListener('load', function() {
    const loader = document.getElementById('loader-overlay');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loaded');
            setTimeout(() => loader.style.display = 'none', 500);
        }, 500);
    }
});

const menuIcon = document.querySelector('#menu-icon');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');
const navbarContainer = document.querySelector('.navbar-container');
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navbar.classList.toggle("active");
    });

    document.querySelectorAll(".navbar a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navbar.classList.remove("active");
    }));
}

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}

let lastScrollTop = 0;
const handleScroll = () => {
    const currentScroll = window.scrollY;
    const scrollDirection = currentScroll > lastScrollTop ? "down" : "up";

    if (navbarContainer) {
        if (currentScroll > 100) {
            if (scrollDirection === "down") {
                navbarContainer.style.transform = "translateX(-50%) translateY(-180%)";
            } else {
                navbarContainer.style.transform = "translateX(-50%) translateY(0)";
            }
        } else {
            navbarContainer.style.transform = "translateX(-50%) translateY(0)";
        }
    }

    lastScrollTop = currentScroll;

    const top = window.scrollY;

    sections.forEach(section => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                // Only add 'active' if the link exists
                const navLink = document.querySelector(`.navbar a[href*="${id}"]`);
                if (navLink) {
                    navLink.classList.add('active');
                }
            });
        }
    });

    if (navbarContainer) {
        navbarContainer.classList.toggle('sticky', top > 100);
    }
};

AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const scrollRevealConfig = {
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true
};

if (typeof ScrollReveal !== "undefined") {
    ScrollReveal(scrollRevealConfig).reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal(scrollRevealConfig).reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal(scrollRevealConfig).reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal(scrollRevealConfig).reveal('.home-content p, .about-content', { origin: 'right' });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('All mouse functions disabled!');
});

const cursor = document.createElement('div');
cursor.className = 'cursor-trailer';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

window.addEventListener('scroll', handleScroll);

document.querySelectorAll('.services-box').forEach(box => {
    const particlesContainer = box.querySelector('.particles');
    box.addEventListener('mouseenter', () => {
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 8 + 6;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 90 + 2}%`;
            particle.style.bottom = `${Math.random() * 10 + 5}px`;
            // Use the correct color for the particle
            particle.style.background = '#f8ffc9';
            particle.style.opacity = 0.7;
            particle.style.animationDelay = `${Math.random() * 0.3}s`;
            particlesContainer.appendChild(particle);
            particle.addEventListener('animationend', () => {
                particle.remove();
            });
        }
    });
    box.addEventListener('mouseleave', () => {
        setTimeout(() => {
            particlesContainer.innerHTML = '';
        }, 1200);
    });
});

// Show/hide down-arrow only when home section is in view
(function() {
  const downArrow = document.querySelector('.down-arrow');
  const homeSection = document.getElementById('home');
  if (!downArrow || !homeSection) return;

  function checkArrowVisibility() {
    const rect = homeSection.getBoundingClientRect();
    // Show only if the home section is fully in view
    if (rect.top <= 0 && rect.bottom > window.innerHeight) {
      downArrow.style.opacity = '0.95';
      downArrow.style.pointerEvents = '';
    } else {
      downArrow.style.opacity = '0';
      downArrow.style.pointerEvents = 'none';
    }
  }

  window.addEventListener('scroll', checkArrowVisibility);
  window.addEventListener('resize', checkArrowVisibility);
  document.addEventListener('DOMContentLoaded', checkArrowVisibility);
  checkArrowVisibility();
})();
