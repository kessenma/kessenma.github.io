$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();

    // Apply parallax effect to the sun
    $('.sun').css('transform', 'translateY(' + scrollPos/3 + 'px)');

    // Apply parallax effect to the SVGs
    $('#phoneSvg').parent().css('transform', 'translateY(' + (-scrollPos/3) + 'px)');
    $('#DealershipSVG').parent().css('transform', 'translateY(' + scrollPos/4 + 'px)');
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

    // Check if the user scrolls past the fold
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height()) {
            $(".menu-button").fadeIn(); // Use fadeIn for a smoother appearance
        } else {
            $(".menu-button").fadeOut(); // Use fadeOut for a smoother disappearance
        }
    });
});

window.addEventListener('scroll', function() {
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    var percentScrolled = (scrollPos / windowHeight) * 100;
    document.querySelector('.scroll-progress-bar').style.width = percentScrolled + '%';
});


