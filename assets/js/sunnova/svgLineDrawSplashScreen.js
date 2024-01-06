document.addEventListener('DOMContentLoaded', function() {
    var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    var phoneSvg = document.getElementById('phoneSvg');
    var dealershipSvg = document.getElementById('DealershipSVG');

    observer.observe(phoneSvg);
    observer.observe(dealershipSvg);
});

function hideInitialOverlay() {
    const overlay = document.getElementById('initial-overlay');
    if (overlay.style.display !== "none") {
        overlay.style.transition = 'opacity 2s ease-out';
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 2000); // This should match the transition duration
    }
}

function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.visibility = "visible"; // Make the SVG visible
            hideInitialOverlay();
            initSVGAnimation(entry.target);
            observer.unobserve(entry.target);
        }
    });
}

function initSVGAnimation(imgElement) {
    imgElement.style.visibility = 'visible'; // Ensure the container is visible

    fetch(imgElement.src)
        .then(response => response.text())
        .then(svgData => {
            var tempDiv = document.createElement("div");
            tempDiv.innerHTML = svgData;
            var svg = tempDiv.querySelector("svg");

            // Prepare the animation for each path but do not start it yet
            var paths = svg.querySelectorAll('.path');
            paths.forEach(path => {
                var length = path.getTotalLength();
                path.style.strokeDasharray = length;
                path.style.strokeDashoffset = length;
                // Initially set visibility to hidden
                path.style.visibility = 'hidden';
            });

            // Insert the SVG and hide the original image
            imgElement.parentNode.insertBefore(svg, imgElement);
            imgElement.style.display = 'none';

            // Make paths visible and start the animation
            paths.forEach(path => {
                // Set a slight delay to ensure the SVG is rendered before animation
                setTimeout(() => {
                    path.style.visibility = 'visible';
                    path.style.animation = 'dash 10s linear forwards';
                }, 50);
            });
        })
        .catch(error => console.error('Error loading SVG:', error));
}

