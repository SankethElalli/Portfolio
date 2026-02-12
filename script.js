window.addEventListener('load', function() {
    const loader = document.getElementById('loader-overlay');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loaded');
            setTimeout(() => loader.style.display = 'none', 500);
        }, 500);
    }
});

// Project details data
const projectDetails = {
    pillora: {
        title: 'Pillora',
        details: [
            'Full-stack MERN (MongoDB, Express, React, Node.js) online pharmacy store',
            'User authentication with JWT token management',
            'Product catalog with filters, search, and sorting capabilities',
            'Shopping cart and checkout system with payment integration',
            'Admin dashboard for inventory and order management',
            'Responsive design optimized for all devices',
            'Real-time order tracking and status updates'
        ],
        skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Payment API', 'Websockets.io', 'Restful APIs', 'CI/CD']
    },
    agrihub: {
        title: 'AgriHub',
        details: [
            'LLM-assisted portal for sustainable agriculture practices',
            'Built with PHP for server-side development',
            'DeepSeek AI powered crop recommendations, crop prediction, yeild estimation and rainfall prediction',
            'MistralAI Chatbot for real-time farmer support and guidance',
            'Weather forecasting integration for better planning',
            'Marketplace for farmers to sell produce directly',
            'Educational resources on sustainable farming methods'
        ],
        skills: ['PHP', 'HTML5', 'CSS3', 'DeepSeek AI', 'Mistral AI', 'MySQL', 'Chatbot']
    },
    writerboard: {
        title: 'WriterBoard',
        details: [
            'Desktop application built with Qt framework',
            'Advanced text editing with multiple formatting options',
            'Project and document management system',
            'Real-time collaboration features',
            'Cloud synchronization for seamless access',
            'Distraction-free writing environment',
            'Support for various file formats and export options'
        ],
        skills: ['Qt', 'C++', 'Desktop Apps', 'UI/UX', 'MySQL']
    },
    westernstreet: {
        title: 'WesternStreet',
        details: [
            'E-commerce platform for sneaker enthusiasts',
            'Built with MERN stack for scalable architecture',
            'User account management and order history',
            'Product filtering by brand, size, price, and style',
            'Secure payment processing and checkout',
            'Admin panel for product and order management',
            'Review and rating system for customer feedback'
        ],
        skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Payment API', 'Websockets.io', 'Socket.io', 'CI/CD', 'Restful APIs']
    },
    qrattendance: {
        title: 'Networked QR Code Attendance System',
        details: [
            'Django-based attendance management system',
            'QR code generation and scanning for quick check-in',
            'Networked architecture for IP based location support',
            'Real-time attendance tracking and reporting',
            'User roles (admin, instructor, student) with permissions',
            'Data export capabilities in multiple formats'
        ],
        skills: ['Django', 'Python', 'Authentication', 'TCP/IP networking', 'IP-based access control']
    },
    qcalc: {
        title: 'QCalc',
        details: [
            'Calculator application developed with Qt framework',
            'Support for basic arithmetic operations',
            'Scientific calculator functions (trigonometry, logarithms)',
            'Calculation history and memory features',
            'Keyboard shortcuts for enhanced usability',
            'Clean and intuitive user interface',
            'Cross-platform compatibility'
        ],
        skills: ['Qt', 'C++', 'Desktop Apps']
    },
    bloodbank: {
        title: 'Blood Bank Inventory Management System',
        details: [
            'Web-based system for managing blood bank operations',
            'Built with PHP for reliable server-side processing',
            'Blood inventory tracking and management',
            'Donor database with blood type and health information',
            'Request fulfillment and allocation system',
            'Generate reports on stock levels and usage'
        ],
        skills: ['PHP', 'MySQL', 'HTML5', 'CSS3']
    },
    genaimodel: {
        title: 'Gen AI model',
        details: [
            'Generative AI model hosted on Hugging Face',
            'Advanced AI architecture for Image generation',
            'Trained on simple datasets',
            'API access for integration with applications',
            'Pre-trained weights available for fine-tuning',
            'Optimized for inference speed and accuracy',
            'Comprehensive documentation and usage examples'
        ],
        skills: ['Python', 'Artificial Intelligence', 'Machine Learning', 'Stable Diffusion']   
    },
    coreaivideo: {
        title: 'CoreAIVideo',
        details: [
            'Built and scaled end-to-end automation systems using n8n for data ingestion, AI processing, and analytics',
            'Designed production-grade AI agent workflows with RAG pipelines backed by vector stores for semantic retrieval',
            'Implemented multi-agent orchestration with strict system prompts and validation for deterministic outputs',
            'Reverse-engineered and integrated third-party APIs and web sources for continuous data collection',
            'Created incremental data update pipelines to merge new data with existing datasets efficiently',
            'Transformed unstructured inputs into clean, dashboard-ready JSON schemas for product and analytics teams',
            'Debugged and optimized high-volume workflows resolving agent failures and execution bottlenecks',
            'Rapidly iterated on workflow design with founders to ship features end-to-end',
            'Owned automation reliability, scalability, and performance in a fast-moving startup environment'
        ],
        skills: ['n8n', 'AI Agents', 'RAG', 'Restful APIs', 'AI & Automation', 'LLM Orchestration', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'CI/CD' ]
    },
    capitalis: {
        title: 'Capitalis',
        details: [
            'Designed and built a calm, minimalist application focused on helping users reason about time, energy, and capital allocation',
            'Implemented a modular AI reasoning layer orchestrated via n8n, transforming user reflections into structured insights',
            'Architected a schema-driven system where frontend UI renders entirely from workflow outputs, enabling zero hardcoding',
            'Built a scalable webhook-based integration with strict JSON contracts, validation, and normalization for reliability',
            'Focused on product restraint and UX clarity, prioritizing cognitive load and calm interaction design over dashboards',
            'Enabled high extensibility through workflow-driven architecture with progressive disclosure and mindset-shaping insights'
        ],
        skills: ['n8n', 'AI & Automation', 'JSON Schema', 'TypeScript', 'React', 'Motoko']
    }
};

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

// Modal functionality
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalTitle = document.getElementById('modalProjectTitle');
const modalDetails = document.getElementById('modalProjectDetails');

// Open modal
document.querySelectorAll('.know-more-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-project');
        const project = projectDetails[projectId];
        
        if (project) {
            modalTitle.textContent = 'Details';
            modalDetails.innerHTML = project.details
                .map(detail => `<li>${detail}</li>`)
                .join('');
            
            // Render skills
            const skillsContainer = document.getElementById('modalProjectSkills');
            if (project.skills && project.skills.length > 0) {
                skillsContainer.innerHTML = project.skills
                    .map(skill => `<span class="skill-badge">${skill}</span>`)
                    .join('');
            } else {
                skillsContainer.innerHTML = '';
            }
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

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
