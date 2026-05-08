// ============================================
// Language Switching
// ============================================
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('lang') || 'zh';

    function applyLanguage(lang) {
        document.body.classList.toggle('lang-en', lang === 'en');

        // Update all elements with data-zh/data-en attributes
        document.querySelectorAll('[data-zh][data-en]').forEach(el => {
            el.textContent = lang === 'zh' ? el.getAttribute('data-zh') : el.getAttribute('data-en');
        });

        // Update html lang attribute
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    }

    // Apply saved language on load
    applyLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang);
    });
}

// ============================================
// Particle System
// ============================================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${6 + Math.random() * 4}s`;
        particle.style.width = `${1 + Math.random() * 3}px`;
        particle.style.height = particle.style.width;
        particle.style.opacity = 0.1 + Math.random() * 0.3;
        container.appendChild(particle);
    }
}

// ============================================
// Navbar
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link tracking
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
        rootMargin: '-20% 0px -80% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// ============================================
// Scroll Animations
// ============================================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.section-header, .highlight-card, .research-card, .publication-item, .timeline-item, .skill-category, .contact-method, .project-card, .education-card');

    const observerOptions = {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
}

// ============================================
// Counter Animation
// ============================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-count'));
                const isDecimal = target % 1 !== 0;
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = isDecimal ? current.toFixed(2) : Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = isDecimal ? target.toFixed(2) : target;
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 72;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Cursor Effect
// ============================================
function initCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);

    const style = document.createElement('style');
    style.textContent = `
        .cursor-glow {
            position: fixed;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: opacity 0.3s ease;
            opacity: 0;
        }
        .cursor-glow.active {
            opacity: 1;
        }
        @media (max-width: 768px) {
            .cursor-glow { display: none; }
        }
    `;
    document.head.appendChild(style);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });

    function animate() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        requestAnimationFrame(animate);
    }
    animate();
}

// ============================================
// Parallax Effect
// ============================================
function initParallax() {
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });
}

// ============================================
// Initialize All
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    initParticles();
    initNavbar();
    initSmoothScroll();
    initScrollAnimations();
    initCounters();
    initCursorEffect();
    initParallax();
});
