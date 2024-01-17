// Get the profiles carousel element
const profilesCarousel = document.getElementById('profilesCarousel');

// Function to scroll the carousel to the next profile
const scrollToNextProfile = () => {
    profilesCarousel.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth'
    });
};

// Function to scroll the carousel to the previous profile
const scrollToPrevProfile = () => {
    profilesCarousel.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth'
    });
};

// Event listener for swiping left on the carousel
profilesCarousel.addEventListener('swipeleft', scrollToNextProfile);

// Event listener for swiping right on the carousel
profilesCarousel.addEventListener('swiperight', scrollToPrevProfile);
