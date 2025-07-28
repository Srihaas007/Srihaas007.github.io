// Main JavaScript file for the portfolio
import { initializeTheme } from './theme.js';
import { initializeNavigation } from './navigation.js';
import { initializeAnimations } from './animations.js';
import { initializeProjectFilters } from './projects.js';
import { loadProjects } from './projectData.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initializeTheme();
    initializeNavigation();
    initializeAnimations();
    
    // Load and display projects
    loadProjects();
    initializeProjectFilters();
    
    // Initialize particles.js background
    initializeParticles();
    
    // Initialize typing animation
    initializeTypingAnimation();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    console.log('Portfolio initialized successfully! 🚀');
});

// Particles.js initialization
function initializeParticles() {
    if (window.particlesJS) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 50, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.1, random: false },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 0.3 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
}

// Typing animation
function initializeTypingAnimation() {
    const typewriter = document.querySelector('.typewriter-text');
    const texts = [
        'Full-Stack Developer',
        'Mobile App Developer', 
        'Machine Learning Enthusiast',
        'UI/UX Designer',
        'Problem Solver'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriter.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 100 : 150;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    if (typewriter) {
        type();
    }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
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
}

// Intersection Observer for scroll animations
export function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
    });
}
