const profilesGrid = document.getElementById('profilesGrid');
let currentIndex = 0;

function showProfile(index) {
    const profiles = document.querySelectorAll('.profile-item');
    profiles.forEach((profile, i) => {
        profile.style.display = i === index ? 'block' : 'none';
    });
}

function nextProfile() {
    currentIndex = (currentIndex + 1) % profilesGrid.children.length;
    showProfile(currentIndex);
}

function prevProfile() {
    currentIndex = (currentIndex - 1 + profilesGrid.children.length) % profilesGrid.children.length;
    showProfile(currentIndex);
}

setInterval(nextProfile, 3000); // Change profile every 3 seconds
showProfile(currentIndex);
