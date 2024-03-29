let lastScrollTop = 0; // Variable to hold the last position
let rotationDegrees = 0; // Start at 0 degrees

document.addEventListener('scroll', function() {
    var scrollAmount = window.pageYOffset || document.documentElement.scrollTop;
    var delta = scrollAmount - lastScrollTop;

    // Add to rotationDegrees if scrolling down, subtract if scrolling up
    rotationDegrees += delta;

    // Update lastScrollTop to the new position
    lastScrollTop = scrollAmount;

    // Rotate the arrow image
    var arrow = document.getElementById('moving-arrow');
    arrow.style.transform = `rotate(${rotationDegrees}deg)`;
});





