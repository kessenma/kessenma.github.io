

// https://github.com/tsuyoshiwada/sweet-scroll/blob/master/README.md#1-install
// document.addEventListener(
//   'DOMContentLoaded',
//   () => {
//     const scroller = new SweetScroll({
//       /* some options */
//     });
//   },
//   false,
// );

document.addEventListener("DOMContentLoaded",function(){new SweetScroll({});particlesJS("particles-js",{
  "particles": {
    "number": {
      "value": 10,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#83c558"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4489540273080296,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 28.05962670675185,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.60340724038582,
      "direction": "bottom",
      "random": false,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 400.851810096455,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 0,
        "line_linked": {
          "opacity": 0
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 1.118881118881119,
        "opacity": 0.3516483516483517,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
})},!1);


jQuery(document).ready(function($){
  var overlayNav = $('.cd-overlay-nav'),
    overlayContent = $('.cd-overlay-content'),
    navigation = $('.cd-primary-nav'),
    toggleNav = $('.cd-nav-trigger');

  //inizialize navigation and content layers
  layerInit();
  $(window).on('resize', function(){
    window.requestAnimationFrame(layerInit);
  });

  //open/close the menu and cover layers
  toggleNav.on('click', function(){
    if(!toggleNav.hasClass('close-nav')) {
      //it means navigation is not visible yet - open it and animate navigation layer
      toggleNav.addClass('close-nav');
      
      overlayNav.children('span').velocity({
        translateZ: 0,
        scaleX: 1,
        scaleY: 1,
      }, 500, 'easeInCubic', function(){
        navigation.addClass('fade-in');
      });
    } else {
      //navigation is open - close it and remove navigation layer
      toggleNav.removeClass('close-nav');
      
      overlayContent.children('span').velocity({
        translateZ: 0,
        scaleX: 1,
        scaleY: 1,
      }, 500, 'easeInCubic', function(){
        navigation.removeClass('fade-in');
        
        overlayNav.children('span').velocity({
          translateZ: 0,
          scaleX: 0,
          scaleY: 0,
        }, 0);
        
        overlayContent.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          overlayContent.children('span').velocity({
            translateZ: 0,
            scaleX: 0,
            scaleY: 0,
          }, 0, function(){overlayContent.removeClass('is-hidden')});
        });
        if($('html').hasClass('no-csstransitions')) {
          overlayContent.children('span').velocity({
            translateZ: 0,
            scaleX: 0,
            scaleY: 0,
          }, 0, function(){overlayContent.removeClass('is-hidden')});
        }
      });
    }
  });

  function layerInit(){
    var diameterValue = (Math.sqrt( Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2))*2);
    overlayNav.children('span').velocity({
      scaleX: 0,
      scaleY: 0,
      translateZ: 0,
    }, 50).velocity({
      height : diameterValue+'px',
      width : diameterValue+'px',
      top : -(diameterValue/2)+'px',
      left : -(diameterValue/2)+'px',
    }, 0);

    overlayContent.children('span').velocity({
      scaleX: 0,
      scaleY: 0,
      translateZ: 0,
    }, 50).velocity({
      height : diameterValue+'px',
      width : diameterValue+'px',
      top : -(diameterValue/2)+'px',
      left : -(diameterValue/2)+'px',
    }, 0);
  }
});