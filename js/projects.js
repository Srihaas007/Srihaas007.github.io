// Project filtering functionality
import { getProjectsByCategory } from './projectData.js';

export function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.getElementById('projects-grid');
    
    if (filterButtons.length === 0 || !projectsGrid) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            filterProjects(category, projectsGrid);
        });
    });
}

function filterProjects(category, container) {
    const projects = getProjectsByCategory(category);
    const projectCards = container.querySelectorAll('.project-card');
    
    // Animate out current projects
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });
    
    // Wait for animation, then update projects
    setTimeout(() => {
        container.innerHTML = projects.map(project => createProjectCard(project, false)).join('');
        
        // Animate in new projects
        const newCards = container.querySelectorAll('.project-card');
        newCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
}

export function createProjectCard(project, isFeatured = false) {
    const cardClass = isFeatured ? 'project-card featured-card' : 'project-card';
    const cardStyle = isFeatured ? 'opacity: 0; transform: translateY(20px); transition: all 0.3s ease;' : 'opacity: 0; transform: translateY(20px); transition: all 0.3s ease;';
    
    return `
        <div class="${cardClass}" data-category="${project.category}" style="${cardStyle}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View source code">
                            <i class="fab fa-github"></i>
                        </a>` : ''}
                        ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View live demo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>` : ''}
                    </div>
                </div>
            </div>
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-year">${project.year}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-status">
                    <span class="status-badge status-${project.status}">${project.status}</span>
                </div>
            </div>
        </div>
    `;
}
