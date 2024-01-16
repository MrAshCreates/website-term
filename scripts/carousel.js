const profilesCarousel = document.getElementById('profilesCarousel');
let currentIndex = 0;

function showProfile(index) {
    const profiles = document.querySelectorAll('.profile-item');
    profiles.forEach((profile, i) => {
        profile.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextProfile() {
    currentIndex = (currentIndex + 1) % profilesCarousel.children.length;
    showProfile(currentIndex);
}

setInterval(nextProfile, 3000); // Change profile every 3 seconds
showProfile(currentIndex);
