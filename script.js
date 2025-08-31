// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// Initialize Portfolio
function initializePortfolio() {
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Terminal typing animation
    initTerminalAnimation();
    
    // Scroll effects
    initScrollEffects();
    
    // Matrix background animation
    initMatrixBackground();
    
    // Loading animations
    initLoadingAnimations();
    
    // Contact form handling
    initContactHandling();
    
    // Contact form handling
    initContactFormHandling();
    
    // Navigation highlighting
    initNavigationHighlighting();
}

// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Terminal Animation
function initTerminalAnimation() {
    const typingElement = document.querySelector('.typing-animation');
    const cursor = document.querySelector('.cursor');
    
    if (typingElement && cursor) {
        const text = './initialize_portfolio.sh';
        let index = 0;
        
        // Clear initial text
        typingElement.textContent = '';
        
        function typeText() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 100);
            } else {
                // After typing, show execution
                setTimeout(() => {
                    cursor.style.display = 'none';
                    showPortfolioInitialization();
                }, 1000);
            }
        }
        
        // Start typing after a delay
        setTimeout(typeText, 2000);
    }
}

// Show Portfolio Initialization
function showPortfolioInitialization() {
    const terminalBody = document.querySelector('.terminal-body');
    
    const initLines = [
        '<p class="terminal-output" style="color: #3b82f6;">Initializing cybersecurity portfolio...</p>',
        '<p class="terminal-output" style="color: #ffbd2e;">Loading security modules... [████████████] 100%</p>',
        '<p class="terminal-output" style="color: #00bfff;">Establishing secure connection... ✓</p>',
        '<p class="terminal-output" style="color: #3b82f6;">Portfolio ready! Welcome to my cybersecurity showcase.</p>'
    ];
    
    let lineIndex = 0;
    
    function addLine() {
        if (lineIndex < initLines.length) {
            terminalBody.innerHTML += initLines[lineIndex];
            lineIndex++;
            setTimeout(addLine, 800);
        }
    }
    
    setTimeout(addLine, 500);
}

// Scroll Effects
function initScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.cyber-nav');
        
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section:not(.hero-section)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Matrix Background Animation
function initMatrixBackground() {
    const matrixBg = document.querySelector('.matrix-bg');
    
    if (matrixBg) {
        // Create floating particles
        for (let i = 0; i < 50; i++) {
            createFloatingParticle(matrixBg);
        }
    }
}

// Create Floating Particle
function createFloatingParticle(container) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = '#3b82f6';
    particle.style.borderRadius = '50%';
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 15000);
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Loading Animations
function initLoadingAnimations() {
    // Add loading class to elements
    const animatedElements = document.querySelectorAll('.cyber-card, .project-card, .skill-item, .timeline-card');
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Stagger animations
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Contact Handling
function initContactHandling() {
    // Email button click tracking
    const emailButtons = document.querySelectorAll('a[href^="mailto:"]');
    
    emailButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Email contact initiated');
            // You can add analytics tracking here
        });
    });
    
    // CV download tracking
    const downloadButtons = document.querySelectorAll('a[download]');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('CV download initiated');
            // You can add analytics tracking here
            
            // Show download notification
            showNotification('CV download started', 'success');
        });
    });
    
    // LinkedIn link tracking
    const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com"]');
    
    linkedinLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('LinkedIn profile visited');
            // You can add analytics tracking here
        });
    });
}

// Navigation Highlighting
function initNavigationHighlighting() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Show Notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-card);
        color: var(--text-primary);
        border: 1px solid var(--primary-color);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 0 20px var(--glow-color);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-family: 'Orbitron', monospace;
    `;
    
    // Add slide in animation
    const slideInKeyframes = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const notificationStyles = document.createElement('style');
        notificationStyles.id = 'notification-styles';
        notificationStyles.textContent = slideInKeyframes;
        document.head.appendChild(notificationStyles);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add slide out animation
const slideOutKeyframes = `
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // Press 'h' to go to home
    if (e.key === 'h' || e.key === 'H') {
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'c' to go to contact
    if (e.key === 'c' || e.key === 'C') {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'd' to download CV
    if (e.key === 'd' || e.key === 'D') {
        const downloadLink = document.querySelector('a[download]');
        if (downloadLink) {
            downloadLink.click();
        }
    }
});

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateHackerMode();
        konamiCode = [];
    }
});

// Activate Hacker Mode
function activateHackerMode() {
    document.body.classList.add('hacker-mode');
    showNotification('🚀 Hacker Mode Activated! 🚀', 'success');
    
    // Add glitch effect to title
    const title = document.querySelector('.cyber-brand');
    if (title) {
        title.classList.add('glitch');
    }
    
    // Add matrix effect
    const matrixBg = document.querySelector('.matrix-bg');
    if (matrixBg) {
        for (let i = 0; i < 100; i++) {
            createFloatingParticle(matrixBg);
        }
    }
    
    // Remove effects after 10 seconds
    setTimeout(() => {
        document.body.classList.remove('hacker-mode');
        if (title) {
            title.classList.remove('glitch');
        }
    }, 10000);
}

// Performance Optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll handling code here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Preload CV for faster download
function preloadCV() {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = 'assets/Nawal_Wahdan_CV.pdf';
    document.head.appendChild(link);
}

// Call preload after page load
window.addEventListener('load', preloadCV);

// Browser Support Detection
function detectBrowserSupport() {
    const isModernBrowser = 'IntersectionObserver' in window && 
                           'Promise' in window && 
                           'fetch' in window;
    
    if (!isModernBrowser) {
        console.warn('Some features may not work in your browser. Please consider upgrading.');
    }
}

detectBrowserSupport();

// Console Art
// Translation functionality
function toggleTranslation() {
    const englishText = document.getElementById('passion-text');
    const arabicText = document.getElementById('passion-text-arabic');
    const translateBtn = document.getElementById('translate-btn-text');
    
    if (englishText.style.display === 'none') {
        // Show English, hide Arabic
        englishText.style.display = 'block';
        arabicText.style.display = 'none';
        translateBtn.textContent = 'Translate to Arabic';
    } else {
        // Show Arabic, hide English
        englishText.style.display = 'none';
        arabicText.style.display = 'block';
        translateBtn.textContent = 'Translate to English';
    }
}

// Contact form handling
function initContactFormHandling() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create mailto link with form data
            const mailtoLink = `mailto:nawal100mohamed@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show notification
            showNotification('Opening your email client...', 'success');
            
            // Optional: Reset form
            contactForm.reset();
        });
    }
}

console.log(`
 ██████╗██╗   ██╗██████╗ ███████╗██████╗ 
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗
╚██████╗   ██║   ██████╔╝███████╗██║  ██║
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝
                                          
Welcome to Nawal Wahdan's Cybersecurity Portfolio!
Type 'h' for home, 'c' for contact, 'd' to download CV
Try the Konami Code for a surprise! ↑↑↓↓←→←→BA
`);
