// // Import THREE and GLTFLoader as modules
// import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.module.js';
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r121/examples/jsm/loaders/GLTFLoader.js';
//
// // Select the canvas element from your HTML
// const canvas = document.getElementById('threejs-canvas');
//
// let observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Canvas is fully visible
//             startAnimation();
//         }
//     });
// }, { threshold: 1.0 }); // 1.0 means 100% of the target is visible
//
// observer.observe(canvas);
//
// // Initialize the WebGL renderer and attach it to the canvas
// const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
// renderer.setPixelRatio(window.devicePixelRatio);
//
// // Add a camera to the scene
// // Initialize with a narrower field of view to "zoom in" more
// const fov = 50; // Smaller FOV = more zoom
// const aspect = canvas.clientWidth / canvas.clientHeight; // Aspect ratio of the canvas
// const near = 0.1; // Near clipping plane
// const far = 1000; // Far clipping plane
// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//
//
// let elapsedTime = 0;
// const animationDuration = 100 / 24; // Replace 30 with your actual FPS
// let lastTime = 0;
//
// function animate(time) {
//     const delta = time - lastTime; // Calculate the time difference between frames
//
//     if (mixer) {
//         mixer.update(delta * 0.001); // Convert delta from milliseconds to seconds
//         elapsedTime += delta * 0.001;
//     }
//
//     renderer.render(scene, camera);
//     lastTime = time;
//
//     if (elapsedTime >= animationDuration) {
//         endAnimation();
//     } else {
//         requestAnimationFrame(animate);
//     }
// }
//
// // Function to set camera position based on device
// function setCameraForDevice() {
//     if (window.innerWidth > 768) { // Assuming 768px is your breakpoint for mobile
//         camera.position.set(-42, 25, 42);
//     } else {
//         camera.position.set(-25, 15, 25);
//     }
//     camera.lookAt(new THREE.Vector3(1, 0, 0)); // Adjust as necessary to point the camera at the center of your scene
// }
//
// // Initial call
// setCameraForDevice();
//
// // Update camera on resize
// window.addEventListener('resize', () => {
//     setCameraForDevice();
//     updateCameraAndRenderer(); // Make sure to call your function to update aspect ratio and renderer size
// }, false);
//
// // Update camera on resize
// window.addEventListener('resize', () => {
//     setCameraForDevice();
//     updateCameraAndRenderer(); // Make sure to call your function to update aspect ratio and renderer size
// }, false);
//
// // Point the camera towards the center of the scene
// camera.lookAt(new THREE.Vector3(0, 0, 0));
//
// // Create a new three.js scene
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xffffff); // Set background color
//
// // Add ambient light
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);
//
// // Add directional light
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
// directionalLight.position.set(0, 1, 1);
// scene.add(directionalLight);
//
// // Set the initial size based on the canvas client size
// function setSize() {
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     if (canvas.width !== width || canvas.height !== height) {
//         renderer.setSize(width, height, false);
//         camera.aspect = width / height;
//         camera.updateProjectionMatrix();
//     }
// }
// setSize(); // Set the initial size
//
// // Function to update the camera and renderer when the window is resized
// function updateCameraAndRenderer() {
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     renderer.setSize(width, height, false);
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();
// }
//
// // Call this function to initially set up the correct size
// updateCameraAndRenderer();
//
// function startAnimation() {
//     // Disable scrolling
//     document.body.style.overflow = 'hidden';
//
//     // Start your animation
//     requestAnimationFrame(animate);
// }
//
// function endAnimation() {
//     // Enable scrolling
//     document.body.style.overflow = '';
//
//     // Optional: Stop observing the canvas if animation is not supposed to repeat
//     observer.unobserve(canvas);
// }
//
//
// // Add event listeners for window resize and device orientation changes
// window.addEventListener('resize', updateCameraAndRenderer, false);
// window.addEventListener('orientationchange', updateCameraAndRenderer, false);
//
// // Prepare the animation mixer
// let mixer;
//
// // Function to be called after the model is loaded
// function onModelLoaded(gltf) {
//     const model = gltf.scene;
//     scene.add(model);
//     mixer = new THREE.AnimationMixer(model);
//     const action = mixer.clipAction(gltf.animations[0]);
//     action.play();
// }
//
// function getScrollPercentage() {
//     const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const scrollPosition = window.scrollY;
//     return (scrollPosition / scrollHeight);
// }
//
//
// // Load the .gltf model
// const loader = new GLTFLoader();
// loader.load('assets/js/sunnova/sunnova_solar_on_roof7.gltf', onModelLoaded, undefined, function (error) {
//     console.error(error); // If there's an error, log it to the console
// });
//
//
// // Animation loop
// let isAnimationCompleted = false;
//
// // Scroll event listener
// window.addEventListener('scroll', () => {
//     const scrollPercentage = getScrollPercentage();
//     const animationThreshold = 0; // Adjust this value to control the animation start point
//
//     if (scrollPercentage >= animationThreshold && !animationIsActive) {
//         requestAnimationFrame(animate);
//     }
// });
//
// let isCanvasVisible = false;
// let animationIsActive = false;
//
// window.addEventListener('scroll', () => {
//     const canvasRect = canvas.getBoundingClientRect();
//     const isCanvasFullyVisible = (
//         canvasRect.top >= 0 &&
//         canvasRect.left >= 0 &&
//         canvasRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         canvasRect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//
//     if (isCanvasFullyVisible && !isCanvasVisible) {
//         isCanvasVisible = true;
//         // Start the animation
//         animationIsActive = true;
//         requestAnimationFrame(animate);
//     } else if (!isCanvasFullyVisible && isCanvasVisible) {
//         isCanvasVisible = false;
//         // Stop the animation
//         animationIsActive = false;
//         // Remove the scroll listener
//         window.removeEventListener('scroll', this);
//     }
// });