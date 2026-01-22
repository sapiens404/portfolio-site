/**
 * Ritu Raj Portfolio - Immersive Space Theme Script
 * Libraries: Three.js, GSAP
 */

document.addEventListener('DOMContentLoaded', () => {
    initThreeStars();
    initCarousels();
    initFallingText();
    initTypingEffect();
    initMobileNav();
    initGSAPAnimations();
    initAdaptiveTheme();
    initThemeToggle();
});

// --- THREE.JS COSMIC STARFIELD (WARP SPEED) ---
function initThreeStars() {
    const canvas = document.getElementById('star-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Star Geometry
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.5,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });

    const starCount = 10000;
    const posArray = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 1000; // x
        posArray[i + 1] = (Math.random() - 0.5) * 1000; // y
        posArray[i + 2] = (Math.random() - 0.5) * 2000; // z
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Global reference for theme syncing
    window.starMaterial = starMaterial;

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);

        const positions = starGeometry.attributes.position.array;
        for (let i = 2; i < positions.length; i += 3) {
            positions[i] += 2; // Move towards viewer

            if (positions[i] > 200) {
                positions[i] = -1800; // Reset to back of field
            }
        }
        starGeometry.attributes.position.needsUpdate = true;

        stars.rotation.z += 0.001; // Slight twist
        renderer.render(scene, camera);
    }

    animate();
    syncStarColor(); // Initial sync

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function syncStarColor() {
    if (!window.starMaterial) return;
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const color = theme === 'light' ? 0x3b82f6 : 0xffffff;
    window.starMaterial.color.setHex(color);
}

// --- REUSABLE CAROUSEL CLASS ---
class Carousel {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.carousel-track');
        this.slides = Array.from(this.track.children);
        this.nextBtn = container.querySelector('.next-btn');
        this.prevBtn = container.querySelector('.prev-btn');
        this.dotsContainer = container.querySelector('.carousel-dots');

        this.currentIndex = 0;
        this.dots = [];

        this.init();
    }

    init() {
        if (!this.track || this.slides.length === 0) return;

        // Create dots
        this.slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
            this.dots.push(dot);
        });

        this.nextBtn.addEventListener('click', () => this.nextSlide());
        this.prevBtn.addEventListener('click', () => this.prevSlide());

        // --- SWIPE / DRAG SUPPORT ---
        this.isDragging = false;
        this.startX = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;
        this.animationID = 0;

        // Touch events
        this.track.addEventListener('touchstart', (e) => this.dragStart(e), { passive: true });
        this.track.addEventListener('touchmove', (e) => this.dragMove(e), { passive: true });
        this.track.addEventListener('touchend', () => this.dragEnd());

        // Mouse events
        this.track.addEventListener('mousedown', (e) => this.dragStart(e));
        this.track.addEventListener('mousemove', (e) => this.dragMove(e));
        this.track.addEventListener('mouseup', () => this.dragEnd());
        this.track.addEventListener('mouseleave', () => this.dragEnd());

        // Update width and position on start and resize
        window.addEventListener('resize', () => {
            this.updateWidth();
            this.updatePosition();
        });

        // Initial fit
        setTimeout(() => {
            this.updateWidth();
            this.updatePosition();
        }, 300);
    }

    dragStart(e) {
        this.isDragging = true;
        this.startX = this.getPositionX(e);
        this.track.style.transition = 'none';
        this.animationID = requestAnimationFrame(() => this.animation());
        this.container.classList.add('grabbing');
    }

    dragMove(e) {
        if (!this.isDragging) return;
        const currentX = this.getPositionX(e);
        const diff = currentX - this.startX;
        this.currentTranslate = this.prevTranslate + diff;
    }

    dragEnd() {
        this.isDragging = false;
        cancelAnimationFrame(this.animationID);
        this.container.classList.remove('grabbing');

        const movedBy = this.currentTranslate - this.prevTranslate;

        if (movedBy < -100 && this.currentIndex < this.slides.length - 1) {
            this.currentIndex += 1;
        } else if (movedBy > 100 && this.currentIndex > 0) {
            this.currentIndex -= 1;
        }

        this.track.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
        this.goToSlide(this.currentIndex);
        this.prevTranslate = -this.currentIndex * this.container.offsetWidth;
        this.currentTranslate = this.prevTranslate;
    }

    getPositionX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }

    animation() {
        if (this.isDragging) {
            this.track.style.transform = `translateX(${this.currentTranslate}px)`;
            requestAnimationFrame(() => this.animation());
        }
    }

    updatePosition() {
        const width = this.container.offsetWidth;
        this.currentTranslate = -this.currentIndex * width;
        this.prevTranslate = this.currentTranslate;
        this.track.style.transform = `translateX(${this.currentTranslate}px)`;
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateWidth(); // Update container width based on new slide
        this.updatePosition();
        this.updateDots();

        // Trigger theme update if the slide has an image
        const activeImg = this.slides[this.currentIndex].querySelector('img');
        if (activeImg && window.updateThemeFromImage) {
            window.updateThemeFromImage(activeImg);
        }
    }

    updateWidth() {
        // Find the image in active slide to determine width
        const activeSlide = this.slides[this.currentIndex];
        const img = activeSlide.querySelector('img');

        if (img) {
            if (img.complete) {
                this.container.style.width = `${img.offsetWidth}px`;
            } else {
                img.onload = () => {
                    this.container.style.width = `${img.offsetWidth}px`;
                };
            }
        }
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.goToSlide(this.currentIndex);
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(this.currentIndex);
    }

    updateDots() {
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentIndex);
        });
    }
}

function initCarousels() {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(container => new Carousel(container));
}

// --- TYPING EFFECT ---
function initTypingEffect() {
    const text = "Graphic Designer | Photoshop & Illustrator Expert | 1 Year Branding & Digital Art | Sadhanapada Graduate | B.E. ISE | AI-Assisted Workflows";
    const target = document.getElementById('typing-subtitle');
    if (!target) return;

    let i = 0;
    function type() {
        if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }
    type();
}

// --- GIANT FALLING TEXT ---
function initFallingText() {
    const nameContainer = document.getElementById('giant-name');
    if (!nameContainer) return;

    const text = nameContainer.textContent.trim();
    nameContainer.textContent = '';

    // Split text into letters and wrap in spans
    [...text].forEach(char => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        nameContainer.appendChild(span);
    });

    // Animate letters falling from top
    gsap.fromTo("#giant-name span",
        {
            y: -500, // Reduced from -1000 for faster/tighter fall
            opacity: 0,
            rotation: () => (Math.random() - 0.5) * 30
        },
        {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1,
            stagger: 0.08,
            ease: "bounce.out",
            delay: 0.2
        }
    );
}

// --- GSAP ANIMATIONS ---
function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".intro-prefix", { duration: 1, opacity: 0, y: -20, delay: 0.1 });
    gsap.from("#hero-title", { duration: 1, opacity: 0, x: -100, delay: 1.5, ease: "power2.out" });
    gsap.from(".hero-btns .btn", { duration: 1, opacity: 0, scale: 0, stagger: 0.3, delay: 2, ease: "back.out(1.7)" });
    gsap.from(".hero-image", { duration: 1.5, opacity: 0, x: 100, delay: 1.8, ease: "power3.out" });

    // Skill bars animation
    const skillSection = document.querySelector('.skills-section');
    if (skillSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                document.querySelectorAll('.progress').forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => bar.style.width = width, 100);
                });
                observer.disconnect();
            }
        }, { threshold: 0.5 });
        observer.observe(skillSection);
    }

    // Card Stagger Reveals
    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: ".projects-section",
            start: "top 80%"
        },
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
    });

    // Scroll reveals
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%"
            },
            opacity: 0,
            y: 30,
            duration: 1
        });
    });
}

// --- MOBILE NAVIGATION ---
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// --- ADAPTIVE THEME LOGIC ---
function initAdaptiveTheme() {
    const root = document.documentElement;
    const defaultAccent = '#FF00FF';
    const defaultSecondary = '#FFD700';

    window.updateThemeFromImage = (imgEl) => {
        if (!imgEl) return;
        if (imgEl.complete) {
            applyTheme(imgEl);
        } else {
            imgEl.onload = () => applyTheme(imgEl);
        }
    };

    function applyTheme(imgEl) {
        try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 1;
            canvas.height = 1;
            ctx.drawImage(imgEl, 0, 0, 1, 1);
            const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
            const primaryColor = `rgb(${r}, ${g}, ${b})`;

            root.style.setProperty('--accent-color', primaryColor);
            root.style.setProperty('--shadow-hover', `0 0 30px ${primaryColor}`);
            root.style.setProperty('--border-color', primaryColor);
        } catch (e) {
            console.warn('Color extraction failed', e);
        }
    }

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('img');
            window.updateThemeFromImage(img);
        });
        card.addEventListener('mouseleave', () => {
            root.style.setProperty('--accent-color', defaultAccent);
            root.style.setProperty('--shadow-hover', `0 0 20px rgba(255, 0, 255, 0.3)`);
            root.style.setProperty('--border-color', 'rgba(255, 0, 255, 0.2)');
        });
    });
}
// --- THEME TOGGLE ---
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);
    setTimeout(syncStarColor, 500); // Wait for THREE to init

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcon(newTheme);
        syncStarColor();
    });
}

function updateToggleIcon(theme) {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    const isLight = theme === 'light';
    toggleBtn.setAttribute('aria-label', isLight ? 'Toggle Dark Mode' : 'Toggle Light Mode');

    // Support both <i> (FontAwesome) and text (Emoji)
    const icon = toggleBtn.querySelector('i');
    if (icon) {
        if (isLight) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    } else {
        // Toggle Emoji if no <i> tag
        toggleBtn.textContent = isLight ? '☀️' : '🌙';
    }
}

// --- FORM HANDLING & NEWSLETTER AUTOMATION ---
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        // 1. Save to "Database" (LocalStorage for Demo)
        const collaborator = {
            id: Date.now(),
            name: name,
            email: email,
            message: message,
            date: new Date().toISOString(),
            status: 'Newsletter Sent'
        };

        const existingUsers = JSON.parse(localStorage.getItem('portfolio_collaborators') || '[]');
        existingUsers.push(collaborator);
        localStorage.setItem('portfolio_collaborators', JSON.stringify(existingUsers));

        // 2. Clear Form
        this.reset();

        // 3. User Feedback (Simulated Email)
        const btn = this.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Sent! Check your inbox 🚀';
        btn.style.background = '#00ff66';
        btn.style.color = 'black';

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = '';
            btn.style.color = '';
            alert(`Thanks ${name}! We've saved your details.\n\n📧 AUTOMATIC EMAIL SENT TO: ${email}\n\nSubject: Welcome to the Design Revolution!\nIncludes: Trending tips on Glassmorphism & AI.`);
        }, 3000);
    });
}
