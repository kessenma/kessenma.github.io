document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document is fully loaded');
    console.log('SVG.js available:', SVG && typeof SVG === 'function');

    particlesJS.load('particles-js', 'assets/js/sunnova/sunnova_particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    var svgObject = document.getElementById('svgObject');
    if (!svgObject) {
        console.error('SVG object not found');
        return;
    } else {
        console.log('SVG object found');
    }
});

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


