// Theme management
let currentTheme = 'dark';

export function initializeTheme() {
    // Check for saved theme or default to dark
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    
    // Add theme toggle event listener
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

export function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    
    // Update theme toggle button
    updateThemeToggle(theme);
    
    // Update particles color based on theme
    updateParticlesTheme(theme);
}

export function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function updateThemeToggle(theme) {
    const toggle = document.getElementById('theme-toggle');
    const icon = toggle?.querySelector('i');
    
    if (icon) {
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
            toggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            icon.className = 'fas fa-moon';
            toggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }
}

function updateParticlesTheme(theme) {
    // Update particles.js colors based on theme
    if (window.pJSDom && window.pJSDom[0]) {
        const particleColor = theme === 'dark' ? '#ffffff' : '#000000';
        const pJS = window.pJSDom[0].pJS;
        
        pJS.particles.color.value = particleColor;
        pJS.particles.line_linked.color = particleColor;
        
        // Update existing particles
        pJS.particles.array.forEach(particle => {
            particle.color.value = particleColor;
        });
    }
}

export function getCurrentTheme() {
    return currentTheme;
}
