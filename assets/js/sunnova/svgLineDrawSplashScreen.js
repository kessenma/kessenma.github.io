document.addEventListener('DOMContentLoaded', function() {
    var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    var phoneSvg = document.getElementById('phoneSvg');
    var dealershipSvg = document.getElementById('dealershipSvg');
    var desertPanelSvg = document.getElementById('desertPanelSvg');
    var roofPitch = document.getElementById('roofPitchSvg');
    var powerLine = document.getElementById('powerLineSvg');
    var rafters = document.getElementById('raftersSvg');
    var subPanel = document.getElementById('subPanelSvg');

    observer.observe(phoneSvg);
    observer.observe(dealershipSvg);
    observer.observe(desertPanelSvg);
    observer.observe(roofPitch);
    observer.observe(powerLine);
    observer.observe(rafters);
    observer.observe(subPanel);
});

// function hideInitialOverlay() {
//     const overlay = document.getElementById('initial-overlay');
//     if (overlay.style.display !== "none") {
//         overlay.style.transition = 'opacity 2s ease-out';
//         overlay.style.opacity = '0';
//         setTimeout(() => {
//             overlay.style.display = 'none';
//         }, 2000); // This should match the transition duration
//     }
// }

function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.visibility = "visible"; // Make the SVG visible
            // hideInitialOverlay();
            initSVGAnimation(entry.target);
            observer.unobserve(entry.target);
        }
    });
}

function initSVGAnimation(imgElement) {
    fetch(imgElement.src)
        .then(response => response.text())
        .then(svgData => {
            var tempDiv = document.createElement("div");
            tempDiv.innerHTML = svgData;
            var svg = tempDiv.querySelector("svg");
            var paths = svg.querySelectorAll('.path');

            paths.forEach(path => {
                var length = path.getTotalLength();
                path.style.strokeDasharray = length;
                path.style.strokeDashoffset = length;
                path.style.visibility = 'hidden';
            });

            imgElement.parentNode.insertBefore(svg, imgElement);
            imgElement.style.display = 'none';

            requestAnimationFrame(() => {
                paths.forEach(path => {
                    path.getBoundingClientRect(); // Trigger reflow
                    path.style.visibility = 'visible';
                    path.style.animation = 'dash 10s linear forwards';
                });
            });
        })
        .catch(error => console.error('Error loading SVG:', error));
}



