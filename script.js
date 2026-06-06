/**
 * Onion Sale Center - Dynamic Application Engine (with Modal & Manual Slider Navigation)
 */

document.addEventListener("DOMContentLoaded", () => {
    let config = BUSINESS_CONFIG;
    let lang = localStorage.getItem("onion_lang") || config.currentLanguage || "en";
    config.currentLanguage = lang;
    
    const langSelect = document.getElementById("lang-select");
    if(langSelect) langSelect.value = lang;

    initTheme();
    renderApp();

    function renderApp() {
        const lang = config.currentLanguage;

        // SEO and Document Targets Metadata Initialization
        document.title = config.seo[lang].title;
        document.querySelector('meta[name="description"]').setAttribute("content", config.seo[lang].description);
        document.querySelector('meta[name="keywords"]').setAttribute("content", config.seo[lang].keywords);
        document.getElementById("favicon-link").href = config.favicon;
        
        document.querySelector('meta[property="og:title"]').setAttribute("content", config.seo[lang].title);
        document.querySelector('meta[property="og:description"]').setAttribute("content", config.seo[lang].description);
        document.querySelector('meta[property="og:image"]').setAttribute("content", config.sliderImages ? config.sliderImages[0] : config.logo);

        document.getElementById("header-logo").src = config.logo;
        document.getElementById("header-title").textContent = config.businessName[lang];

        // Nav Links Setup 
        const navContainer = document.getElementById("nav-links-container");
        navContainer.innerHTML = "";
        Object.keys(config.nav).forEach(key => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="#${key}">${config.nav[key][lang]}</a>`;
            navContainer.appendChild(li);
        });

        // Hero Content Text Injection
        document.getElementById("hero-headline").textContent = config.businessName[lang];
        document.getElementById("hero-tagline").textContent = config.tagline[lang];
        document.getElementById("hero-cta").textContent = config.hero.ctaText[lang];
        
        // Initializing Enhanced Slider
        initHeroSlider(config.hero.sliderImages);

        // About & Stats Section
        document.getElementById("about-title").textContent = config.about.title[lang];
        document.getElementById("about-desc").textContent = config.about.description[lang];
        document.getElementById("history-title").textContent = config.about.historyTitle[lang];
        document.getElementById("about-history").textContent = config.about.history[lang];
        document.getElementById("mission-title").textContent = config.about.missionTitle[lang];
        document.getElementById("about-mission").textContent = config.about.mission[lang];
        buildStatsCounters(config.stats, lang);

        // Business Goals Cards Block
        document.getElementById("goals-main-title").textContent = config.goals.title[lang];
        buildCards(config.goals.items, "goals-container", lang, true);

        // Services & Products Section
        document.getElementById("services-main-title").textContent = config.services.title[lang];
        buildCards(config.services.items, "services-container", lang, false);

        // Media Gallery Section Loading Elements
        document.getElementById("gallery-main-title").textContent = config.gallery.title[lang];
        buildGallery(config.gallery.images);

        // Why Choose Us Logic Components
        document.getElementById("why-main-title").textContent = config.whyUs.title[lang];
        buildWhyChooseUs(config.whyUs.items, lang);

        // Location / Address Maps Components
        document.getElementById("contact-main-title").textContent = config.contact.title[lang];
        document.getElementById("map-location-title").textContent = config.address.title[lang];
        document.getElementById("address-text").textContent = config.address.text[lang];
        document.getElementById("google-map-iframe").src = config.address.googleMapEmbed;
        buildContactCards(config.contact, lang);

        document.getElementById("footer-year").textContent = new Date().getFullYear();
        document.getElementById("footer-biz-name").textContent = config.businessName[lang];

        initInteractions();
        initLightbox(); // Setup modal click captures
        
        setTimeout(() => {
            const preloader = document.getElementById("loading-spinner");
            if(preloader) {
                preloader.style.opacity = "0";
                setTimeout(() => preloader.style.display = "none", 500);
            }
        }, 300);
    }

    // Interactive Image Slider Manual Controls & Loop Autoplay Logics Engine
    function initHeroSlider(images) {
        const container = document.getElementById("hero-carousel");
        const dotsContainer = document.getElementById("slider-dots-container");
        const prevBtn = document.getElementById("slider-prev");
        const nextBtn = document.getElementById("slider-next");
        
        container.innerHTML = "";
        dotsContainer.innerHTML = "";
        
        let currentSlide = 0;
        let sliderInterval;

        images.forEach((imgSrc, index) => {
            // Build Slides
            const slide = document.createElement("div");
            slide.className = `slide ${index === 0 ? "active" : ""}`;
            slide.style.backgroundImage = `url('${imgSrc}')`;
            container.appendChild(slide);

            // Build Bottom Dots
            const dot = document.createElement("button");
            dot.className = `dot ${index === 0 ? "active" : ""}`;
            dot.setAttribute("data-slide", index);
            dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
            dotsContainer.appendChild(dot);
        });

        const slides = container.querySelectorAll(".slide");
        const dots = dotsContainer.querySelectorAll(".dot");

        function goToSlide(n) {
            slides[currentSlide].classList.remove("active");
            dots[currentSlide].classList.remove("active");
            
            currentSlide = (n + slides.length) % slides.length;
            
            slides[currentSlide].classList.add("active");
            dots[currentSlide].classList.add("active");
        }

        function nextSlide() { goToSlide(currentSlide + 1); }
        function prevSlide() { goToSlide(currentSlide - 1); }

        function startAutoplay() {
            stopAutoplay();
            sliderInterval = setInterval(nextSlide, 6000);
        }

        function stopAutoplay() {
            if (sliderInterval) clearInterval(sliderInterval);
        }

        // Click Controls Hook Execution Pipeline
        nextBtn.addEventListener("click", () => { nextSlide(); startAutoplay(); });
        prevBtn.addEventListener("click", () => { prevSlide(); startAutoplay(); });

        dotsContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("dot")) {
                const index = parseInt(e.target.getAttribute("data-slide"), 10);
                goToSlide(index);
                startAutoplay();
            }
        });

        startAutoplay();
    }

    // Cards Grid Population Utility Loader Block
    function buildCards(items, containerId, targetLang, displayShortDesc) {
        const container = document.getElementById(containerId);
        container.innerHTML = "";
        items.forEach((item, index) => {
            const card = document.createElement("div");
            card.className = `modern-card reveal delay-${index % 3}`;
            card.innerHTML = `
                <i class="fa-solid ${item.icon} card-icon"></i>
                <h3>${item.title[targetLang]}</h3>
                <p>${displayShortDesc ? item.desc[targetLang] : item.description[targetLang]}</p>
            `;
            container.appendChild(card);
        });
    }

    function buildStatsCounters(statsArray, targetLang) {
        const container = document.getElementById("stats-container");
        container.innerHTML = "";
        statsArray.forEach(stat => {
            const div = document.createElement("div");
            div.className = "stat-item";
            div.innerHTML = `
                <h2 class="counter-num" data-target="${stat.number}">0</h2>
                <p style="font-weight:600; color:var(--text-muted);">${stat.title[targetLang]}</p>
            `;
            container.appendChild(div);
        });
    }

    // Media Gallery with Dynamic Click-To-Popup Tracking Hooks
    function buildGallery(images) {
        const container = document.getElementById("gallery-container");
        container.innerHTML = "";
        images.forEach((imgSrc, index) => {
            const wrap = document.createElement("div");
            wrap.className = `gallery-item reveal delay-${index % 4}`;
            
            const img = document.createElement("img");
            img.alt = "Onion Center Farm Produce Product Thumbnail Click to Expand";
            img.setAttribute("data-src", imgSrc);
            img.classList.add("lightbox-trigger"); // Event capture handle identifier
            
            wrap.appendChild(img);
            container.appendChild(wrap);
        });

        // Lazy load strategy intersection bindings 
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute("data-src");
                    img.addEventListener("load", () => img.classList.add("loaded"));
                    observer.unobserve(img);
                }
            });
        });
        container.querySelectorAll("img").forEach(img => imageObserver.observe(img));
    }

    // Lightbox Popup Event Listeners Interface Logics Processing
    function initLightbox() {
        const modal = document.getElementById("gallery-lightbox");
        const modalImg = document.getElementById("lightbox-img");
        const closeBtn = document.getElementById("lightbox-close");
        const galleryContainer = document.getElementById("gallery-container");

        // Fixed: Listen for clicks anywhere on the item container
        galleryContainer.addEventListener("click", (e) => {
            // Find the closest gallery item to handle clicks on the image or the overlay icon
            const item = e.target.closest(".gallery-item");
            if (item) {
                const img = item.querySelector("img");
                // Fallback to data-src if src hasn't fully registered yet
                const imgSrc = img.src || img.getAttribute("data-src");
                
                if (imgSrc) {
                    modal.setAttribute("aria-hidden", "false");
                    modalImg.src = imgSrc;
                    document.body.style.overflow = "hidden"; // Freeze background scroll
                }
            }
        });

        function closeLightbox() {
            modal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = ""; // Reactivate core window scroll tracks
        }

        closeBtn.addEventListener("click", closeLightbox);
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeLightbox();
        });
        
        // Native Accessibility Escape key close capture
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
                closeLightbox();
            }
        });
    }

    function buildWhyChooseUs(items, targetLang) {
        const container = document.getElementById("why-container");
        container.innerHTML = "";
        items.forEach((item, idx) => {
            const div = document.createElement("div");
            div.className = `why-item reveal delay-${idx % 2}`;
            div.innerHTML = `
                <i class="fa-solid ${item.icon}"></i>
                <div>
                    <h3>${item.title[targetLang]}</h3>
                    <p>${item.desc[targetLang]}</p>
                </div>
            `;
            container.appendChild(div);
        });
    }

    function buildContactCards(contact, targetLang) {
        const container = document.getElementById("contact-methods-container");
        const footerSocials = document.getElementById("footer-socials-container");
        container.innerHTML = "";
        footerSocials.innerHTML = "";

        const networks = [
            { key: "phone", icon: "fa-phone", label: "Phone", url: `tel:${contact.phone}`, showCard: !!contact.phone },
            { key: "email", icon: "fa-envelope", label: "Email", url: `mailto:${contact.email}`, showCard: !!contact.email },
            { key: "facebook", icon: "fa-facebook-f", label: "Facebook", url: contact.facebook, showCard: !!contact.facebook },
            { key: "tiktok", icon: "fa-tiktok", label: "TikTok", url: contact.tiktok, showCard: !!contact.tiktok },
            { key: "wechat", icon: "fa-weixin", label: "WeChat", url: `weixin://dl/chat?${contact.wechat}`, showCard: !!contact.wechat },
            { key: "viber", icon: "fa-viber", label: "Viber", url: contact.viber, showCard: !!contact.viber },
            { key: "whatsapp", icon: "fa-whatsapp", label: "WhatsApp", url: contact.whatsapp, showCard: !!contact.whatsapp },
            { key: "telegram", icon: "fa-telegram", label: "Telegram", url: contact.telegram, showCard: !!contact.telegram }
        ];

        networks.forEach(net => {
            if (net.showCard) {
                const card = document.createElement("a");
                card.href = net.url;
                card.target = "_blank";
                card.rel = "noopener noreferrer";
                card.className = "contact-link-card reveal";
                card.innerHTML = `
                    <i class="fa-brands ${net.icon === 'fa-phone' || net.icon === 'fa-envelope' ? 'fa-solid' : 'fa-brands'} ${net.icon} icon-${net.key}"></i>
                    <div>
                        <strong style="display:block; font-size:1.1rem;">${net.label}</strong>
                        <span style="color:var(--text-muted); font-size:0.9rem;">${contact[net.key]}</span>
                    </div>
                `;
                container.appendChild(card);

                if(net.key !== 'phone' && net.key !== 'email') {
                    const footerLink = document.createElement("a");
                    footerLink.href = net.url;
                    footerLink.target = "_blank";
                    footerLink.rel = "noopener noreferrer";
                    footerLink.innerHTML = `<i class="fa-brands ${net.icon}"></i>`;
                    footerSocials.appendChild(footerLink);
                }
            }
        });
    }

    function initInteractions() {
        const hamburger = document.getElementById("hamburger-menu");
        const nav = document.getElementById("main-nav");
        
        if (hamburger && nav) {
            hamburger.replaceWith(hamburger.cloneNode(true));
            const newHamburger = document.getElementById("hamburger-menu");
            
            newHamburger.addEventListener("click", () => {
                newHamburger.classList.toggle("active");
                nav.classList.toggle("active");
            });

            document.querySelectorAll(".nav-links a").forEach(link => {
                link.addEventListener("click", () => {
                    newHamburger.classList.remove("active");
                    nav.classList.remove("active");
                });
            });
        }

        if(langSelect) {
            langSelect.removeEventListener("change", handleLangChange);
            langSelect.addEventListener("change", handleLangChange);
        }

        const revealElements = document.querySelectorAll(".reveal");
        const backToTop = document.getElementById("back-to-top");
        const counterElements = document.querySelectorAll(".counter-num");
        let countersStarted = false;

        function runOnScroll() {
            if (window.scrollY > 300) {
                backToTop.classList.add("visible");
            } else {
                backToTop.classList.remove("visible");
            }

            revealElements.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < window.innerHeight - 50) {
                    el.classList.add("active");
                }
            });

            if (counterElements.length > 0 && !countersStarted) {
                const triggerTop = counterElements[0].getBoundingClientRect().top;
                if (triggerTop < window.innerHeight - 30) {
                    countersStarted = true;
                    counterElements.forEach(counter => {
                        const target = parseInt(counter.getAttribute("data-target"), 10);
                        let current = 0;
                        const duration = 2000;
                        const stepTime = Math.max(Math.floor(duration / target), 15);
                        
                        const timer = setInterval(() => {
                            current += Math.ceil(target / (duration / stepTime));
                            if (current >= target) {
                                counter.textContent = target;
                                clearInterval(timer);
                            } else {
                                counter.textContent = current;
                            }
                        }, stepTime);
                    });
                }
            }
        }

        window.removeEventListener("scroll", runOnScroll);
        window.addEventListener("scroll", runOnScroll);
        runOnScroll();

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    function handleLangChange(e) {
        config.currentLanguage = e.target.value;
        localStorage.setItem("onion_lang", e.target.value);
        renderApp();
    }

    function initTheme() {
        const themeToggle = document.getElementById("theme-toggle");
        const savedTheme = localStorage.getItem("onion_theme") || "light";
        
        document.documentElement.setAttribute("data-theme", savedTheme);
        updateThemeIcon(savedTheme);

        themeToggle.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("onion_theme", newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        const icon = document.querySelector("#theme-toggle i");
        if(icon) {
            icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
        }
    }
});
