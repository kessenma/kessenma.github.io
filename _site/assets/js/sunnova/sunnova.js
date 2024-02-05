$(document).ready(function() {
    // Menu and other jQuery-related setup code...

    // Get the initial top offset of the SVG relative to the window
    var initialSvgTop = $('#svgObject').offset().top - $(window).scrollTop();

    // Combine both scroll functionalities into one
    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        var windowHeight = $(document).height() - $(window).height();

        // Calculate the percentage of the page scrolled
        var percentScrolled = (scrollPos / windowHeight) * 100;

        // Apply parallax effects
        $('.sun').css('transform', 'translateY(' + scrollPos/3 + 'px)');
        $('#phoneSvg').parent().css('transform', 'translateY(' + (-scrollPos/3) + 'px)');
        $('#dealershipSVG').parent().css('transform', 'translateY(' + scrollPos/4 + 'px)');

        // Adjust the movement of #svgObject to be more subtle and remain closer to doe-circle-container
        var svgTranslationDown = (scrollPos + initialSvgTop) / 14; // Larger division factor for a subtle effect
        var svgTranslationUp = (-scrollPos + initialSvgTop) / 14; // Larger division factor for a subtle effect
        $('#svgObject1').css('transform', 'translateY(' + svgTranslationDown + 'px)');
        // $('#siteSurvey1').css('transform', 'translateY(' + svgTranslationDown + 'px)');
        // $('#siteSurvey2').css('transform', 'translateY(' + svgTranslationUp + 'px)');
        // $('#siteSurvey3').css('transform', 'translateY(' + svgTranslationDown + 'px)');
        // $('#siteSurvey4').css('transform', 'translateY(' + svgTranslationUp + 'px)');
        // $('#particles-js').css('transform', 'translateY(' + svgTranslationDown + 'px)');

        // Update the progress bar width
        $('.scroll-progress-bar').css('width', percentScrolled + '%');

        // Show or hide the menu button based on scroll position
        if (scrollPos > $(window).height()) {
            $(".menu-button").fadeIn();
        } else {
            $(".menu-button").fadeOut();
        }
    });
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
    applyTypewriterEffect('#typewriter h2', 150);
    applyTypewriterEffect('.commissioning-package h2', 150); // Use the correct selector for your second header
    applyTypewriterEffectById('architecture-title', 150);
});


