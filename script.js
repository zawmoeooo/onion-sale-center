/**
 * ONION SALE CENTER - MAIN JAVASCRIPT
 * ==================================
 * Handles all dynamic content loading and interactivity
 * Supports English and Myanmar languages with gallery modal
 */

// ========================================
// LANGUAGE MANAGEMENT
// ========================================

let currentLanguage = localStorage.getItem('language') || 'en';

function getTranslation(path) {
    const keys = path.split('.');
    let value = BUSINESS_CONFIG.languages[currentLanguage];
    
    for (let key of keys) {
        if (value && typeof value === 'object' && key in value) {
            value = value[key];
        } else {
            return path; // Return path if translation not found
        }
    }
    return value;
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateAllContent();
    updateLanguageButtons();
    closeLanguageDropdown();
}

function updateLanguageButtons() {
    // Update toggle button
    const toggleBtn = document.getElementById('langToggleBtn');
    if (toggleBtn) {
        toggleBtn.textContent = currentLanguage === 'my' ? '🇲🇲 Myanmar' : '🇬🇧 EN';
        toggleBtn.setAttribute('data-lang', currentLanguage);
    }

    // Update dropdown options
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

function updateTextContent() {
    document.querySelectorAll('[data-text]').forEach(element => {
        const key = element.getAttribute('data-text');
        element.textContent = getTranslation(key);
    });
}

// ========================================
// LANGUAGE DROPDOWN MANAGEMENT
// ========================================

function toggleLanguageDropdown() {
    const selector = document.getElementById('languageSelector');
    selector.classList.toggle('open');
}

function closeLanguageDropdown() {
    const selector = document.getElementById('languageSelector');
    selector.classList.remove('open');
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeWebsite();
});

function initializeWebsite() {
    // Hide loading spinner
    setTimeout(() => {
        document.getElementById('loadingSpinner').classList.add('hidden');
    }, 500);

    // Initialize language
    updateLanguageButtons();

    // Load all content from config
    loadBusinessInfo();
    loadAboutSection();
    loadGoalsSection();
    loadServicesSection();
    loadGallerySection();
    loadBenefitsSection();
    loadContactSection();
    loadMapSection();
    loadFooter();

    // Initialize interactions
    initializeHeaderMenu();
    initializeLanguageDropdown();
    initializeHeroSlider();
    initializeThemeToggle();
    initializeScrollAnimations();
    initializeScrollSpy();
    initializeBackToTop();
    initializeGalleryModal();

    // Set current year
    document.getElementById('footerYear').textContent = new Date().getFullYear();

    // Update text content for current language
    updateTextContent();
}

function updateAllContent() {
    loadBusinessInfo();
    loadAboutSection();
    loadGoalsSection();
    loadServicesSection();
    loadGallerySection();
    loadBenefitsSection();
    loadContactSection();
    loadMapSection();
    loadFooter();
    updateTextContent();
}

// ========================================
// CONTENT LOADING FUNCTIONS
// ========================================

function loadBusinessInfo() {
    const config = BUSINESS_CONFIG;
    const lang = getTranslation('businessName');
    const tagline = getTranslation('tagline');
    
    document.getElementById('logo').src = config.logo;
    document.getElementById('businessName').textContent = lang;
    document.getElementById('heroTitle').textContent = lang;
    document.getElementById('heroTagline').textContent = tagline;
}

function loadAboutSection() {
    const about = getTranslation('about');

    document.getElementById('aboutTitle').textContent = about.title;
    document.getElementById('aboutDescription').textContent = about.description;
    document.getElementById('aboutHistory').textContent = about.history;
    document.getElementById('missionStatement').textContent = '🎯 ' + about.mission;
}

function loadGoalsSection() {
    const goals = getTranslation('goals');
    const goalsGrid = document.getElementById('goalsGrid');
    
    goalsGrid.innerHTML = '';
    goals.forEach((goal) => {
        const goalCard = document.createElement('div');
        goalCard.className = 'goal-card reveal';
        goalCard.innerHTML = `
            <div class="goal-icon">
                <i class="fas ${goal.icon}"></i>
            </div>
            <h3 class="goal-title">${goal.title}</h3>
            <p>${goal.description || ''}</p>
        `;
        goalsGrid.appendChild(goalCard);
    });
}

function loadServicesSection() {
    const services = getTranslation('services');
    const servicesGrid = document.getElementById('servicesGrid');
    
    servicesGrid.innerHTML = '';
    services.forEach((service) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card reveal';
        serviceCard.innerHTML = `
            <i class="fas ${service.icon} service-icon"></i>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

function loadGallerySection() {
    const config = BUSINESS_CONFIG;
    const galleryGrid = document.getElementById('galleryGrid');
    
    galleryGrid.innerHTML = '';
    config.galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item reveal';
        galleryItem.innerHTML = `
            <img src="${image}" alt="Gallery Image ${index + 1}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        `;
        
        // Add click to open image in modal
        galleryItem.addEventListener('click', () => {
            openGalleryModal(index);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

function loadBenefitsSection() {
    const benefits = getTranslation('benefits');
    const benefitsGrid = document.getElementById('benefitsGrid');
    
    benefitsGrid.innerHTML = '';
    benefits.forEach((benefit) => {
        const benefitCard = document.createElement('div');
        benefitCard.className = 'benefit-card reveal';
        benefitCard.innerHTML = `
            <div class="benefit-icon">
                <i class="fas ${benefit.icon}"></i>
            </div>
            <h3 class="benefit-title">${benefit.title}</h3>
            <p class="benefit-description">${benefit.description}</p>
        `;
        benefitsGrid.appendChild(benefitCard);
    });
}

function loadContactSection() {
    const config = BUSINESS_CONFIG;
    const contactGrid = document.getElementById('contactGrid');
    const contact = config.contact;
    const labels = getTranslation('contact_labels');
    
    contactGrid.innerHTML = '';

    // Phone
    const phoneCard = document.createElement('div');
    phoneCard.className = 'contact-card reveal';
    phoneCard.innerHTML = `
        <i class="fas fa-phone contact-icon"></i>
        <p class="contact-label">${labels.phone}</p>
        <p class="contact-value"><a href="tel:${contact.phone}">${contact.phone}</a></p>
    `;
    contactGrid.appendChild(phoneCard);

    // Email
    const emailCard = document.createElement('div');
    emailCard.className = 'contact-card reveal';
    emailCard.innerHTML = `
        <i class="fas fa-envelope contact-icon"></i>
        <p class="contact-label">${labels.email}</p>
        <p class="contact-value"><a href="mailto:${contact.email}">${contact.email}</a></p>
    `;
    contactGrid.appendChild(emailCard);

    // Facebook
    const facebookCard = document.createElement('div');
    facebookCard.className = 'contact-card reveal';
    facebookCard.innerHTML = `
        <i class="fab fa-facebook contact-icon"></i>
        <p class="contact-label">${labels.facebook}</p>
        <p class="contact-value"><a href="${contact.facebook}" target="_blank" rel="noopener noreferrer">Visit Page</a></p>
    `;
    contactGrid.appendChild(facebookCard);

    // TikTok
    const tiktokCard = document.createElement('div');
    tiktokCard.className = 'contact-card reveal';
    tiktokCard.innerHTML = `
        <i class="fab fa-tiktok contact-icon"></i>
        <p class="contact-label">${labels.tiktok}</p>
        <p class="contact-value"><a href="${contact.tiktok}" target="_blank" rel="noopener noreferrer">Visit</a></p>
    `;
    contactGrid.appendChild(tiktokCard);

    // WeChat
    const wechatCard = document.createElement('div');
    wechatCard.className = 'contact-card reveal';
    wechatCard.innerHTML = `
        <i class="fab fa-weixin contact-icon"></i>
        <p class="contact-label">${labels.wechat}</p>
        <p class="contact-value">${contact.wechat}</p>
    `;
    contactGrid.appendChild(wechatCard);

    // Viber
    const viberCard = document.createElement('div');
    viberCard.className = 'contact-card reveal';
    viberCard.innerHTML = `
        <i class="fas fa-phone contact-icon"></i>
        <p class="contact-label">${labels.viber}</p>
        <p class="contact-value"><a href="viber://contact?number=${contact.viber.replace(/\D/g, '')}">${contact.viber}</a></p>
    `;
    contactGrid.appendChild(viberCard);

    // WhatsApp
    const whatsappCard = document.createElement('div');
    whatsappCard.className = 'contact-card reveal';
    whatsappCard.innerHTML = `
        <i class="fab fa-whatsapp contact-icon"></i>
        <p class="contact-label">${labels.whatsapp}</p>
        <p class="contact-value"><a href="https://wa.me/${contact.whatsapp.replace(/\D/g, '')}" target="_blank" rel="noopener noreferrer">${contact.whatsapp}</a></p>
    `;
    contactGrid.appendChild(whatsappCard);

    // Telegram
    const telegramCard = document.createElement('div');
    telegramCard.className = 'contact-card reveal';
    telegramCard.innerHTML = `
        <i class="fab fa-telegram contact-icon"></i>
        <p class="contact-label">${labels.telegram}</p>
        <p class="contact-value"><a href="${contact.telegram}" target="_blank" rel="noopener noreferrer">Visit</a></p>
    `;
    contactGrid.appendChild(telegramCard);
}

function loadMapSection() {
    const config = BUSINESS_CONFIG;
    const addressKey = currentLanguage === 'my' ? 'text_my' : 'text_en';
    const address = config.address;

    document.getElementById('addressText').textContent = address[addressKey];
    
    const mapContainer = document.getElementById('mapContainer');
    mapContainer.innerHTML = `<iframe src="${address.googleMapEmbed}" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}

function loadFooter() {
    const config = BUSINESS_CONFIG;
    const businessName = getTranslation('businessName');
    document.getElementById('footerBusinessName').textContent = businessName;

    // Load social links
    const footerSocialLinks = document.getElementById('footerSocialLinks');
    const contact = config.contact;
    
    footerSocialLinks.innerHTML = '';

    // Social media links
    const socialLinks = [
        { icon: 'fab fa-facebook', url: contact.facebook, title: 'Facebook' },
        { icon: 'fab fa-tiktok', url: contact.tiktok, title: 'TikTok' },
        { icon: 'fab fa-whatsapp', url: `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`, title: 'WhatsApp' },
        { icon: 'fab fa-telegram', url: contact.telegram, title: 'Telegram' }
    ];

    socialLinks.forEach(link => {
        const socialLink = document.createElement('a');
        socialLink.href = link.url;
        socialLink.className = 'social-link';
        socialLink.title = link.title;
        socialLink.target = '_blank';
        socialLink.rel = 'noopener noreferrer';
        socialLink.innerHTML = `<i class="${link.icon}"></i>`;
        footerSocialLinks.appendChild(socialLink);
    });
}

// ========================================
// INTERACTIVE FEATURES
// ========================================

// Language Dropdown
function initializeLanguageDropdown() {
    const toggleBtn = document.getElementById('langToggleBtn');
    const langOptions = document.querySelectorAll('.lang-option');
    const selector = document.getElementById('languageSelector');

    // Toggle dropdown on button click
    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLanguageDropdown();
        });
    }

    // Handle language option selection
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!selector.contains(e.target)) {
            closeLanguageDropdown();
        }
    });
}

// Header Menu
function initializeHeaderMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Gallery Modal
let currentGalleryIndex = 0;

function initializeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    const closeBtn = document.querySelector('.gallery-modal-close');
    const prevBtn = document.getElementById('galleryModalPrev');
    const nextBtn = document.getElementById('galleryModalNext');

    closeBtn.addEventListener('click', closeGalleryModal);
    prevBtn.addEventListener('click', () => changeGalleryImage(-1));
    nextBtn.addEventListener('click', () => changeGalleryImage(1));

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGalleryModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('show')) {
            if (e.key === 'ArrowLeft') changeGalleryImage(-1);
            if (e.key === 'ArrowRight') changeGalleryImage(1);
            if (e.key === 'Escape') closeGalleryModal();
        }
    });
}

function openGalleryModal(index) {
    const config = BUSINESS_CONFIG;
    const modal = document.getElementById('galleryModal');
    const img = document.getElementById('galleryModalImg');
    
    currentGalleryIndex = index;
    img.src = config.galleryImages[index];
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function changeGalleryImage(direction) {
    const config = BUSINESS_CONFIG;
    currentGalleryIndex += direction;
    
    if (currentGalleryIndex >= config.galleryImages.length) {
        currentGalleryIndex = 0;
    } else if (currentGalleryIndex < 0) {
        currentGalleryIndex = config.galleryImages.length - 1;
    }
    
    document.getElementById('galleryModalImg').src = config.galleryImages[currentGalleryIndex];
}

// Hero Slider
function initializeHeroSlider() {
    const config = BUSINESS_CONFIG;
    const heroSlider = document.getElementById('heroSlider');
    const sliderDots = document.getElementById('sliderDots');
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');

    let currentSlide = 0;
    const slides = config.sliderImages;

    // Create slide elements
    slides.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `hero-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${image}" alt="Slide ${index + 1}" loading="lazy">`;
        heroSlider.appendChild(slide);

        // Create dot
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });

    function goToSlide(n) {
        currentSlide = (n + slides.length) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const heroSlides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.dot');

        heroSlides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    sliderPrev.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    });

    sliderNext.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    });

    // Auto-play slider
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }, 5000); // Change slide every 5 seconds
}

// Theme Toggle
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    updateThemeIcon();

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        updateThemeIcon();
    });

    function updateThemeIcon() {
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(element => observer.observe(element));

    // Animate stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    const observerStats = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                animateCounter(entry.target);
                entry.target.dataset.animated = 'true';
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observerStats.observe(stat));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target')) || 0;
    const isText = isNaN(target);

    if (isText) {
        return; // Skip animation for text-based stats
    }

    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 30);
}

// Scroll Spy
function initializeScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-scroll') === current) {
                link.classList.add('active');
            }
        });
    });
}

// Back to Top
function initializeBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// LAZY LOADING OPTIMIZATION
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// RESPONSIVE STICKY HEADER
// ========================================

let scrollPos = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    scrollPos = window.scrollY;

    // Add shadow on scroll
    if (scrollPos > 10) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// ========================================
// ERROR HANDLING
// ========================================

// Check if BUSINESS_CONFIG is loaded
if (typeof BUSINESS_CONFIG === 'undefined') {
    console.error('Error: config.js not loaded. Please ensure config.js is included in the HTML.');
    document.body.innerHTML = '<div style="padding: 50px; text-align: center;"><h1>Configuration Error</h1><p>Please ensure config.js is properly linked in index.html</p></div>';
}
