// ==== NAVBAR SCROLL EFFECT ====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==== MOBILE MENU TOGGLE ====
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
    
    // Change icon based on menu state
    if (menuBtn.classList.contains('active')) {
        menuBtn.querySelector('i').classList.replace('ri-menu-line', 'ri-close-line');
    } else {
        menuBtn.querySelector('i').classList.replace('ri-close-line', 'ri-menu-line');
    }
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
        menuBtn.querySelector('i').classList.replace('ri-close-line', 'ri-menu-line');
    });
});

// ==== ACTIVE NAV LINK ON SCROLL ====
const sections = document.querySelectorAll('section');
const navLinkItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==== SKILLS ANIMATION ====
const skillsSection = document.querySelector('.skills-section');
const skillProgressBars = document.querySelectorAll('.skill-progress');

const showProgress = () => {
    skillProgressBars.forEach(progress => {
        const value = progress.dataset.progress;
        progress.style.width = `${value}%`;
    });
};

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    
    if (sectionPos < screenPos) {
        showProgress();
    }
});

// ==== SCROLL REVEAL ANIMATION ====
const scrollElements = document.querySelectorAll('.timeline-item, .about-content, .skills-content');

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

// Initialize ScrollReveal
window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// ==== FORM VALIDATION ====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For now, just show a success message
        alert('Message sent successfully!');
        contactForm.reset();
    });
}

// ==== INITIALIZE ANIMATIONS ON PAGE LOAD ====
window.addEventListener('load', () => {
    // Initialize skill bars
    if (elementInView(skillsSection)) {
        showProgress();
    }
    
    // Initialize scroll animations
    handleScrollAnimation();
});