$(document).ready(function() {
    let galleryContainer = $('.architecture-gallery-container');
    let itemWidth = galleryContainer.children().first().width();
    let maxScroll = galleryContainer[0].scrollWidth - galleryContainer.width();

    function checkButtons() {
        let currentScroll = galleryContainer.scrollLeft();
        let $scrollButtonLeft = $('.scroll-button-left');
        let $scrollButtonRight = $('.scroll-button-right');

        if (currentScroll <= 0) {
            $scrollButtonLeft.prop('disabled', true).addClass('inactive').removeClass('active');
        } else {
            $scrollButtonLeft.prop('disabled', false).addClass('active').removeClass('inactive');
        }

        if (currentScroll >= maxScroll - 1) { // "- 1" to fix any floating point inaccuracies
            $scrollButtonRight.prop('disabled', true).addClass('inactive').removeClass('active');
        } else {
            $scrollButtonRight.prop('disabled', false).addClass('active').removeClass('inactive');
        }
    }

    galleryContainer.on('scroll', checkButtons); // Check when manually scrolled
    $(window).on('resize', function() { // Update maxScroll when window is resized
        maxScroll = galleryContainer[0].scrollWidth - galleryContainer.width();
        checkButtons(); // And check the buttons afterward
    });
    checkButtons();  // Check on initial load

    $('.scroll-button-left').click(function() {
        if (!$(this).prop('disabled')) {
            galleryContainer.animate({
                scrollLeft: "-=" + itemWidth + "px"
            }, 200, function() {
                checkButtons();
            });
        }
    });

    $('.scroll-button-right').click(function() {
        if (!$(this).prop('disabled')) {
            galleryContainer.animate({
                scrollLeft: "+=" + itemWidth + "px"
            }, 200, function() {
                checkButtons();
            });
        }
    });
});
