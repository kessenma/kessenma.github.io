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
    const loader = new GLTFLoader();

    console.log('GLTFLoader initialized');

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(70, 50, -200); // Adjust camera position as needed
    camera.rotation.set(-50, 85, -285)
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    console.log('Camera set up');
    //lights
    const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.5);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirLight.position.set(50, 50, 50);
    dirLight.castShadow = true;
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(15, -50, -150); // Adjust camera position as needed
    spotLight.castShadow = true;
    scene.add(ambientLight, dirLight, hemiLight, spotLight);
    dirLight.shadow.mapSize.width = 512;  // default is 512
    dirLight.shadow.mapSize.height = 512; // default is 512
    dirLight.shadow.camera.near = 0.5;    // default is 0.5
    dirLight.shadow.camera.far = 500;     // default is 500
    // Spot Light Helper
    const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    scene.add(spotLightHelper);
    function updateHelpers() {
        spotLightHelper.update(); // Update spot light helper to match light's position and direction
        // console.log('Helpers updated');
    }

    function animate() {
        requestAnimationFrame(animate);
        // Don't update the animation mixer here. It's handled in the ScrollTrigger's onUpdate callback.
        updateHelpers();
        renderer.render(scene, camera); // Render the scene with the camera
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

            // Configure the action to freeze at the last frame and not loop
            // action.clampWhenFinished = true; // Hold at the last frame
            // action.setLoop(THREE.LoopOnce); // Play the animation once without looping
            action.play();

            ScrollTrigger.create({
                trigger: "#trigger-section",
                start: "top+=10% bottom-=5%",
                end: "bottom-=5% top+=10% ",
                scrub: 0.5,
                markers: true, // Optional visual markers

                onStart: self => {
                    if (animationMixer) {
                        animationMixer.setTime(0); // Start from the beginning
                    }
                },

                onUpdate: (self) => {
                    const scrollProgress = self.progress; // Log the scroll progress
                    console.log("Scroll progress:", scrollProgress);
                    const currentTime = scrollProgress * totalAnimationDuration;
                    console.log("Current time:", currentTime); // Log the current time
                    if (animationMixer && !isNaN(currentTime)) {
                        animationMixer.setTime(currentTime);
                    }
                },
            });
        } else {
            // Fallback to play all animations if specific one isn't found
            gltf.animations.forEach((clip) => {
                animationMixer.clipAction(clip).play();
            });
        }


        console.log('Model added to scene');
    }

    // function debounce(func, wait) {
    //     let timeout;
    //     return function executedFunction(...args) {
    //         const later = () => {
    //             clearTimeout(timeout);
    //             func(...args);
    //         };
    //
    //         clearTimeout(timeout);
    //         timeout = setTimeout(later, wait);
    //     };
    // }

    // Function to cleanup resources, event listeners, and ScrollTrigger instances
    function cleanup() {
        ScrollTrigger.getAll().forEach(instance => instance.kill());
        disposeThreeJsObjects();
    }

    function disposeThreeJsObjects() {
        // Dispose of materials, geometries, textures, etc.
        scene.traverse(object => {
            if (object.isMesh) {
                if (object.geometry) {
                    object.geometry.dispose();
                }
                if (object.material) {
                    if (object.material.length) {
                        // For Array materials
                        for (const material of object.material) {
                            material.dispose();
                        }
                    } else {
                        object.material.dispose();
                    }
                }
            }
        });

        // Dispose of the renderer
        renderer.dispose();

        // Additional cleanup if necessary (e.g., removing lights, helpers, etc.)
    }

    // Load your GLB model After the model has loaded and the animation mixer has been set up
    loader.load('assets/js/sunnova/siteSurvey12.glb', function(glx`tf) {
        console.log('Loading model...');
        onModelLoaded(gltf);
    });

    setupAnimationControls();