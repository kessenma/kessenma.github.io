
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js2', 'assets/js/particlesjs2-config.json', function() {
  console.log('callback - particles.js2 config loaded');
  let el = document.querySelector(".particles-js-canvas-el"); 
  el.setAttribute("height", "250rem");
});


// document.addEventListener("DOMContentLoaded",function(){new SweetScroll({});particlesJS("particles-js2",{
//   {
//     "particles": {
//       "number": {
//         "value": 33,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "image",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "https://img.icons8.com/ios-filled/344/down--v1.png",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 47.34960581453156,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": false,
//         "distance": 150,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 3.279575622914392,
//         "direction": "bottom",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   }
// })},!1);