// Gallery page generator script
const galleries = [
    {
        filename: "water-bodies.html",
        title: "Water Bodies",
        subtitle: "Serenity captured through flowing waters",
        photos: [
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/_DSC0349.JPG?updatedAt=1730042463687&tr=w-800,h-600,c-force",
                title: "Serene Waters",
                description: "Peaceful moments by the water"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_2002.DNG?updatedAt=1730042462208&tr=w-800,h-600,c-force",
                title: "Flowing Grace",
                description: "Nature's liquid poetry"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_5860.JPG?updatedAt=1730042458777&tr=w-800,h-600,c-force",
                title: "Aquatic Beauty",
                description: "Life-giving waters"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_9849-EFFECTS.jpg?updatedAt=1730042457821&tr=w-800,h-600,c-force",
                title: "Liquid Mirror",
                description: "Reflections of tranquility"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/Snapseed.heic?updatedAt=1730042457796&tr=w-800,h-600,c-force",
                title: "Water's Edge",
                description: "Where land meets water"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_9067-ANIMATION.gif?updatedAt=1730042457548&tr=w-800,h-600,c-force",
                title: "Animated Flow",
                description: "Water in motion"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_5855.JPG?updatedAt=1730042456021&tr=w-800,h-600,c-force",
                title: "Crystal Clear",
                description: "Pure natural beauty"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_3057.DNG?updatedAt=1730042455457&tr=w-800,h-600,c-force",
                title: "Peaceful Current",
                description: "Gentle water flows"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_5145.JPG?updatedAt=1730042455110&tr=w-800,h-600,c-force",
                title: "Aquatic Serenity",
                description: "Calm waters, calm mind"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_8191.HEIC?updatedAt=1730042454960&tr=w-800,h-600,c-force",
                title: "Water's Embrace",
                description: "Nature's gentle touch"
            }
        ]
    },
    {
        filename: "animals.html",
        title: "Animals",
        subtitle: "A journey through the wonders of the animal kingdom",
        photos: [
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/_DSC0088.JPG?updatedAt=1730042532110&tr=w-800,h-600,c-force",
                title: "Wildlife Portrait",
                description: "Capturing animal essence"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/_DSC0462.JPG?updatedAt=1730042523238&tr=w-800,h-600,c-force",
                title: "Natural Behavior",
                description: "Animals in their element"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed.jpg?updatedAt=1730042522641&tr=w-800,h-600,c-force",
                title: "Wild Beauty",
                description: "Untamed magnificence"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(9).jpg?updatedAt=1730042522056&tr=w-800,h-600,c-force",
                title: "Animal Grace",
                description: "Elegant movement captured"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(7).jpg?updatedAt=1730042521876&tr=w-800,h-600,c-force",
                title: "Wildlife Wonder",
                description: "Nature's incredible creatures"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(5).jpg?updatedAt=1730042521771&tr=w-800,h-600,c-force",
                title: "Animal Kingdom",
                description: "Diverse species showcase"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(2).jpg?updatedAt=1730042521543&tr=w-800,h-600,c-force",
                title: "Natural Instinct",
                description: "Pure animal behavior"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(6).jpg?updatedAt=1730042521308&tr=w-800,h-600,c-force",
                title: "Wildlife Drama",
                description: "Stories from the wild"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(3).jpg?updatedAt=1730042520406&tr=w-800,h-600,c-force",
                title: "Animal Character",
                description: "Personality in the wild"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(17).jpg?updatedAt=1730042519569&tr=w-800,h-600,c-force",
                title: "Natural Heritage",
                description: "Conservation through art"
            }
        ]
    },
    {
        filename: "moon-sun.html",
        title: "Moon & Sun",
        subtitle: "A journey through the beauty of celestial bodies",
        photos: [
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/_DSC0477.JPG?updatedAt=1730042469353&tr=w-800,h-600,c-force",
                title: "Celestial Glory",
                description: "The majesty of our star"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_6057.JPG?updatedAt=1730042468437&tr=w-800,h-600,c-force",
                title: "Lunar Beauty",
                description: "Our eternal companion"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/_DSC0104%20(2).JPG?updatedAt=1730042466451&tr=w-800,h-600,c-force",
                title: "Solar Splendor",
                description: "Golden hour magic"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_4937(1).JPG?updatedAt=1730042464716&tr=w-800,h-600,c-force",
                title: "Cosmic Dance",
                description: "Celestial movements captured"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_9246.HEIC?updatedAt=1730042464267&tr=w-800,h-600,c-force",
                title: "Evening Star",
                description: "Twilight's gentle glow"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_9244.HEIC?updatedAt=1730042464217&tr=w-800,h-600,c-force",
                title: "Lunar Phase",
                description: "Moon's changing face"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_8407.HEIC?updatedAt=1730042464017&tr=w-800,h-600,c-force",
                title: "Solar Horizon",
                description: "Where earth meets sky"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_6008.HEIC?updatedAt=1730042463366&tr=w-800,h-600,c-force",
                title: "Celestial Wonder",
                description: "Astronomical beauty"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_4944.JPG?updatedAt=1730042462722&tr=w-800,h-600,c-force",
                title: "Lunar Landscape",
                description: "Night's silver light"
            },
            {
                src: "https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_4937.JPG?updatedAt=1730042462583&tr=w-800,h-600,c-force",
                title: "Solar Symphony",
                description: "Light and shadow play"
            }
        ]
    }
];

console.log("Gallery data prepared for:", galleries.map(g => g.filename).join(", "));
