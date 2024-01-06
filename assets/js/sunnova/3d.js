import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r121/examples/jsm/loaders/GLTFLoader.js";

// Set up the scene, camera, and renderer as global variables
let scene, camera, renderer, mixer;
let nextButtonClicked = false;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Set background color

// Set up the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 15, 5); // Adjust camera position as needed
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // Focus the camera on the house


    // Set up the renderer
    renderer = new THREE.WebGLRenderer({antialias: true, canvas: document.getElementById("threejs-canvas1")});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    setupLights();
    window.addEventListener("resize", onWindowResize);
    initModel();
    console.log("Scene initialized");
}

function setupLights() {
    const mainLight = new THREE.DirectionalLight(0xffffff, 5);
    mainLight.position.set(40, 20, 50); // This would put the light in front and to the left, looking at the house
    mainLight.castShadow = true;
    mainLight.decay = 2;
    scene.add(mainLight);

    const fillLight1 = new THREE.DirectionalLight(0xffffff, 2);
    fillLight1.position.set(-40, -10, -50); // Move this to the opposite side of the main light
    scene.add(fillLight1);

    const fillLight2 = new THREE.DirectionalLight(0xffffff, 1);
    fillLight2.position.set(-30, 0, -20); // Adjust as needed to hit the backside of the house
    scene.add(fillLight2);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

const frameRate = 30; // Frame rate of your Blender animation
let startTime = null; // Start time of the animation
let actions = {};  // Actions dictionary should be in a higher scope to be accessible by other functions

function initModel() {
    const loader = new GLTFLoader();
    const progressBarElement = document.getElementById("progress-bar");
    loader.load("assets/js/sunnova/install_scene.glb", function (gltf) {
        scene.add(gltf.scene);

        mixer = new THREE.AnimationMixer(gltf.scene);
        actions = {};

        fetch("assets/js/sunnova/exported_actions.json")
            .then(response => response.json())
            .then(exportedActions => {
                console.log("Animations loaded:", exportedActions);

                // Setup the actions dictionary and schedule animations
                gltf.animations.forEach((clip) => {
                    const action = mixer.clipAction(clip);
                    actions[clip.name] = action;
                    action.setLoop(THREE.LoopOnce);
                    action.clampWhenFinished = true;

                    const exportedAction = exportedActions.find(a => a.name === clip.name);
                    if (exportedAction) {
                        const delay = calculateDelay(exportedAction.start_frame);
                        scheduleAction(clip.name, delay);
                    } else {
                        console.error(`No exported action found for clip: ${clip.name}`);
                    }
                });
            });

        // Next button event listener
        document.getElementById("nextButton").addEventListener("click", function() {
            console.log("Next button clicked");
            nextButtonClicked = true;
            isPaused = false;

            // Retrieve the house object to focus the camera on it
            const house = scene.getObjectByName("overhand_wall_004_mesh_n3d");
            if (house) {
                if (!house.geometry.boundingBox) {
                    house.geometry.computeBoundingBox();
                    console.log("Computed bounding box", house.geometry.boundingBox);
                }
                moveCamera();
            }
        }); // Close addEventListener here

        startTime = Date.now();
        animate();
        document.getElementById("loader").style.display = "none";
    }, function (xhr) {
        // Compute the loaded percentage and update the progress bar
        const percentage = (xhr.loaded / xhr.total * 100);
        progressBarElement.style.width = percentage + "%";
        progressBarElement.textContent = percentage.toFixed(0) + "%";
    });
}


function playAction(name) {
    const action = actions[name];
    if (action) {
        action.reset().play();
    }
}

function scheduleAction(name, delay) {
    if (delay <= 0) {
        playAction(name);
    } else {
        setTimeout(() => playAction(name), delay * 1000); // delay in seconds
    }
}
// console.log(`Animation loaded: ${clip.name}, Duration: ${clip.duration}`);
function calculateDelay(startFrame) {
    console.log(`Received start frame: ${startFrame}, type: ${typeof startFrame}`);
    startFrame = Number(startFrame); // Cast to number to ensure correct type

    if (isNaN(startFrame)) {
        console.error("Start frame is NaN after casting to number");
        return 0; // Fallback to 0 delay if startFrame is not a number
    }
    const delay = startFrame / frameRate;
    // console.log(`Calculated delay: ${delay}`);
    return delay;
}



// Animation loop
const radius = 30; // the radius of the "orbit"
const speed = 0.0001; // the speed of the rotation
const clock = new THREE.Clock();
const offset = new THREE.Vector3(15, 25, -50);  // x is left/right, y is up/down, z is forward/back
// const desiredPosition = vanPosition.clone(); // Start with the van"s position


// Animation loop
let shouldAnimate = true; // Flag to control the animation loop
let isPaused = false;
let currentFrame = 0;

function animate() {
    // console.log("Animating scene", currentFrame);
    if (!shouldAnimate) {
        return;
    }
    requestAnimationFrame(animate);

    const delta = clock.getDelta(); // Get the time elapsed since the last call

    if (mixer && !isPaused) { // Ensure mixer updates only when not paused
        mixer.update(delta);

        // Calculate the current frame
        const elapsedTime = (Date.now() - startTime) / 1000; // Time in seconds
        currentFrame = elapsedTime * frameRate;

        if (currentFrame >= 60) {
            isPaused = true;
            document.getElementById("nextButton").style.display = "block";}

        // Stop the animation after it exceeds the length of the animation
        if (currentFrame > 150) {
            shouldAnimate = false;
            mixer.stopAllAction();
        }
    }

    // Update the camera to follow the van
    const van = scene.getObjectByName("Van_Plane_Van_Plane_n3d");
    if (van) {
        const vanPosition = new THREE.Vector3();
        van.getWorldPosition(vanPosition);
        const vanDirection = new THREE.Vector3();
        van.getWorldDirection(vanDirection);
        vanDirection.normalize();

        // Calculate the desired camera position
        // Create a vector that represents
        // the right direction relative to the van
        const rightDirection = new THREE.Vector3();
        rightDirection.crossVectors(vanDirection, new THREE.Vector3(0, 1, 0)).normalize();

        // Calculate the offset in the right direction and the forward direction
        const rightOffset = rightDirection.multiplyScalar(offset.x);
        const forwardOffset = vanDirection.multiplyScalar(offset.z);

        // Combine all components of the offset
        const desiredPosition = vanPosition.clone()
            .add(rightOffset) // Add the right offset
            .add(new THREE.Vector3(0, offset.y, 0)) // Add the upward offset
            .add(forwardOffset); // Add the forward offset

        // Optionally, smoothly interpolate the camera position
        camera.position.lerp(desiredPosition, 0.05); // Smoothing factor, adjust as needed

        camera.lookAt(vanPosition); // Ensure the camera is always looking at the van
    }

    if (!isPaused) {
        const elapsedTime = (Date.now() - startTime) / 1000;
        currentFrame = elapsedTime * frameRate;

        if (currentFrame >= 60) {
            isPaused = true;
            document.getElementById("nextButton").style.display = "block"; // Show the next button
        } else if (mixer) {
            mixer.update(delta);
        }
    }

    renderer.render(scene, camera);
}

init();
