
// Before and After Divider 
(function($) {
  $(function() {
    $('.code-wrapper').on("mousemove touchmove", function(e) {
      var offsets = $(this).offset();
      var fullWidth = $(this).width();
      var mouseX = e.pageX - offsets.left;
      var currentX = e.originalEvent.touches ?  e.originalEvent.touches[0].pageX : e.pageX - offsets.left;
      if (currentX < 0) {
        currentX = 0;
      } else if (currentX > fullWidth) {
        currentX = fullWidth
      }
      $(this).parent().find('.divider-bar').css({
        left: currentX,
        transition: 'none'
      });
      $(this).find('.design-wrapper').css({
        transform: 'translateX(' + (currentX) + 'px)',
        transition: 'none'
      });
      $(this).find('.design-image').css({
        transform: 'translateX(' + (-1 * currentX) + 'px)',
        transition: 'none'
      });
    });
    $('.divider-wrapper').on("mouseleave", function() {
      $(this).parent().find('.divider-bar').css({
        left: '50%',
        transition: 'all .3s'
      });
      $(this).find('.design-wrapper').css({
        transform: 'translateX(50%)',
        transition: 'all .3s'
      });
      $(this).find('.design-image').css({
        transform: 'translateX(-50%)',
        transition: 'all .3s'
      });
    });
    // Divider buttons
    $('.divider-before').click(function() {
      $('.design-wrapper').css({
        transform: 'translateX(100%)',
        transition: 'all .3s'
      });
      $('.divider-bar').css({
        left: '99.7%',
        transition: 'all .3s'
      });
    });
    $('.divider-after').click(function() {
      $('.design-image').css({
        transform: 'translateX(0%)',
        transition: 'all .3s'
      });
      $('.design-wrapper').css({
        transform: 'translateX(0%)',
        transition: 'all .3s'
      });
      $('.divider-bar').css({
        left: '0%',
        transition: 'all .3s'
      });
    });
    // clicking out of buttons to reset
    $(document).mouseup(function(e) {
      var dividerBefore = $(".divider-before");
      var dividerAfter = $(".divider-after");
      if (!dividerBefore.is(e.target) // if the target of the click isn't the dividerBefore...
        && dividerBefore.has(e.target).length === 0) // ... nor a descendant of the dividerBefore
      {
        $(this).find('.divider-bar').css({
          left: '50%',
          transition: 'all .3s'
        });
        $(this).find('.design-wrapper').css({
          transform: 'translateX(50%)',
          transition: 'all .3s'
        });
        $(this).find('.design-image').css({
          transform: 'translateX(-50%)',
          transition: 'all .3s'
        });
      } else if (!dividerAfter.is(e.target) // if the target of the click isn't the dividerAfter...
        && dividerAfter.has(e.target).length === 0) // ... nor a descendant of the dividerAfter
      {
        $(this).find('.divider-bar').css({
          left: '50%',
          transition: 'all .3s'
        });
        $(this).find('.design-wrapper').css({
          transform: 'translateX(50%)',
          transition: 'all .3s'
        });
        $(this).find('.design-image').css({
          transform: 'translateX(-50%)',
          transition: 'all .3s'
        });
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space



















