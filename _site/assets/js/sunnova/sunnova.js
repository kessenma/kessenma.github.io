document.addEventListener('DOMContentLoaded', function () {
    const expandableContentRow = document.querySelector('.expandable-content-row');

    document.querySelectorAll('.small-box').forEach(function(box) {
        // Event for both click and hover
        function handleBoxInteraction() {
            // Populate the expandable content row with the detail content
            const detailContent = box.querySelector('.detail-content').innerHTML;
            expandableContentRow.innerHTML = detailContent;
        }

        // Click event for mobile and desktop
        box.addEventListener('click', function(event) {
            handleBoxInteraction();
            // Toggle expanded class for background change
            box.classList.add('expanded');
        });

        // Hover event for desktop
        box.addEventListener('mouseenter', function(event) {
            if (window.matchMedia("(hover: hover)").matches) {
                handleBoxInteraction();
            }
        });

        // Remove the background color when mouse leaves the box
        box.addEventListener('mouseleave', function(event) {
            if (window.matchMedia("(hover: hover)").matches) {
                box.classList.remove('expanded');
            }
        });
    });
});




$(document).ready(function() {
    // Menu and other jQuery-related setup code...

    // Combine both scroll functionalities into one
    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        var windowHeight = $(document).height() - $(window).height();
        var percentScrolled = (scrollPos / windowHeight) * 100;

        // Apply parallax effects
        $('.sun').css('transform', 'translateY(' + scrollPos/3 + 'px)');
        $('#phoneSvg').parent().css('transform', 'translateY(' + (-scrollPos/3) + 'px)');
        $('#DealershipSVG').parent().css('transform', 'translateY(' + scrollPos/4 + 'px)');
        $('#bentoDescription').parent().css('transform', 'translateY(' + scrollPos/4 + 'px)');

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



