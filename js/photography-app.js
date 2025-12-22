
/**
 * Photography Application
 * Handles gallery rendering, filtering, lazy loading, and lightbox.
 */

const PHOTO_DATA = [
    // Aesthetics
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7678.DNG?updatedAt=1730042476439', category: 'aesthetics', alt: 'Aesthetics Collection', poetry: 'In silence, beauty speaks\nWhispers of light and shadow\nMoments frozen in time' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0192_Original.jpg?updatedAt=1730044171221', category: 'aesthetics', alt: 'Aesthetics Collection', poetry: 'Patterns emerge from chaos\nGeometry of the everyday\nArt in the mundane' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0072_Original.jpg?updatedAt=1730044171260', category: 'aesthetics', alt: 'Aesthetics Collection', poetry: 'Textures tell their stories\nRough and smooth in harmony\nNature\'s quiet poetry' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0103_Original.jpg?updatedAt=1730044171141', category: 'aesthetics', alt: 'Aesthetics Collection', poetry: 'Colors dance in stillness\nA symphony for the eyes\nBeauty needs no sound' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0008_Original.jpg?updatedAt=1730044171202', category: 'aesthetics', alt: 'Aesthetics Collection', poetry: 'Minimalism breathes\nEmpty spaces hold meaning\nLess becomes so much more' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0016_Original.jpg?updatedAt=1730044171248', category: 'aesthetics', alt: 'Aesthetics Collection', poetry: 'Reflections multiply\nReality bends and folds\nMirrors of the soul' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0013_Original.jpg?updatedAt=1730044171246', category: 'aesthetics', alt: 'Aesthetics Collection', poetry: 'Abstract forms emerge\nFrom concrete reality\nImagination blooms' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/Snapseed_Original.jpg?updatedAt=1730044171229', category: 'aesthetics', alt: 'Aesthetics Collection', poetry: 'Details overlooked\nBecome monuments of grace\nWhen we pause to see' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0007_Original.jpg?updatedAt=1730044171204', category: 'aesthetics', alt: 'Aesthetics Collection', poetry: 'Symmetry and balance\nOrder in the universe\nPerfection in frames' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0006_Original.jpg?updatedAt=1730044171291', category: 'aesthetics', alt: 'Aesthetics Collection', poetry: 'Contrast defines form\nDarkness gives birth to light\nDuality\'s dance' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/Snapseed%20(2).jpg?updatedAt=1730044171436', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/Snapseed%204.jpg?updatedAt=1730044171374', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_6670.jpg?updatedAt=1730044171245', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_6499.JPG?updatedAt=1730044171290', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_6864.JPG?updatedAt=1730044171219', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_9552.HEIC?updatedAt=1730044171428', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_9507.DNG?updatedAt=1730044171280', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_5837.JPG?updatedAt=1730044171238', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_5722.HEIC?updatedAt=1730044171227', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_3901.DNG?updatedAt=1730044171266', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_4587.DNG?updatedAt=1730044171337', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_4594.DNG?updatedAt=1730044171206', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_4047.DNG?updatedAt=1730044171289', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_4249.HEIC?updatedAt=1730044171420', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_3827.jpg?updatedAt=1730044171430', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_3902_Original.jpg?updatedAt=1730044171287', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_3734.DNG?updatedAt=1730044171268', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_3119.DNG?updatedAt=1730044171332', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_2805.DNG?updatedAt=1730044171230', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_2817.HEIC?updatedAt=1730044171336', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_2853.DNG?updatedAt=1730044171372', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_2026_Original.jpg?updatedAt=1730044171447', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_0144.HEIC?updatedAt=1730044171334', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_0025.HEIC?updatedAt=1730044171433', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_2804.HEIC?updatedAt=1730044171429', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_0840.DNG?updatedAt=1730044171335', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_1737.HEIC?updatedAt=1730044171431', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/IMG_1746.heic?updatedAt=1730044171375', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/20210929_093612_Original.jpg?updatedAt=1730044171434', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/20220623_210736.jpg?updatedAt=1730044171426', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/7d02be1a-f5a5-4bd6-a8ec-a7a466b640af.jpg?updatedAt=1730044171435', category: 'aesthetics', alt: 'Aesthetics Collection' },

    // City Lights
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0317.JPG?updatedAt=1730042514108', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0186.JPG?updatedAt=1730046479176', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0286.JPG?updatedAt=1730042512313', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0184.JPG?updatedAt=1730042511863', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0306.JPG?updatedAt=1730046479183', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0185.JPG?updatedAt=1730046479106', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0266_Original.JPG?updatedAt=1730046479070', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/Snapseed(5).heic?updatedAt=1730046479075', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_9551.HEIC?updatedAt=1730046478935', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/Snapseed%202.jpg?updatedAt=1730046479072', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/Snapseed(1).heic?updatedAt=1730046479046', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_5985.JPG?updatedAt=1730046479076', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/Snapseed(3).heic?updatedAt=1730046479017', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_5973.JPG?updatedAt=1730046479037', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_6033.JPG?updatedAt=1730046479060', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_4371.HEIC?updatedAt=1730046478965', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_4362.DNG?updatedAt=1730046479074', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_8624.JPG?updatedAt=1730046478904', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_1773.HEIC?updatedAt=1730046479047', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_2981.DNG?updatedAt=1730046478943', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_4027.DNG?updatedAt=1730046479029', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_4186.jpg?updatedAt=1730046478958', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_2708.HEIC?updatedAt=1730046478972', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_2604.HEIC?updatedAt=1730046478931', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_0745-EFFECTS.jpg?updatedAt=1730046478982', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_1779.DNG?updatedAt=1730046479028', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_1068.HEIC?updatedAt=1730046479045', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_2380.JPG?updatedAt=1730046478928', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/20240416_062221.jpg?updatedAt=1730046478930', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/IMG_0307.JPG?updatedAt=1730046479073', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/FullSizeRender(1).jpg?updatedAt=1730046479048', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/79aa8fc6-c254-4030-a05e-c71fbe5184f5.jpg?updatedAt=1730046479018', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0395.JPG?updatedAt=1730042515203', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0399.JPG?updatedAt=1730042515262', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0402.JPG?updatedAt=1730042515307', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0406.JPG?updatedAt=1730042515357', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0408.JPG?updatedAt=1730042515414', category: 'city-lights', alt: 'City Lights Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0410.JPG?updatedAt=1730042515459', category: 'city-lights', alt: 'City Lights Collection' },

    // Animals
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/_DSC0088.JPG?updatedAt=1730042532110', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/_DSC0462.JPG?updatedAt=1730042523238', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed.jpg?updatedAt=1730042522641', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(9).jpg?updatedAt=1730042522056', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(7).jpg?updatedAt=1730042521876', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(5).jpg?updatedAt=1730042521771', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(2).jpg?updatedAt=1730042521543', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(6).jpg?updatedAt=1730042521308', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(3).jpg?updatedAt=1730042520406', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(17).jpg?updatedAt=1730042519569', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(16).jpg?updatedAt=1730042519284', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(14).jpg?updatedAt=1730042518545', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(15).jpg?updatedAt=1730042518454', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(13).jpg?updatedAt=1730042518320', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(12).jpg?updatedAt=1730042517852', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(11).jpg?updatedAt=1730042517776', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/IMG_4953.JPG?updatedAt=1730042517286', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(1).jpg?updatedAt=1730042517254', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/Snapseed(10).jpg?updatedAt=1730042517054', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/IMG_6046.HEIC?updatedAt=1730042516811', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/IMG_6407.DNG?updatedAt=1730045269576', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/IMG_4494.JPG?updatedAt=1730045269563', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/IMG_1807.heic?updatedAt=1730045269591', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/IMG_4479.DNG?updatedAt=1730045269652', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/IMG_1900(1).HEIC?updatedAt=1730045269758', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/IMG_1787.heic?updatedAt=1730045269601', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/IMG_0075.HEIC?updatedAt=1730045269599', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/IMG_0110.HEIC?updatedAt=1730045269606', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/575.JPG?updatedAt=1730045269638', category: 'animals', alt: 'Animals Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/44ae78c6-8b15-4af7-a544-75b086dd5f64.jpg?updatedAt=1730045269651', category: 'animals', alt: 'Animals Collection' },

    // Water Bodies
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/_DSC0349.JPG?updatedAt=1730042463687', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_2002.DNG?updatedAt=1730042462208', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_5860.JPG?updatedAt=1730042458777', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_9849-EFFECTS.jpg?updatedAt=1730042457821', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/Snapseed.heic?updatedAt=1730042457796', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_9067-ANIMATION.gif?updatedAt=1730042457548', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_5855.JPG?updatedAt=1730042456021', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_3057.DNG?updatedAt=1730042455457', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_5145.JPG?updatedAt=1730042455110', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_8191.HEIC?updatedAt=1730042454960', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/5974FA5B-A49B-4515-8FC0-569BFBE47E54.jpg?updatedAt=1730042451813', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/E5A40B7B-2400-4319-8D37-B228CD3FE97E.jpg?updatedAt=1730042451483', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_2139.HEIC?updatedAt=1730042451372', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/CA3B5B6E-1072-4440-A530-5A6F8B369590.jpg?updatedAt=1730042451071', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/1573365D-B03C-4BB1-A08E-91138EDA0E4B.jpg?updatedAt=1730042451064', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/319F1E93-B441-4A85-A435-CBD4BFA20D74.jpg?updatedAt=1730042450935', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/20220419_195919.jpg?updatedAt=1730042450920', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/A4819F80-5438-4119-A5D1-96049A0E87F3.jpg?updatedAt=1730042450838', category: 'water-bodies', alt: 'Water Bodies Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/685FBBD2-9BB0-44EA-90FE-C5DB584270A5.jpg?updatedAt=1730042450532', category: 'water-bodies', alt: 'Water Bodies Collection' },

    // India
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/Snapseed.dng?updatedAt=1730042481695', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_8191.DNG?updatedAt=1730042480522', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_8114-EFFECTS.jpg?updatedAt=1730042480134', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_8150.HEIC?updatedAt=1730042479900', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/Snapseed(1).dng?updatedAt=1730042479629', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7726.DNG?updatedAt=1730042478796', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_8162.HEIC?updatedAt=1730042478548', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7693.DNG?updatedAt=1730042477583', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7681.DNG?updatedAt=1730042477296', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7691.DNG?updatedAt=1730042477216', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7678.DNG?updatedAt=1730042476439', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7655.DNG?updatedAt=1730042476060', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7452.DNG?updatedAt=1730042475945', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7550.HEIC?updatedAt=1730042475599', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7438.DNG?updatedAt=1730042475564', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7471.jpg?updatedAt=1730042475515', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7167.DNG?updatedAt=1730042474984', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7159.DNG?updatedAt=1730042474498', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7178.DNG?updatedAt=1730042474100', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7293.DNG?updatedAt=1730042473538', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7270.DNG?updatedAt=1730042473382', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7172.DNG?updatedAt=1730042472892', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7136.DNG?updatedAt=1730042472370', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7128.DNG?updatedAt=1730042471378', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_6965.DNG?updatedAt=1730042471020', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_6484.JPG?updatedAt=1730042470188', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_6922.JPG?updatedAt=1730042470068', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_6573.DNG?updatedAt=1730042469899', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_6068.HEIC?updatedAt=1730042469592', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_4639.jpg?updatedAt=1730042469134', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_6033.HEIC?updatedAt=1730042469060', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_4546.HEIC?updatedAt=1730042469060', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_4554.JPG?updatedAt=1730042468044', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_4413.HEIC?updatedAt=1730042467586', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_4260.DNG?updatedAt=1730042467244', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG-20200901-WA0011_Original.jpg?updatedAt=1730042466508', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_0469.JPG?updatedAt=1730042466449', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/FullSizeRender.jpg?updatedAt=1730042466137', category: 'india', alt: 'India Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/5B3D5ED7-9CE1-4177-8999-EC52A44ABCB4.jpg?updatedAt=1730042465440', category: 'india', alt: 'India Collection' },

    // Moon & Sun
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/_DSC0477.JPG?updatedAt=1730042469353', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_6057.JPG?updatedAt=1730042468437', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/_DSC0104%20(2).JPG?updatedAt=1730042466451', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_4937(1).JPG?updatedAt=1730042464716', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_9246.HEIC?updatedAt=1730042464267', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_9244.HEIC?updatedAt=1730042464217', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_8407.HEIC?updatedAt=1730042464017', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_6008.HEIC?updatedAt=1730042463366', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_4944.JPG?updatedAt=1730042462722', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_4937.JPG?updatedAt=1730042462583', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_4010.DNG?updatedAt=1730042461726', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_0473.DNG?updatedAt=1730042461664', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_2555.jpg?updatedAt=1730042461367', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_1872.DNG?updatedAt=1730042460780', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/ec4716eb-6e3b-427d-9f07-82fbdb67140f.jpg?updatedAt=1730042460514', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/BAFB1DE5-44A0-4FCF-B554-6F5FE43092EC.jpg?updatedAt=1730042460275', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/cce62982-216e-40fa-bbe5-3ce572ca59d9.jpg?updatedAt=1730042460332', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/b4109024-3c44-4a3d-8980-0a28e2e56521.jpg?updatedAt=1730042460131', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/93c5b69f-7ef5-44b8-84b9-e1a62de9e74a.jpg?updatedAt=1730042458486', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/20240417_025713.jpg?updatedAt=1730042458270', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/0c1688b1-45e1-464e-a913-0e9571147bc7.jpg?updatedAt=1730042458016', category: 'moon-sun', alt: 'Moon and Sun Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/8d45609a-3e33-4947-a6b4-0258a6de18b3.jpg?updatedAt=1730042457975', category: 'moon-sun', alt: 'Moon and Sun Collection' },

    // Cars & Toys
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_6954.jpg?updatedAt=1730042514330', category: 'cars-toys', alt: 'Cars & Toys Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_9210.HEIC?updatedAt=1730042509742', category: 'cars-toys', alt: 'Cars & Toys Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_9860.JPG?updatedAt=1730042508858', category: 'cars-toys', alt: 'Cars & Toys Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_2780.HEIC?updatedAt=1730042507918', category: 'cars-toys', alt: 'Cars & Toys Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_2775.HEIC?updatedAt=1730042505758', category: 'cars-toys', alt: 'Cars & Toys Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_2767.HEIC?updatedAt=1730042504546', category: 'cars-toys', alt: 'Cars & Toys Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_2771.HEIC?updatedAt=1730042504420', category: 'cars-toys', alt: 'Cars & Toys Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/FullSizeRender%20(2).jpg?updatedAt=1730042503697', category: 'cars-toys', alt: 'Cars & Toys Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_2764.HEIC?updatedAt=1730042501435', category: 'cars-toys', alt: 'Cars & Toys Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_2528.HEIC?updatedAt=1730042500199', category: 'cars-toys', alt: 'Cars & Toys Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_2387.JPG?updatedAt=1730042499889', category: 'cars-toys', alt: 'Cars & Toys Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_1367.HEIC?updatedAt=1730042496834', category: 'cars-toys', alt: 'Cars & Toys Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_20170527_121019.jpg?updatedAt=1730042495445', category: 'cars-toys', alt: 'Cars & Toys Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_0303.HEIC?updatedAt=1730042494372', category: 'cars-toys', alt: 'Cars & Toys Collection' }
];

// Poetry themes by category
const POETRY_THEMES = {
    'aesthetics': [
        'In silence, beauty speaks\nWhispers of light and shadow\nMoments frozen in time',
        'Patterns emerge from chaos\nGeometry of the everyday\nArt in the mundane',
        'Textures tell their stories\nRough and smooth in harmony\nNature\'s quiet poetry',
        'Minimalism breathes\nEmpty spaces hold meaning\nLess becomes so much more'
    ],
    'city-lights': [
        'Neon rivers flow\nThrough canyons of glass and steel\nThe city never sleeps',
        'Electric dreams glow\nIn the heart of midnight streets\nUrban constellations',
        'Concrete jungle hums\nWith stories of a million souls\nLights guide them home',
        'Skyscrapers pierce clouds\nReaching for tomorrow\'s dawn\nAmbition in stone'
    ],
    'water-bodies': [
        'Waves whisper secrets\nTo shores that listen patiently\nEternal dialogue',
        'Liquid mirror holds\nReflections of endless sky\nBoundaries dissolve',
        'Currents carry dreams\nAcross horizons unknown\nWater knows no walls',
        'Tides ebb and flow\nBreathing rhythm of the earth\nOcean\'s heartbeat'
    ],
    'animals': [
        'Wild eyes meet mine\nBridging worlds without words\nKinship in silence',
        'Freedom in motion\nUntamed spirits roam the earth\nNature\'s pure essence',
        'Feathers, fur, and scales\nEach creature tells its story\nLife in all its forms',
        'Instinct guides the way\nThrough forests, skies, and waters\nSurvival\'s ancient dance'
    ],
    'moon-sun': [
        'Celestial dance\nDay surrenders to the night\nEternal balance',
        'Golden rays descend\nPainting clouds in fire\nDay\'s last masterpiece',
        'Silver moon ascends\nGuardian of dreams and stars\nNight\'s gentle embrace',
        'Sun and moon exchange\nSecrets at the horizon\nTwilight\'s brief kiss'
    ],
    'cars-toys': [
        'Miniature worlds\nWhere imagination drives\nChildhood never ends',
        'Metal and dreams merge\nEngineered for pure delight\nJoy in every curve',
        'Tiny universes\nHeld in the palm of wonder\nPlay knows no limits',
        'Wheels spin stories\nOf adventures yet to come\nToys fuel tomorrow'
    ],
    'india': [
        'Colors burst alive\nChaos and calm intertwine\nIndia\'s heartbeat',
        'Ancient stones whisper\nTales of empires risen, fallen\nHistory breathes here',
        'Spices fill the air\nWith memories of the earth\nFlavors of the soul',
        'Temples touch the sky\nWhere prayers and time converge\nFaith carved in stone'
    ]
};

// Add poetry to photos that don't have it
PHOTO_DATA.forEach(photo => {
    if (!photo.poetry) {
        const themes = POETRY_THEMES[photo.category] || POETRY_THEMES['aesthetics'];
        photo.poetry = themes[Math.floor(Math.random() * themes.length)];
    }
});

const COLLECTIONS = [
    { id: 'city-lights', title: 'City Lights', subtitle: 'Urban Nights & Neon Dreams', cover: 'https://ik.imagekit.io/u9j5vtftw/photos/City%20Lights/_DSC0317.JPG?updatedAt=1730042514108', featured: true },
    { id: 'water-bodies', title: 'Water Bodies', subtitle: 'Oceans, Lakes & Rivers', cover: 'https://ik.imagekit.io/u9j5vtftw/photos/Water%20Bodies/IMG_2002.DNG?updatedAt=1730042462208' },
    { id: 'india', title: 'India', subtitle: 'Heritage & Chaos', cover: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7678.DNG?updatedAt=1730042476439' },
    { id: 'aesthetics', title: 'Aesthetics', subtitle: 'Abstract & Minimal', cover: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0392%20(2).JPG?updatedAt=1730044171232' },
    { id: 'animals', title: 'Animals', subtitle: 'Wild & Free', cover: 'https://ik.imagekit.io/u9j5vtftw/photos/Animaliaanimals/_DSC0088.JPG?updatedAt=1730042532110' },
    { id: 'moon-sun', title: 'Moon & Sun', subtitle: 'Celestial Moments', cover: 'https://ik.imagekit.io/u9j5vtftw/photos/moon%20and%20sun/IMG_6057.JPG?updatedAt=1730042468437' },
    { id: 'cars-toys', title: 'Cars & Toys', subtitle: 'Miniature Worlds', cover: 'https://ik.imagekit.io/u9j5vtftw/photos/Cars%20and%20toys/IMG_2780.HEIC?updatedAt=1730042507918' }
];

document.addEventListener('DOMContentLoaded', () => {
    // View Elements
    const collectionsHome = document.getElementById('collections-home');
    const galleryGrid = document.getElementById('gallery-grid');
    const filterBar = document.getElementById('filter-bar');
    const currentCategoryLabel = document.getElementById('current-category-title');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    // 1. Render Home (Preview Sections)
    function renderHome() {
        // Clear views
        galleryGrid.innerHTML = '';
        galleryGrid.style.display = 'none';
        filterBar.style.display = 'none';

        // Show Home
        collectionsHome.innerHTML = '';
        collectionsHome.style.display = 'block';
        collectionsHome.classList.remove('hidden');
        collectionsHome.classList.add('animate-fade-in');

        COLLECTIONS.forEach((col, index) => {
            // Get first 3 photos for this category
            const previewPhotos = PHOTO_DATA.filter(p => p.category === col.id).slice(0, 3);

            if (previewPhotos.length === 0) return;

            const section = document.createElement('div');
            section.className = 'preview-section';
            section.style.animationDelay = `${index * 0.1}s`;

            // Section Header
            const headerHTML = `
                <div class="section-header">
                    <div>
                        <h3 class="section-title">${col.title}</h3>
                        <p class="section-subtitle">${col.subtitle}</p>
                    </div>
                    <button class="btn-view-more" onclick="loadCategory('${col.id}')">
                        View Collection <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            `;

            // Preview Grid
            let gridHTML = '<div class="preview-grid">';
            previewPhotos.forEach((photo) => {
                const displayCategory = photo.category.replace('-', ' & ').replace(/\b\w/g, c => c.toUpperCase());
                const photoIndex = PHOTO_DATA.indexOf(photo);
                gridHTML += `
                    <div class="photo-card" onclick="openLightboxByIndex(${photoIndex})">
                        <div class="photo-card-inner">
                            <div class="photo-card-front">
                                <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
                                <div class="card-overlay"></div>
                                <div class="card-content">
                                    <h4 class="card-title">${photo.alt}</h4>
                                    <p class="card-meta">${displayCategory}</p>
                                </div>
                            </div>
                            <div class="photo-card-back">
                                <p class="poetry-text">${photo.poetry || 'Beauty captured in stillness'}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
            gridHTML += '</div>';

            section.innerHTML = headerHTML + gridHTML;
            collectionsHome.appendChild(section);
        });
    }

    // 2. Render Category (Detailed Grid)
    function renderCategory(categoryId) {
        // Toggle Views
        collectionsHome.style.display = 'none';
        galleryGrid.style.display = 'block';
        filterBar.style.display = 'flex';

        // Animation
        galleryGrid.classList.add('animate-fade-in');

        // Update Header
        const categoryData = COLLECTIONS.find(c => c.id === categoryId);
        currentCategoryLabel.textContent = categoryData ? categoryData.title : 'Gallery';

        // Render Items
        galleryGrid.innerHTML = '';
        const filteredPhotos = categoryId === 'all'
            ? PHOTO_DATA
            : PHOTO_DATA.filter(photo => photo.category === categoryId);

        filteredPhotos.forEach((photo, index) => {
            const item = document.createElement('div');
            item.className = 'masonry-item animate-fade-in-up';
            item.style.animationDelay = `${Math.min(index * 0.05, 1.0)}s`;

            const displayCategory = photo.category.replace('-', ' & ').replace(/\b\w/g, c => c.toUpperCase());
            const photoIndex = PHOTO_DATA.indexOf(photo);

            item.innerHTML = `
                <div class="photo-card" onclick="openLightboxByIndex(${photoIndex})">
                    <div class="photo-card-inner">
                        <div class="photo-card-front">
                            <img data-src="${photo.src}" alt="${photo.alt}" class="lazy-blur">
                            <div class="card-overlay"></div>
                            <div class="card-content">
                                <h4 class="card-title">${photo.alt}</h4>
                                <p class="card-meta">${displayCategory}</p>
                            </div>
                        </div>
                        <div class="photo-card-back">
                            <p class="poetry-text">${photo.poetry || 'Beauty captured in stillness'}</p>
                        </div>
                    </div>
                </div>
            `;

            // Observe for Lazy Load
            const img = item.querySelector('img');
            imageObserver.observe(img);

            galleryGrid.appendChild(item);
        });
    }

    // Lazy load observer
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-blur');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '50px'
    });

    // --- Routing & Navigation ---

    window.loadCategory = (id) => {
        history.pushState(null, null, `#${id}`);
        renderCategory(id);
        const workSection = document.getElementById('work');
        if (workSection) workSection.scrollIntoView({ behavior: 'smooth' });
    };

    window.showHome = () => {
        history.pushState(null, null, ' '); // Clear hash
        renderHome();
        const workSection = document.getElementById('work');
        if (workSection) workSection.scrollIntoView({ behavior: 'smooth' });
    };

    function handleHashChange() {
        const hash = window.location.hash.slice(1);
        const validCategories = COLLECTIONS.map(c => c.id);

        if (validCategories.includes(hash)) {
            renderCategory(hash);
        } else {
            // Default to Home (No "All" option)
            renderHome();
        }
    }

    // Expose openLightbox globally
    window.openLightbox = openLightbox;
    window.openLightboxByIndex = openLightboxByIndex;

    function openLightboxByIndex(index) {
        const photo = PHOTO_DATA[index];
        if (photo) {
            openLightbox(photo);
        }
    }

    function openLightbox(photoData) {
        // Handle both object and string (legacy) inputs
        const photo = typeof photoData === 'string' ? { src: photoData, poetry: '' } : photoData;

        lightbox.style.display = 'flex';
        requestAnimationFrame(() => {
            lightbox.classList.add('active');
            lightboxImg.src = photo.src;

            // Update poetry panel
            const poetryPanel = document.getElementById('lightbox-poetry');
            if (poetryPanel && photo.poetry) {
                poetryPanel.textContent = photo.poetry;
            }
        });
    }

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.style.display = 'none';
            }, 300);
        }
    });

    // Initialize
    window.addEventListener('hashchange', handleHashChange);

    // Initial Load
    handleHashChange();
});
