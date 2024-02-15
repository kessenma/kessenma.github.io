// Import THREE and GLTFLoader as modules
import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r121/examples/jsm/loaders/GLTFLoader.js";

console.log('siteSurvey Script started');
// Renderer
const canvas = document.querySelector('#three-canvas');
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // The second parameter is the alpha value, 0 for fully transparent


gsap.registerPlugin(ScrollTrigger);
console.log("GSAP and ScrollTrigger registered");


console.log('Renderer initialized');

// Assuming ScrollTrigger is properly registered
console.log('ScrollTrigger registered');

// Create a new Three.js scene
const scene = new THREE.Scene();

// Declare the animationMixer variable in the outer scope
let animationMixer;

// Assuming `animationMixer` is your Three.js Animation Mixer
const clock = new THREE.Clock();

// Initialize GLTFLoader
const loader = new GLTFLoader();

console.log('GLTFLoader initialized');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(70, 50, -200); // Adjust camera position as needed
camera.rotation.set(-50, 85, -285)
camera.lookAt(new THREE.Vector3(0, 0, 0));
console.log('Camera set up');

// Hemisphere light
const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.5);

// Directional light
const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
dirLight.position.set(50, 50, 50);
dirLight.castShadow = true;

// Ambient light
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);


const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(15, -50, -150); // Adjust camera position as needed
spotLight.castShadow = true;

scene.add(ambientLight, dirLight, hemiLight, spotLight);

// shadow properties for the Directional Light
dirLight.shadow.mapSize.width = 512;  // default is 512
dirLight.shadow.mapSize.height = 512; // default is 512
dirLight.shadow.camera.near = 0.5;    // default is 0.5
dirLight.shadow.camera.far = 500;     // default is 500


// Spot Light Helper
const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);
// You need to update the spot light helper in the animation loop to correctly visualize the spot light's direction
function updateHelpers() {
    spotLightHelper.update(); // Update spot light helper to match light's position and direction
    // console.log('Helpers updated');
}



function animate() {
    requestAnimationFrame(animate);

    // If there's an animation mixer, update it
    if (animationMixer) {
        const delta = clock.getDelta();
        animationMixer.update(delta);
        // console.log('Animation mixer updated');
    }
    updateHelpers();

    renderer.render(scene, camera); // Add your camera to the script
    // console.log('Scene rendered');
}

animate();

function onModelLoaded(gltf) {
    console.log('Model loading started');

    const model = gltf.scene;
    scene.add(model); // Add the model to the scene

    // Initialize the AnimationMixer for the loaded model
    animationMixer = new THREE.AnimationMixer(model);

    // Optional: Set the model's position, scale, or rotation as needed
    model.position.set(0, 0, 0);
    model.scale.set(1, 1, 1);

    // Find the specific animation clip
    const clip = THREE.AnimationClip.findByName(gltf.animations, 'van_n3dAction');
    if (clip) {
        const action = animationMixer.clipAction(clip);
        const totalAnimationDuration = clip.duration;

        console.log("Animation action created and ready to play.");
        // action.paused = true;
    } else {
        console.log("Specified animation clip not found.");
    }
    if (clip) {
        const action = animationMixer.clipAction(clip);
        console.log("Animation action created and ready to play.");

        // Calculate and assign totalAnimationDuration
        const totalAnimationDuration = clip.duration;

        // Call action.play()
        action.play();

        ScrollTrigger.create({
            trigger: "#trigger-section",
            start: "top center",
            end: "bottom top",
            scrub: true,
            markers: true, // Optional visual markers

            onStart: self => {
                if (animationMixer) {
                    animationMixer.setTime(0); // Start from the beginning
                }
            },

            // Corrected onUpdate function:
            onUpdate: (self) => {
                const scrollProgress = self.progress; // 0 at start, 1 at end
                const currentTime = scrollProgress * totalAnimationDuration;
                if (animationMixer && !isNaN(currentTime)) {
                    animationMixer.setTime(currentTime);
                }
                // Check if scrolling has stopped (progress not changing)
                if (self.direction === 0) {
                    // Pause the animation when scrolling stops
                    if (animationMixer) {
                        animationMixer.stop();
                    }
                } else {
                    // Update animation time only when scrolling is active
                    const currentTime = scrollProgress * totalAnimationDuration;
                    if (animationMixer && !isNaN(currentTime)) {
                        animationMixer.setTime(currentTime);
                    }
                }
            },

            onEnd: self => {
                if (animationMixer) {
                    action.pause(); // Pause at the end
                }
            }
        });
    } else {
        // Fallback to play all animations if specific one isn't found
        gltf.animations.forEach((clip) => {
            animationMixer.clipAction(clip).play();
        });
    }


    console.log('Model added to scene');
}


// Load your GLB model After the model has loaded and the animation mixer has been set up
loader.load('assets/js/sunnova/siteSurvey10.glb', function(gltf) {
    console.log('Loading model...');
    onModelLoaded(gltf);
});



