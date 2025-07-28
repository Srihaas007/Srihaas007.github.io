// Fixed project loader script
document.addEventListener('DOMContentLoaded', function() {
    console.log('Project loader script initialized');
    
    // Project data
    const projects = [
        {
            id: 1,
            title: "Groundio - Sports Venue Booking",
            description: "Cross-platform mobile application for booking stadiums and sports grounds with real-time availability, secure payment processing via Stripe, and comprehensive venue management.",
            image: "https://raw.githubusercontent.com/Srihaas007/Groundio/main/assets/merchant.png",
            technologies: ["React Native", "Firebase", "Stripe API", "Expo", "JavaScript"],
            category: "mobile",
            status: "featured",
            github: "https://github.com/Srihaas007/Groundio",
            demo: null,
            year: "2024",
            featured: true
        },
        {
            id: 2,
            title: "WhatsApp Food Ordering Bot",
            description: "Intelligent Python-based chatbot for WhatsApp that handles food ordering, menu browsing, and customer service with natural language processing capabilities.",
            image: "https://img.icons8.com/color/96/whatsapp--v1.png",
            technologies: ["Python", "WhatsApp API", "Natural Language Processing", "SQLite"],
            category: "ai",
            status: "completed",
            github: "https://github.com/Srihaas007/WhatsApp-Food-BOT",
            demo: null,
            year: "2024",
            featured: true
        },
        {
            id: 3,
            title: "File Manager Pro",
            description: "Comprehensive Python GUI application for advanced file management including duplicate detection, file sorting, image processing, encryption, and metadata handling.",
            image: "https://img.icons8.com/fluency/96/folder-invoices--v1.png",
            technologies: ["Python", "Tkinter", "PIL", "Cryptography", "OS Library"],
            category: "desktop",
            status: "completed",
            github: "https://github.com/Srihaas007/file-manager-pro",
            demo: null,
            year: "2024",
            featured: true
        },
        {
            id: 4,
            title: "Real-Time Sign Language Translation",
            description: "AI-powered system using transfer learning to translate British Sign Language (BSL) to Indian Sign Language (ISL) in real-time with 90% accuracy using computer vision.",
            image: "https://img.icons8.com/color/96/sign-language.png",
            technologies: ["Python", "TensorFlow", "OpenCV", "Machine Learning", "Computer Vision"],
            category: "ai",
            status: "completed",
            github: "https://github.com/Srihaas007/BSL-ISL-Transfer-learning",
            demo: null,
            year: "2024",
            featured: true
        },
        {
            id: 5,
            title: "Australia Rain Prediction ML",
            description: "Machine learning project predicting Australian rainfall with 93% accuracy using hyperparameter tuning, data preprocessing, and ensemble methods.",
            image: "https://img.icons8.com/color/96/rain.png",
            technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
            category: "ai",
            status: "completed",
            github: "https://github.com/Srihaas007/Australia-Rain-Prediction",
            demo: null,
            year: "2024",
            featured: false
        },
        {
            id: 6,
            title: "Task Manager with Geolocation",
            description: "MAUI-based task management application with geolocation features for location-aware task prioritization and smart notifications.",
            image: "https://img.icons8.com/color/96/task.png",
            technologies: [".NET MAUI", "C#", "SQLite", "Geolocation API"],
            category: "mobile",
            status: "completed",
            github: "https://github.com/Srihaas007/Task_Manager_geo",
            demo: null,
            year: "2023",
            featured: false
        }
    ];
    
    // Load featured projects
    function loadFeaturedProjects() {
        console.log('Loading featured projects...');
        const featuredProjectsGrid = document.getElementById('featured-projects-grid');
        
        if (featuredProjectsGrid) {
            console.log('Featured projects container found');
            const featuredProjects = projects.filter(project => project.featured);
            console.log(`Found ${featuredProjects.length} featured projects`);
            
            featuredProjectsGrid.innerHTML = featuredProjects.map(project => {
                return `
                    <div class="project-card featured-card fade-in-up" data-category="${project.category}">
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
            }).join('');
            console.log('Featured projects rendered successfully');
        } else {
            console.error('Featured projects container not found');
        }
    }
    
    // Load all projects
    function loadAllProjects() {
        console.log('Loading all projects...');
        const projectsGrid = document.getElementById('projects-grid');
        
        if (projectsGrid) {
            console.log('Projects container found');
            console.log(`Loading ${projects.length} projects`);
            
            projectsGrid.innerHTML = projects.map(project => {
                return `
                    <div class="project-card fade-in-up" data-category="${project.category}">
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
            }).join('');
            console.log('All projects rendered successfully');
        } else {
            console.error('Projects container not found');
        }
    }
    
    // Initialize project filters
    function initializeProjectFilters() {
        console.log('Initializing project filters...');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        if (filterButtons.length > 0) {
            console.log(`Found ${filterButtons.length} filter buttons`);
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.getAttribute('data-filter');
                    console.log(`Filter clicked: ${category}`);
                    
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    
                    // Filter projects
                    projectCards.forEach(card => {
                        const projectCategory = card.getAttribute('data-category');
                        
                        if (category === 'all' || projectCategory === category) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, 50);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(20px)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });
        } else {
            console.warn('No filter buttons found');
        }
    }
    
    // Load all project data
    loadFeaturedProjects();
    loadAllProjects();
    initializeProjectFilters();
    console.log('Project initialization complete');
});
