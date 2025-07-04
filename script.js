// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.bottom = `-${size}px`;
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Welcome Screen Navigation
document.getElementById('viewPortfolio').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('payment-page');
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('portfolioContent').classList.remove('hidden');
    document.getElementById('portfolioContent').classList.add('visible');
    document.getElementById('paymentContent').classList.add('hidden');
    document.getElementById('paymentContent').classList.remove('visible');
    document.body.style.overflowY = 'auto';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    initPortfolio();
});

document.getElementById('viewPayment').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('payment-page');
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('paymentContent').classList.remove('hidden');
    document.getElementById('paymentContent').classList.add('visible');
    document.getElementById('portfolioContent').classList.add('hidden');
    document.getElementById('portfolioContent').classList.remove('visible');
    document.body.style.overflowY = 'auto';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('backToWelcome').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('payment-page');
    document.getElementById('paymentContent').classList.remove('visible');
    document.getElementById('paymentContent').classList.add('hidden');
    document.getElementById('portfolioContent').classList.remove('visible');
    document.getElementById('portfolioContent').classList.add('hidden');
    document.getElementById('welcomeScreen').classList.remove('hidden');
    document.body.style.overflowY = 'hidden';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('portfolioBackToWelcome').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('payment-page');
    document.getElementById('portfolioContent').classList.remove('visible');
    document.getElementById('portfolioContent').classList.add('hidden');
    document.getElementById('paymentContent').classList.remove('visible');
    document.getElementById('paymentContent').classList.add('hidden');
    document.getElementById('welcomeScreen').classList.remove('hidden');
    document.body.style.overflowY = 'hidden';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// QRIS Overlay Toggle
document.getElementById('viewQris').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('qrisOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.getElementById('closeQrisOverlay').addEventListener('click', () => {
    document.getElementById('qrisOverlay').classList.remove('active');
    document.body.style.overflow = '';
});

document.getElementById('qrisOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('qrisOverlay')) {
        document.getElementById('qrisOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Thanks Overlay Toggle
document.getElementById('thanksButton').addEventListener('click', () => {
    document.getElementById('thanksOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.getElementById('closeThanksOverlay').addEventListener('click', () => {
    document.getElementById('thanksOverlay').classList.remove('active');
    document.body.style.overflow = '';
});

document.getElementById('thanksOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('thanksOverlay')) {
        document.getElementById('thanksOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Portfolio Page Functions
function initPortfolio() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navbarLinks = document.getElementById('navbarLinks');
    
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navbarLinks.classList.toggle('active');
        document.body.style.overflow = navbarLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            navbarLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    let lastScroll = 0;
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('hidden');
            navbar.classList.remove('scrolled');
        } else if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            }
        }
        
        lastScroll = currentScroll;
    });
    
    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            document.querySelectorAll('.navbar-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    const scrollIndicator = document.getElementById('scrollIndicator');
    
    scrollIndicator.addEventListener('click', () => {
        window.scrollBy({
            top: window.innerHeight - 80,
            behavior: 'smooth'
        });
    });
    
    const sections = document.querySelectorAll('.section');
    
    function checkSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
                
                const skillCategories = section.querySelectorAll('.skill-category');
                const projectCards = section.querySelectorAll('.project-card');
                const serviceCards = section.querySelectorAll('.service-card');
                const contactCards = section.querySelectorAll('.contact-card');
                
                if (skillCategories.length > 0) {
                    skillCategories.forEach((category, index) => {
                        setTimeout(() => {
                            category.classList.add('visible');
                        }, index * 200);
                    });
                }
                
                if (projectCards.length > 0) {
                    projectCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 200);
                    });
                }
                
                if (serviceCards.length > 0) {
                    serviceCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 200);
                    });
                }
                
                if (contactCards.length > 0) {
                    contactCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 200);
                    });
                }
            }
        });
    }
    
    window.addEventListener('scroll', checkSections);
    window.addEventListener('load', checkSections);
    
    const typewriterElement = document.querySelector('.header-subtitle .typewriter');
    const texts = ["Young Developer", "Tech Enthusiast", "Student", "Programmer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, isDeleting ? 50 : 100);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Welcome Screen Typewriter
function welcomeTypeWriter() {
    const typewriterElement = document.querySelector('.welcome-subtitle .typewriter');
    const texts = ["Please choose what you're looking for", "Explore my projects", "Let's collaborate!"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    
    setTimeout(type, 1000);
}

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Initialize particles, welcome screen, and audio
window.addEventListener('DOMContentLoaded', () => {
    createParticles();
    document.getElementById('portfolioContent').classList.add('hidden');
    document.getElementById('paymentContent').classList.add('hidden');
    document.body.style.overflowY = 'hidden';
    welcomeTypeWriter();
    
    // Play audio
    const audio = document.getElementById('welcomeAudio');
    audio.volume = 0.5;
    audio.play().catch(err => {
        console.error('Failed to play audio:', err);
    });
});
