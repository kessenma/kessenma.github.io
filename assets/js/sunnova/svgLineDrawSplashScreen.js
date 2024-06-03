document.addEventListener('DOMContentLoaded', function() {
    var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    var phoneSvg = document.getElementById('phoneSvg');
    var dealershipSvg = document.getElementById('dealershipSvg');
    var desertPanelSvg = document.getElementById('desertPanelSvg');
    var roofPitch = document.getElementById('roofPitchSvg');
    var powerLine = document.getElementById('powerLineSvg');
    var rafters = document.getElementById('raftersSvg');
    var subPanel = document.getElementById('subPanelSvg');
    var computerReview = document.getElementById('computerReviewSvg');
    var dealerOnPhone = document.getElementById('DealerOnPhoneSvg');

    observer.observe(phoneSvg);
    observer.observe(dealershipSvg);
    observer.observe(desertPanelSvg);
    observer.observe(roofPitch);
    observer.observe(powerLine);
    observer.observe(rafters);
    observer.observe(subPanel);
    observer.observe(computerReview);
    observer.observe(dealerOnPhone);
});

function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            setTimeout(function() {
                entry.target.classList.remove('hidden-svg'); // Make the SVG visible after 0.5 seconds
                initSVGAnimation(entry.target);
            }, 500); // 500 milliseconds = 0.5 seconds
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

            setTimeout(() => {
                paths.forEach(path => {
                    path.getBoundingClientRect(); // Trigger reflow
                    path.style.visibility = 'visible';
                    path.style.animation = 'dash 10s linear forwards';
                });
            }, 0); // Ensure animation starts immediately after SVG is inserted
        })
        .catch(error => console.error('Error loading SVG:', error));
}