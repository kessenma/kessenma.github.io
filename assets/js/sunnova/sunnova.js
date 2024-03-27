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


// Function to check if an element is in the viewport
function isInViewport(el, threshold = 0) {
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
        rect.top >= (0 - threshold) &&
        rect.left >= 0 &&
        rect.bottom <= (viewportHeight + threshold) && // Add threshold to bottom check
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

    $(window).scroll(throttle(function() {
        let scrollPos = $(this).scrollTop();
        let windowHeight = $(document).height() - $(window).height();
        let percentScrolled = (scrollPos / windowHeight) * 100;

        const sunIsVisible = isInViewport($('.sun')[0]);
        const phoneSvgIsVisible = isInViewport($('.phone-svg-container')[0]);
        const dealershipSvgIsVisible = isInViewport($('.dealership-svg-container')[0]);
        const doeCircleSvgIsVisible = isInViewport($('.DOE-section-container')[0]);
        const bentoBoxIsVisible = isInViewport($('.bento-box')[0]);
        const desertBackgroundIsVisible = isInViewport($('.desert-background')[0]);
        // console.log('Phone SVG visible:', phoneSvgIsVisible, 'Sun visible:', sunIsVisible,  'Dealership SVG visible:', dealershipSvgIsVisible);

        if (sunIsVisible) {
            $('.sun').css('transform', 'translateY(' + scrollPos/3 + 'px)');
        }
        if (phoneSvgIsVisible) {
            $('#phoneSvg').parent().css('transform', 'translateY(' + (-scrollPos/3) + 'px)');
        }
        if (dealershipSvgIsVisible) {
            $('#dealershipSvg').parent().css('transform', 'translateY(' + scrollPos/3 + 'px)');
        }

        if (doeCircleSvgIsVisible || bentoBoxIsVisible || desertBackgroundIsVisible) {
            $('#doeCircle').css('transform', 'translateY(' + scrollPos/4 + 'px)');
        }

        // $('#doeCircle').css('transform', 'translateY(' + scrollPos/4 + 'px)');

        // Update the progress bar width
        $('.scroll-progress-bar').css('width', percentScrolled + '%');

        // Show or hide the menu button based on scroll position
        if (scrollPos > $(window).height()) {
            $(".menu-button").fadeIn();
        } else {
            $(".menu-button").fadeOut();
        }
    }, 50)); // 100ms throttle limit
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
    ///
    /// floating-background floating-svg
    ///
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

// This function should now handle applying styles and animations to the SVGs
    function applyStylesAndAnimationsToSVGs() {
        const svgs = document.querySelectorAll('.floating-svg');
        svgs.forEach((svg, index) => {
            const scale = Math.random() * 2 - 0.4;
            const left = Math.random() * 120 - 20;
            const animationDuration = 6 + Math.random() * 15;
            const animationDelay = Math.random() * 5 - 5;
            const rotate = (Math.random() * 75) - 45;
            const rotateZ = (Math.random() * 60) - 30; // Random rotation between -30 and 30 degrees
            const blurAmount = Math.max(0, index - 16); // Ensuring a minimum blur value of 0

            svg.style.filter = `blur(${blurAmount}px)`;
            svg.style.left = `${left}%`;
            svg.style.animation = `raise  ${animationDuration}s linear infinite ${animationDelay}s`;
            svg.style.transform = `scale(${scale}) rotateZ(${rotateZ}deg)`;
            svg.style.zIndex = index - 7;
            svg.style.filter = `blur(${index - 6}px)`;
        });
    }

    adjustFloatingSVGs();

    const keyframes = `
    @keyframes raise {
      to {
        bottom: 50vh;
        transform: scale(var(--scale)) rotate(var(--rotate)deg);
      }
    }`;

    const styleSheet = document.createElement('style');
    styleSheet.id = 'dynamic-raise-keyframes'; // Prevent multiple additions
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
});



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

    // Now you can call this with any selector
    applyTypewriterEffect('#typewriter h1', 150);
    applyTypewriterEffect('.commissioning-package-header h2', 150); // Use the correct selector for your second header
    applyTypewriterEffectById('architecture-title', 150);
});


