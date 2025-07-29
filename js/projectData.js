// Project data and management
import { createProjectCard } from './projects.js';

const projects = [
    {
        id: 1,
        title: "Groundio - Sports Venue Booking",
        description: "Cross-platform mobile application for booking stadiums and sports grounds with real-time availability, secure payment processing via Stripe, and comprehensive venue management.",
        image: "GroundioLogo.jpg",
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
    },
    {
        id: 7,
        title: "SharePay - Bill Splitting App",
        description: "Mobile application for splitting bills among friends with expense tracking, receipt uploads, and Firebase integration for secure authentication.",
        image: "https://img.icons8.com/color/96/money-transfer.png",
        technologies: ["Android Studio", "Java", "Firebase", "Material Design"],
        category: "mobile",
        status: "completed",
        github: "https://github.com/Srihaas007/SharePay",
        demo: null,
        year: "2023",
        featured: false
    },
    {
        id: 8,
        title: "Voice-Over Chatbot",
        description: "Interactive chatbot with voice synthesis capabilities, providing natural conversation experiences and reducing response time by 25%.",
        image: "https://img.icons8.com/color/96/bot.png",
        technologies: ["Python", "Speech Recognition", "Text-to-Speech", "NLP"],
        category: "ai",
        status: "completed",
        github: "https://github.com/Srihaas007/ChatBot",
        demo: null,
        year: "2023",
        featured: false
    },
    {
        id: 9,
        title: "Restaurant Web Application",
        description: "Full-stack web application for restaurant management with online ordering, menu management, and reservation system built with PHP and MySQL.",
        image: "https://img.icons8.com/color/96/restaurant.png",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        category: "web",
        status: "completed",
        github: "https://github.com/Srihaas007/RestaurantWebApp",
        demo: null,
        year: "2023",
        featured: false
    },
    {
        id: 10,
        title: "BookShop E-commerce",
        description: "Flask-based e-commerce platform for book sales with inventory management, shopping cart, and secure payment processing.",
        image: "https://img.icons8.com/color/96/book.png",
        technologies: ["Flask", "Python", "SQLAlchemy", "HTML", "CSS"],
        category: "web",
        status: "completed",
        github: "https://github.com/Srihaas007/BookShop",
        demo: null,
        year: "2022",
        featured: false
    },
    {
        id: 11,
        title: "Cybersecurity Website Enhancement",
        description: "Comprehensive security assessment and enhancement project implementing various security measures and best practices for web applications.",
        image: "https://img.icons8.com/color/96/security-checked.png",
        technologies: ["PHP", "Security Tools", "Penetration Testing", "OWASP"],
        category: "security",
        status: "completed",
        github: "https://github.com/Srihaas007/Web_Security",
        demo: null,
        year: "2023",
        featured: false
    }
];

export function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    const featuredProjectsGrid = document.getElementById('featured-projects-grid');
    
    if (featuredProjectsGrid) {
        renderFeaturedProjects(featuredProjectsGrid);
    }
    
    if (projectsGrid) {
        renderAllProjects(projectsGrid);
    }
}

function renderFeaturedProjects(container) {
    const featuredProjects = projects.filter(project => project.featured);
    container.innerHTML = featuredProjects.map(project => createProjectCard(project, true)).join('');
    
    // Add animation for featured projects
    setTimeout(() => {
        const featuredCards = container.querySelectorAll('.featured-card');
        featuredCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

function renderAllProjects(container) {
    container.innerHTML = projects.map(project => createProjectCard(project, false)).join('');
    
    // Add animation for all projects
    setTimeout(() => {
        const projectCards = container.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

export function getProjects() {
    return projects;
}

export function getProjectsByCategory(category) {
    if (category === 'all') return projects;
    return projects.filter(project => project.category === category);
}
