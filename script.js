// ===== Initialize AOS (Animate On Scroll) =====
AOS.init({
    duration: 800,
    easing: 'ease-in-out-cubic',
    once: true,
    offset: 50,
    disable: false
});

// ===== Load Lottie Animation =====
function loadLottieAnimation() {
    // Using a free Lottie animation about technology/coding
    // This is a free animation from LottieFiles
    const animationData = {
        v: "5.7.14",
        meta: { g: "Glaxnimate", a: "", k: "", d: 1200, tc: 1 },
        fr: 25,
        ip: 0,
        op: 50,
        w: 1200,
        h: 1200,
        nm: "Tech Animation",
        layers: [
            {
                ty: "gr",
                it: [
                    {
                        ty: "sh",
                        ks: {
                            k: {
                                c: true,
                                v: [
                                    [100, 200],
                                    [300, 100],
                                    [400, 200],
                                    [300, 300]
                                ]
                            }
                        },
                        ix: 2
                    },
                    {
                        ty: "fl",
                        c: {
                            k: [0.39, 0.58, 0.929, 1]
                        }
                    }
                ]
            }
        ]
    };

    // Alternative: Use a public Lottie animation URL
    // You can replace this with any animation from https://lottiefiles.com/
    const animationUrl = "https://assets10.lottiefiles.com/packages/lf20_jcikwtx9.json";

    try {
        const lottieContainer = document.getElementById('lottie-container');
        if (lottieContainer) {
            lottie.loadAnimation({
                container: lottieContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: animationUrl
            });
        }
    } catch (e) {
        console.log("Loading alternative animation...");
        // Fallback animation
        const container = document.getElementById('lottie-container');
        if (container) {
            lottie.loadAnimation({
                container: container,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: "https://assets2.lottiefiles.com/packages/lf20_u4yrau2t.json"
            });
        }
    }
}

// Load Lottie animation when page loads
window.addEventListener('load', loadLottieAnimation);

// ===== Register Button Functionality =====
const registerButtons = document.querySelectorAll('#registerBtn, #registerBtn2');
const googleFormUrl = 'https://forms.gle/1AgtD1c7rhLsgB2M8';

registerButtons.forEach(button => {
    button.addEventListener('click', function() {
        window.open(googleFormUrl, '_blank');
    });
});

// ===== Anime.js Button Hover Animation =====
const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        anime({
            targets: this,
            scale: 1.05,
            duration: 300,
            easing: 'easeOutElastic(1, .6)'
        });
    });

    button.addEventListener('mouseleave', function() {
        anime({
            targets: this,
            scale: 1,
            duration: 300,
            easing: 'easeOutElastic(1, .6)'
        });
    });
});

// ===== Anime.js Title Animation on Page Load =====
anime.timeline()
    .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        easing: 'easeOutQuad'
    }, 0)
    .add({
        targets: '.hero-tagline',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutQuad'
    }, 200)
    .add({
        targets: '.cta-button',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 800,
        easing: 'easeOutElastic(1, .6)'
    }, 400);

// ===== Anime.js Text Fade-in on Scroll with AOS Callback =====
window.addEventListener('aos:in', ({ detail }) => {
    if (detail.classList && detail.classList.contains('section-header')) {
        anime({
            targets: detail.querySelector('h2'),
            opacity: [0.5, 1],
            translateY: [10, 0],
            duration: 600,
            easing: 'easeOutQuad'
        });
    }
});

// ===== Anime.js Card Animation on Hover =====
document.querySelectorAll('.about-card, .benefit-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        anime({
            targets: this,
            scale: 1.05,
            duration: 400,
            easing: 'easeOutQuad'
        });
    });

    card.addEventListener('mouseleave', function() {
        anime({
            targets: this,
            scale: 1,
            duration: 400,
            easing: 'easeOutQuad'
        });
    });
});

// ===== Anime.js Smooth Transitions for Timeline Items =====
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        anime({
            targets: this,
            duration: 300,
            easing: 'easeOutQuad'
        });

        anime({
            targets: this.querySelector('.timeline-marker'),
            rotate: 360,
            duration: 600,
            easing: 'easeInOutQuad'
        });
    });
});

// ===== Navigation Link Smooth Scroll Animation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            anime({
                targets: window,
                scrollTop: target.offsetTop - 80,
                duration: 1000,
                easing: 'easeInOutQuad'
            });
        }
    });
});

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        anime({
            targets: this.querySelectorAll('span'),
            opacity: [0, 1],
            duration: 300,
            delay: anime.stagger(50)
        });
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// ===== Scroll Event for Live Button Animation =====
let isScrolling = false;

window.addEventListener('scroll', function() {
    if (!isScrolling) {
        isScrolling = true;
        
        // Animate scroll indicator if present
        const scrollY = window.scrollY;
        
        // Update navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        }
        
        setTimeout(() => {
            isScrolling = false;
        }, 100);
    }
});

// ===== Anime.js Counter Animation for Statistics (Optional) =====
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===== Page Load Animation =====
window.addEventListener('load', function() {
    // Trigger a subtle fade-in for the entire page
    anime({
        targets: 'html',
        opacity: [0.8, 1],
        duration: 500,
        easing: 'easeOutQuad'
    });
});

// ===== Keyboard Navigation Support =====
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.classList.contains('cta-button') || activeElement.classList.contains('register-btn')) {
            activeElement.click();
        }
    }
});

// ===== Parallax Effect on Hero Section (Optional) =====
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const heroSection = document.querySelector('.hero');
    
    if (scrollY < 800) {
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    }
});

// ===== Focus Management for Accessibility =====
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('focus', function() {
        anime({
            targets: this,
            outline: 0,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
});

// ===== Ripple Effect on Button Click =====
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = diameter + 'px';
    ripple.style.left = (event.clientX - button.offsetLeft - radius) + 'px';
    ripple.style.top = (event.clientY - button.offsetTop - radius) + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple-animation 0.6s ease-out';
    ripple.style.transform = 'scale(0)';

    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// ===== Add Ripple Animation CSS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add ripple effect to buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// ===== Initialize Tooltip on Hover (Optional) =====
function initializeTooltips() {
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseover', function() {
            const tooltip = document.createElement('div');
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: var(--dark-color);
                color: white;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 0.85rem;
                z-index: 1000;
                pointer-events: none;
                white-space: nowrap;
            `;
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
            tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
            
            setTimeout(() => tooltip.remove(), 2000);
        });
    });
}

initializeTooltips();

// ===== Vanta.js Ribbons Background Animation =====
let vantaEffect = null;

function testVantaAvailability() {
    console.log('Testing Vanta availability...');
    console.log('VANTA object:', VANTA);
    if (VANTA) {
        console.log('Available effects:', Object.keys(VANTA));
        console.log('VANTA.BIRDS:', VANTA.BIRDS);
        console.log('VANTA.WAVES:', VANTA.WAVES);
        console.log('VANTA.FOG:', VANTA.FOG);
        console.log('VANTA.RIBBONS:', VANTA.RIBBONS);
        console.log('VANTA.NET:', VANTA.NET);
        console.log('VANTA.GLOBE:', VANTA.GLOBE);
    }
    console.log('THREE object:', THREE);
    return typeof VANTA !== 'undefined' && typeof THREE !== 'undefined';
}

function initializeVantaBackground() {
    console.log('Initializing Vanta.js...');

    if (!testVantaAvailability()) {
        console.log('Vanta.js not ready, retrying in 2 seconds...');
        setTimeout(initializeVantaBackground, 2000);
        return;
    }

    try {
        const vantaElement = document.getElementById('vanta');
        console.log('Vanta element found:', vantaElement);

        if (!vantaElement) {
            console.log('Vanta element not found, retrying in 1 second...');
            setTimeout(initializeVantaBackground, 1000);
            return;
        }

        console.log('Creating Vanta effect...');

        // Try different effects in order of reliability
        try {
            if (VANTA.BIRDS) {
                console.log('Using Birds effect...');
                vantaEffect = VANTA.BIRDS({
                    el: '#vanta',
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: window.innerHeight,
                    minWidth: window.innerWidth,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    backgroundColor: 0xffffff,
                    color1: 0x667eea,
                    color2: 0xec4899,
                    birdSize: 1.5,
                    wingSpan: 20.0,
                    speedLimit: 4.0,
                    separation: 50.0,
                    quantity: 3.0
                });
                console.log('Birds effect created successfully');
            } else if (VANTA.WAVES) {
                console.log('Birds not available, using Waves effect...');
                vantaEffect = VANTA.WAVES({
                    el: '#vanta',
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: window.innerHeight,
                    minWidth: window.innerWidth,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x667eea,
                    backgroundColor: 0xffffff,
                    shininess: 30.0,
                    waveHeight: 15.0,
                    waveSpeed: 0.8,
                    zoom: 0.8
                });
                console.log('Waves effect created successfully');
            } else if (VANTA.RIBBONS) {
                console.log('Using Ribbons effect...');
                vantaEffect = VANTA.RIBBONS({
                    el: '#vanta',
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: window.innerHeight,
                    minWidth: window.innerWidth,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x667eea,
                    backgroundColor: 0xffffff,
                    speed: 0.8,
                    amplitude: 0.8,
                    waveAmplitude: 0.4,
                    colorMode: false,
                    turbulence: 0.5
                });
                console.log('Ribbons effect created successfully');
            } else if (VANTA.FOG) {
                console.log('Using Fog effect as fallback...');
                vantaEffect = VANTA.FOG({
                    el: '#vanta',
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: window.innerHeight,
                    minWidth: window.innerWidth,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x667eea,
                    backgroundColor: 0xffffff,
                    speed: 0.8,
                    highlightColor: 0xec4899,
                    midtoneColor: 0x8b5cf6,
                    lowlightColor: 0x3b82f6
                });
                console.log('Fog effect created successfully');
            } else {
                throw new Error('No supported Vanta effects available');
            }
        } catch (effectError) {
            console.log('Effect creation failed, trying basic fallback...', effectError);
            // Try a very basic effect
            try {
                if (VANTA.FOG) {
                    vantaEffect = VANTA.FOG({
                        el: '#vanta',
                        color: 0x667eea,
                        backgroundColor: 0xffffff
                    });
                    console.log('Basic Fog effect created');
                }
            } catch (fallbackError) {
                console.log('All effects failed:', fallbackError);
            }
        }

        // Refresh on window resize
        window.addEventListener('resize', () => {
            if (vantaEffect) {
                vantaEffect.resize();
            }
        });

        console.log('%cVanta.js Ribbons effect initialized successfully!', 'color: #6366f1; font-weight: bold;');
        return vantaEffect;
    } catch (error) {
        console.log('Vanta.js initialization error:', error);
        console.log('Error details:', error.message);
        console.log('Stack trace:', error.stack);
    }
}

// Initialize Vanta on page load and DOM ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing Vanta...');
    setTimeout(initializeVantaBackground, 100);
});

window.addEventListener('load', function() {
    console.log('Window loaded, ensuring Vanta is initialized...');
    setTimeout(initializeVantaBackground, 500);
});

// ===== Test Vanta.js Loading =====
console.log('Script loaded, checking for Vanta...');

// Check if Vanta loads
window.addEventListener('load', function() {
    console.log('Page fully loaded');
    console.log('VANTA available:', typeof VANTA);
    if (VANTA) {
        console.log('Available effects:', Object.keys(VANTA));
    }
});

// ===== Rules Accordion Functionality =====
function initializeAccordion() {
    const rulesToggle = document.getElementById('rulesToggle');
    const rulesContent = document.getElementById('rulesContent');
    const toggleText = rulesToggle.querySelector('.toggle-text');

    if (!rulesToggle || !rulesContent) return;

    rulesToggle.addEventListener('click', function() {
        const isActive = rulesContent.classList.contains('active');
        
        if (isActive) {
            // Collapse
            rulesContent.classList.remove('active');
            rulesToggle.classList.remove('active');
            toggleText.textContent = 'View Rules';
        } else {
            // Expand
            rulesContent.classList.add('active');
            rulesToggle.classList.add('active');
            toggleText.textContent = 'Hide Rules';
        }
    });
}

// Initialize accordion when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAccordion);

// ===== Rounds Section 3D Background =====
let roundsVantaEffect = null;

function initializeRoundsBackground() {
    console.log('Initializing Rounds background...');

    if (!testVantaAvailability()) {
        console.log('Vanta.js not ready for rounds background, retrying in 2 seconds...');
        setTimeout(initializeRoundsBackground, 2000);
        return;
    }

    try {
        const roundsElement = document.getElementById('rounds-vanta');
        console.log('Rounds element found:', roundsElement);

        if (!roundsElement) {
            console.log('Rounds element not found, retrying in 1 second...');
            setTimeout(initializeRoundsBackground, 1000);
            return;
        }

        // Try different effects for the rounds section
        try {
            if (VANTA.NET) {
                console.log('Using Net effect for rounds...');
                roundsVantaEffect = VANTA.NET({
                    el: '#rounds-vanta',
                    mouseControls: false,
                    touchControls: false,
                    gyroControls: false,
                    minHeight: 600,
                    minWidth: 600,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x667eea,
                    backgroundColor: 0xffffff,
                    points: 8.0,
                    maxDistance: 20.0,
                    spacing: 15.0
                });
                console.log('Net effect created for rounds');
            } else if (VANTA.WAVES) {
                console.log('Using Waves effect for rounds...');
                roundsVantaEffect = VANTA.WAVES({
                    el: '#rounds-vanta',
                    mouseControls: false,
                    touchControls: false,
                    gyroControls: false,
                    minHeight: 600,
                    minWidth: 600,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x667eea,
                    backgroundColor: 0xffffff,
                    shininess: 20.0,
                    waveHeight: 10.0,
                    waveSpeed: 0.5,
                    zoom: 1.2
                });
                console.log('Waves effect created for rounds');
            } else if (VANTA.GLOBE) {
                console.log('Using Globe effect for rounds...');
                roundsVantaEffect = VANTA.GLOBE({
                    el: '#rounds-vanta',
                    mouseControls: false,
                    touchControls: false,
                    gyroControls: false,
                    minHeight: 600,
                    minWidth: 600,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x667eea,
                    backgroundColor: 0xffffff,
                    size: 1.0
                });
                console.log('Globe effect created for rounds');
            } else if (VANTA.RIBBONS) {
                console.log('Using Ribbons effect for rounds...');
                roundsVantaEffect = VANTA.RIBBONS({
                    el: '#rounds-vanta',
                    mouseControls: false,
                    touchControls: false,
                    gyroControls: false,
                    minHeight: 600,
                    minWidth: 600,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x667eea,
                    backgroundColor: 0xffffff,
                    speed: 0.5,
                    amplitude: 0.5,
                    waveAmplitude: 0.2,
                    colorMode: false,
                    turbulence: 0.3
                });
                console.log('Ribbons effect created for rounds');
            } else {
                throw new Error('No suitable effects available for rounds background');
            }
        } catch (effectError) {
            console.log('Rounds effect creation failed:', effectError);
        }

        // Refresh on window resize
        window.addEventListener('resize', () => {
            if (roundsVantaEffect && roundsVantaEffect.resize) {
                roundsVantaEffect.resize();
            }
        });

        console.log('%cRounds section 3D background initialized!', 'color: #6366f1; font-weight: bold;');
        return roundsVantaEffect;
    } catch (error) {
        console.log('Rounds background initialization error:', error);
    }
}

// Initialize rounds background after main Vanta
window.addEventListener('load', function() {
    setTimeout(initializeRoundsBackground, 1000);
});

// ===== Dark Mode Toggle Functionality =====
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
}

// Theme toggle event listener
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Update icon
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
