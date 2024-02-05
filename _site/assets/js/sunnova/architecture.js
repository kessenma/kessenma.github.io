// $(document).ready(function() {
//     let galleryContainer = $('.architecture-gallery-container');
//     let $scrollButtonLeft = $('.scroll-button-left');
//     let $scrollButtonRight = $('.scroll-button-right');
//
//     function calculateDimensions() {
//         // Calculate the width of a single item
//         itemWidth = galleryContainer.children('.architecture-gallery-item').first().outerWidth(true);
//         // Calculate the maximum scroll distance
//         maxScroll = galleryContainer[0].scrollWidth - galleryContainer.width();
//         checkButtons();
//     }
//     $(window).on('load', function() {
//         calculateDimensions();
//         console.log('dimenstions:', calculateDimensions());
//     });
//
//     function checkButtons() {
//         let currentScroll = galleryContainer.scrollLeft();
//
//         $scrollButtonLeft.prop('disabled', currentScroll <= 0);
//         $scrollButtonRight.prop('disabled', currentScroll >= maxScroll);
//     }
//
//     galleryContainer.on('scroll', checkButtons);
//     $(window).on('resize', calculateDimensions);
//     calculateDimensions(); // Call this function on initial load as well
//
//     $scrollButtonLeft.click(function() {
//         console.log('Left button clicked');
//         console.log('Current itemWidth:', itemWidth);
//         galleryContainer.animate({
//             scrollLeft: '-=' + itemWidth
//         }, 200, checkButtons);
//     });
//
//     $scrollButtonRight.click(function() {
//         console.log('Right button clicked');
//         console.log('Current itemWidth:', itemWidth);
//         galleryContainer.animate({
//             scrollLeft: '+=' + itemWidth
//         }, 200, checkButtons);
//     });
// });
//

$(document).ready(function() {
    let currentIndex = 0;
    let images = $('.architecture-gallery-item img').toArray();
    updateImageViewer();

    $('#prevButton').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImageViewer();
        }
    });

    $('#nextButton').click(function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImageViewer();
        }
    });

    function updateImageViewer() {
        $('#imagesContainer img').removeClass('active');
        $(images[currentIndex]).addClass('active');
        // Optional: Update button states
        $('#prevButton').prop('disabled', currentIndex === 0);
        $('#nextButton').prop('disabled', currentIndex === images.length - 1);
    }
});
