
/**
 * Photography Application
 * Handles gallery rendering, filtering, lazy loading, and lightbox.
 */

const PHOTO_DATA = [
    // Aesthetics
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/India/IMG_7678.DNG?updatedAt=1730042476439', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0192_Original.jpg?updatedAt=1730044171221', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0072_Original.jpg?updatedAt=1730044171260', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0103_Original.jpg?updatedAt=1730044171141', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0008_Original.jpg?updatedAt=1730044171202', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0016_Original.jpg?updatedAt=1730044171248', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0013_Original.jpg?updatedAt=1730044171246', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/Snapseed_Original.jpg?updatedAt=1730044171229', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0007_Original.jpg?updatedAt=1730044171204', category: 'aesthetics', alt: 'Aesthetics Collection' },
    { src: 'https://ik.imagekit.io/u9j5vtftw/photos/Aesthetics/_DSC0006_Original.jpg?updatedAt=1730044171291', category: 'aesthetics', alt: 'Aesthetics Collection' },
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

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    // Lazy load observer
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-blur');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });

    function renderGallery(category = 'all') {
        galleryGrid.innerHTML = '';
        const filteredPhotos = category === 'all'
            ? PHOTO_DATA
            : PHOTO_DATA.filter(photo => photo.category === category);

        filteredPhotos.forEach((photo, index) => {
            const item = document.createElement('div');
            item.className = 'masonry-item animate-fade-in-up';
            item.style.animationDelay = `${index * 0.05}s`; // Staggered animation

            // Format category name for display
            const displayCategory = photo.category.replace('-', ' & ').replace(/\b\w/g, c => c.toUpperCase());

            item.innerHTML = `
                <button class="photo-card" onclick="openLightbox('${photo.src}')">
                    <img data-src="${photo.src}" alt="${photo.alt}" class="lazy-blur">
                    <div class="card-overlay"></div>
                    <div class="card-content">
                        <h4 class="card-title">${photo.alt}</h4>
                        <p class="card-meta">${displayCategory}</p>
                    </div>
                </button>
            `;

            const img = item.querySelector('img');
            imageObserver.observe(img);

            galleryGrid.appendChild(item);
        });
    }

    function openLightbox(src) {
        lightbox.style.display = 'flex';
        // Allow display:flex to apply before adding opacity class
        requestAnimationFrame(() => {
            lightbox.classList.add('active');
            lightboxImg.src = src;
        });
    }

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300); // Wait for transition
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.style.display = 'none';
            }, 300);
        }
    });

    // Filter Logic
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            renderGallery(filterValue);

            // Update URL hash without scrolling
            history.replaceState(null, null, filterValue === 'all' ? ' ' : `#${filterValue}`);
        });
    });

    // Check Hash on Load
    const hash = window.location.hash.slice(1);
    if (hash && ['aesthetics', 'city-lights', 'water-bodies', 'animals', 'moon-sun', 'cars-toys', 'india'].includes(hash)) {
        const btn = document.querySelector(`[data-filter="${hash}"]`);
        if (btn) btn.click();
    } else {
        renderGallery('all');
    }
});
