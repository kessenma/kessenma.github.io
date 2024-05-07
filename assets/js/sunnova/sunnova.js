function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return (...args) => { // Use rest parameters instead of arguments
        if (!lastRan) {
            func(...args); // Call function with spread syntax
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func(...args); // Call function with spread syntax
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function handleScroll() {
    //handle menu and progress bar with scroll progress
    const $progressBar = $('.scroll-progress-bar');
    const $menuButton = $(".menu-button");

    // Cache viewport size
    let viewportHeight = $(window).height();
    let documentHeight = $(document).height();

    $progressBar.css('width', percentScrolled + '%');

    if (scrollPos > viewportHeight) {
        $menuButton.fadeIn();
    } else {
        $menuButton.fadeOut();
    }

}

function handleScroll () {
    /// pseudo code:
    // for both mobile and desktop get the progress bar and menu to work
}


// function isMobileDevice() {
//     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// }
//
// if (!isMobileDevice()) {
    const $sun = $('.sun');
    const $phoneSvg = $('#phoneSvg');
    const $dealershipSvg = $('#dealershipSvg');
    const $bentoBox = $('.bento-box');
    // const $doeCircle = $('#doeCircle');
    const $desertBackground = $('.desert-background');
    const $progressBar = $('.scroll-progress-bar');
    const $aboutSun = $('#aboutSun');
    const $menuButton = $(".menu-button");

    // Cache viewport size
    let viewportHeight = $(window).height();
    let documentHeight = $(document).height();

    function handleMobileScroll() {
        let scrollPos = $(this).scrollTop();
        let windowHeight = documentHeight - viewportHeight;
        let percentScrolled = (scrollPos / windowHeight) * 100;

        const sunIsVisible = isInViewport($sun[0]);
        const aboutSunIsVisible = isInViewport($aboutSun[0]);
        const phoneSvgIsVisible = isInViewport($phoneSvg[0]);
        const dealershipSvgIsVisible = isInViewport($dealershipSvg[0]);
        // const doeCircleSvgIsVisible = isInViewport(($doeCircle)[0]);
        const bentoBoxIsVisible = isInViewport(($bentoBox)[0]);
        const desertBackgroundIsVisible = isInViewport(($desertBackground)[0]);
        // console.log('Phone SVG visible:', phoneSvgIsVisible, 'Sun visible:', sunIsVisible,  'Dealership SVG visible:', dealershipSvgIsVisible);

        if (window.matchMedia("(min-width: 1024px)").matches) {
            if (sunIsVisible) {
                $('.sun').css('transform', 'translateY(' + scrollPos / 4 + 'px)');
            }
            if (phoneSvgIsVisible) {
                $('#phoneSvg').parent().css('transform', 'translateY(' + (-scrollPos / 3) + 'px)');
            }
            if (dealershipSvgIsVisible) {
                $('#dealershipSvg').parent().css('transform', 'translateY(' + scrollPos / 3 + 'px)');
            }
            // if (doeCircleSvgIsVisible || bentoBoxIsVisible || desertBackgroundIsVisible) {
            //     $('#doeCircle').css('transform', 'translateY(' + scrollPos / 4 + 'px)');
            // }
            if (aboutSunIsVisible) {
                $('#aboutSun').css('transform', 'translateY(' + scrollPos / 5 + 'px)');
            }
        }
        // $('#doeCircle').css('transform', 'translateY(' + scrollPos/4 + 'px)');

        $progressBar.css('width', percentScrolled + '%');

        if (scrollPos > viewportHeight) {
            $menuButton.fadeIn();
        } else {
            $menuButton.fadeOut();
        }
    }
// }

// Attach the debounced scroll handler
$(window).scroll(debounce(handleMobileScroll, 0));
// $(window).scroll(debounce(handleScroll, 0));

// Resize event handler to update cached sizes
$(window).resize(debounce(function() {
    viewportHeight = $(window).height();
    documentHeight = $(document).height();
}, 0));

function isInViewport(el, threshold = 0) {
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
        rect.top >= (0 - threshold) &&
        rect.left >= 0 &&
        rect.bottom <= (viewportHeight + threshold) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.visibility = "visible"; // Make the SVG visible
            entry.target.classList.add('is-visible'); // Indicate that the element is ready
            hideInitialOverlay();
            initSVGAnimation(entry.target);
            observer.unobserve(entry.target);
        }
    });
}

$(document).ready(function() {
    // Get the initial top offset of the SVG relative to the window
    var initialSvgTop = $('#dealershipSvg').offset().top - $(window).scrollTop();
});






// ########### MENU BAR
// ####################
$(document).ready(function() {
    // Initially hide the menu items
    $(".menu-items").hide();

    // Show or hide the menu when the button is clicked
    $(".menu-button").click(function() {
        $(".menu-items").toggle();
    });

    // Clicking outside the menu collapses it
    $(document).click(function(event) {
        // Check if clicking the menu or the button
        if (!$(event.target).closest('.menu-container').length) {
            $(".menu-items").hide();
        }
    });
});

// bento-box
document.addEventListener('DOMContentLoaded', function () {
    const topExpandableContentRow = document.querySelector('.expandable-content-container.top .expandable-content-row-top');
    const bottomExpandableContentRow = document.querySelector('.expandable-content-container.bottom .expandable-content-row-bottom');

    function handleBoxInteraction() {
        const detailContent = this.querySelector('.detail-content').innerHTML;
        // Decide whether to use the top or bottom expandable content row based on the clicked box
        if (this.classList.contains('expand-up')) {
            topExpandableContentRow.innerHTML = detailContent;
            topExpandableContentRow.classList.add('active'); // Make sure this class is used to show the content
        } else if (this.classList.contains('expand-down')) {
            bottomExpandableContentRow.innerHTML = detailContent;
            bottomExpandableContentRow.classList.add('active'); // Make sure this class is used to show the content
        }
    }

    document.querySelectorAll('.small-box').forEach(function(box) {
        box.addEventListener('click', handleBoxInteraction);
    });

    /////////////////////////////////////
    /// floating-background floating-svg
    /////////////////////////////////////

    //randomization for svg's
    function adjustFloatingSVGs() {
        const container = document.querySelector('.floating-backgound');
        container.innerHTML = ''; // Clear existing SVGs
        const svgSources = [
            'assets/img/sunnova/checking-account.svg',
            'assets/img/sunnova/check-user.svg'
        ];
        const desiredCount = Math.floor(Math.random() * 9) + 2; // Random number between 2 and 10

        for (let i = 0; i < desiredCount; i++) {
            const imgElement = document.createElement('img');
            imgElement.src = svgSources[Math.floor(Math.random() * svgSources.length)];
            // Randomly select SVG source
            imgElement.classList.add('floating-svg');
            container.appendChild(imgElement);
        }
// Apply styles and animations to new SVGs
        applyStylesAndAnimationsToSVGs();
    }

// handle applying styles and animations to the SVGs in the handshake container
    function applyStylesAndAnimationsToSVGs() {
        const svgs = document.querySelectorAll('.floating-svg');
        const container = document.querySelector('.handshake-container');
        const containerRect = container.getBoundingClientRect();

        svgs.forEach((svg, index) => {
            const scale = Math.random() * 2 - 0.4;
            const left = Math.random() * (containerRect.width - svg.offsetWidth);
            const animationDuration = 4 + Math.random() * 6;
            const animationDelay = Math.random() * 5 - 3.5;
            // const rotate = (Math.random() * 75) - 45;
            const rotateZ = (Math.random() * 120) - 60; // Random rotation between +/- 60 degrees
            const blurAmount = Math.max(0, index - 3); // Ensuring a minimum blur value of 4
            const zIndex = Math.floor(Math.random() * 6) + 1;

            svg.style.position = 'absolute';
            svg.style.bottom = '0'; // Start at the bottom of the container
            svg.style.left = `${left}px`;
            svg.style.transform = `scale(${scale}) rotateZ(${rotateZ}deg)`;
            // svg.style.transform = `scale(${scale})`;
            svg.style.filter = `blur(${blurAmount}px)`;
            svg.style.zIndex = zIndex; // Set the randomized z-index
            svg.style.animation = `raise ${animationDuration}s linear infinite ${animationDelay}s`;
        });
    }


    function adjustKeyframesForContainer() {
        const container = document.querySelector('.handshake-container');
        const containerHeight = container.offsetHeight; // Get the container's height

        // Calculate the target bottom position based on container height or another logic
        const targetBottom = containerHeight * 0.8; // Example: target 80% of container's height

        // Create keyframes with dynamic values
        const keyframes = `
        @keyframes raise {
          0% {
            bottom: 0;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            bottom: ${targetBottom}px;
            opacity: 0;
          }
        }`;

        // Check if the style tag for keyframes already exists, if so, replace it
        let styleSheet = document.getElementById('dynamic-raise-keyframes');
        if (styleSheet) {
            styleSheet.innerText = keyframes;
        } else {
            styleSheet = document.createElement('style');
            styleSheet.id = 'dynamic-raise-keyframes';
            styleSheet.innerText = keyframes;
            document.head.appendChild(styleSheet);
        }
    }

    window.addEventListener('resize', throttle(() => {
        adjustKeyframesForContainer();
    }, 1000));

    adjustFloatingSVGs();
    adjustKeyframesForContainer();
    observeSVGs();


});

// Control SVG Animation Based on Visibility
function observeSVGs() {
    const svgElements = document.querySelectorAll('.floating-svg'); // Your selector for SVGs
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
        });
    }, { threshold: 0.1 });

    svgElements.forEach(svg => {
        observer.observe(svg);
    });
}



// typewriter
document.addEventListener("DOMContentLoaded", function() {
    function typeWriter(element, message, index, interval, observer) {
        if (index < message.length) {
            element.textContent += message.charAt(index);
            index++;
            setTimeout(function() {
                typeWriter(element, message, index, interval, observer);
            }, interval);
        } else if (observer) {
            observer.unobserve(element); // Stop observing after the animation ends
        }
    }

    function applyTypewriterEffect(selector, interval) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(element => {
            const message = element.getAttribute('data-text') || element.textContent;
            element.textContent = ''; // Clear the content

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.hasAttribute('data-typing-started')) {
                        entry.target.setAttribute('data-typing-started', 'true'); // Set a flag to indicate typing has started
                        typeWriter(entry.target, message, 0, interval, observer);
                    }
                });
            }, { threshold: 1 });

            observer.observe(element);
        });
    }

    function applyTypewriterEffectById(id, interval) {
        const element = document.getElementById(id);
        if (!element) return; // Exit if the element doesn't exist

        const message = element.getAttribute('data-text') || element.textContent;
        element.textContent = ''; // Clear the content

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.hasAttribute('data-typing-started')) {
                    entry.target.setAttribute('data-typing-started', 'true'); // Set a flag to indicate typing has started
                    typeWriter(entry.target, message, 0, interval, observer);
                }
            });
        }, { threshold: 1 });

        observer.observe(element);
    }

    // Check if the device is desktop
    if (window.matchMedia("(min-width: 1024px)").matches) {
        // Make the .floating-backgound div visible
        const floatingBackground = document.querySelector('.floating-backgound');
        if (floatingBackground) {
            floatingBackground.style.display = 'block';
        }

        // Proceed to adjust SVGs as previously
        adjustFloatingSVGs();
        adjustKeyframesForContainer();
        observeSVGs();

        window.addEventListener('resize', throttle(() => {
            adjustKeyframesForContainer();
        }, 1000));
    }

    // Now you can call this with any selector
    applyTypewriterEffect('#typewriter h1', 150);
    applyTypewriterEffect('.commissioning-package-header h2', 150); // Use the correct selector for your second header
    applyTypewriterEffectById('architecture-title', 150);
});


