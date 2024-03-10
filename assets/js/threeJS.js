import * as THREE from '/assets/js/three/three.module.js';
import { GLTFLoader } from '/assets/js/three/GLTFLoader.js';
import { DRACOLoader } from '/assets/js/three/Draco/DRACOLoader.js';
// import { OrbitControlls } from '/assets/js/three/OrbitControls.js';



function addModelToBG() {
    let container;
    let camera;
    let renderer;
    let scene;
    let model;
    let animationMixer;
    let clock = new THREE.Clock();
    let lastScrollY = window.pageYOffset;
    let isSceneVisible = true;

    function init() {
        container = document.querySelector(".scene.one");
        if (!container) {
            console.error("Container element not found");
            return;
        }
        scene = new THREE.Scene();

        const fov = 100;
        const aspect = container.clientWidth / container.clientHeight;
        const near = 0.9;
        const far = 1000;
        camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        // camera.position.set(0, 150, 150); //150 units up and 150 units back
        camera.lookAt(scene.position);

        renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight, ambientLight);

        // DRACO Compression
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('./assets/js/three/Draco/');

        // GLTF Model Loader
        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);
        loader.load('./assets/js/three/03.02.24_setup9.glb', function (gltf) {
            model = gltf.scene;
            scene.add(model);
            model.rotation.y = (3 * Math.PI) / 2; // Rotate the model by 270 degrees
            model.scale.set(0.03, 0.03, 0.03);
            model.position.set(0, 0, 0);
            animationMixer = new THREE.AnimationMixer(model);
            window.addEventListener("resize", onWindowResize);
            window.addEventListener("scroll", onScroll);
            console.log("Animation Mixer initialized:", animationMixer);
            const masterAnimation = animationMixer.clipAction(gltf.animations.find(anim => anim.name === "MASTER"));
            setupScrollTrigger(gltf);
            animate();
            document.getElementById('loading-screen').style.display = 'none'; // Hide loader once loaded
        }, function (xhr) {
            // During loading
            const progress = (xhr.loaded / xhr.total) * 100; // Calculate progress
            document.getElementById('line').style.width = `${progress}%`; // Update loader width
        }, function (error) {
            console.error('An error happened', error);
        }, undefined, function (error) {
            // Error callback
            console.error('An error happened while loading the model:', error);
            displayErrorMessage("Failed to load the 3D model. Please try refreshing the page.");
        });

        function displayErrorMessage(message) {
            // Check if there's already an error message displayed
            const existingErrorMsg = container.querySelector(".error-message");
            if (existingErrorMsg) {
                // Update the existing message in case this function is called multiple times
                existingErrorMsg.textContent = message;
                return;
            }
            // Create a new div element to show the error message
            const errorMsg = document.createElement("div");
            errorMsg.textContent = message;
            errorMsg.style.color = "red"; // Make the error message stand out
            errorMsg.className = "error-message"; // Assign a class for potential styling with CSS
            container.appendChild(errorMsg); // Append the error message to the container
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isSceneVisible = entry.isIntersecting;
                if (isSceneVisible) {
                    animate(); // Only call animate when the scene comes into view
                } else {
                    // Optional: Call disposeThreeJsObjects() here if you're leaving the page or want to free up resources
                    // disposeThreeJsObjects();
                }
            });
        }, { threshold: 0.1 });
        animate();
        observer.observe(container);
    }

    function animate() {
        if (!isSceneVisible) return;
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        renderer.render(scene, camera);
    }

    function debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    function onScroll() {
        const currentScrollY = window.pageYOffset;
        const scrollDelta = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;

        if (animationMixer) {
            // Apply a smoother transition for scroll-based animation time adjustments
            const timeAdjustment = scrollDelta * 0.001; // Adjust multiplier for speed
            const targetTime = animationMixer.time + timeAdjustment;
            // Use Lerp for a smoother time adjustment based on scrolling
            const alpha = 0.1; // Smoothing factor
            const newTime = animationMixer.time + (targetTime - animationMixer.time) * alpha;
            // Clamp the new time within the animation bounds (assuming 0 and max duration as bounds)
            // animationMixer.time = Math.max(0, Math.min(newTime, animationMixer.clipAction().getClip().duration));
        }
    }
    window.addEventListener("resize", debounce(onWindowResize));
    gsap.registerPlugin(ScrollTrigger);

    init();

// *******************************
// 	➡️animations on scroll🖱️ ***
// *******************************

    scene.rotation.set(0, 0.5, 0)
    camera.position.set(2, 10, 5)
    camera.lookAt(scene.position);

    function setupScrollTrigger(gltf) {
        let masterAction = animationMixer.clipAction(gltf.animations.find(anim => anim.name === "MASTER"));
        masterAction.play();

        let currentTargetTime = 0;
        let lastUpdateTime = 0;
        const smoothingFactor = 0.05; // Adjust based on desired smoothness

        function clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        }

        function handleScrollAnimation(progress) {
            if (!animationMixer) return;

            // Get the total duration of the animation directly from the clip
            const totalAnimationTime = animationMixer.clipAction(gltf.animations.find(anim => anim.name === "MASTER")).getClip().duration;

            const maxProgress = 0.99;
            const effectiveProgress = progress * maxProgress;

            // Map scroll progress directly to animation time
            const timeWithinAnimation = effectiveProgress * totalAnimationTime;

            // Clamp the time to ensure it does not exceed the animation duration
            const clampedTimeWithinAnimation = Math.min(timeWithinAnimation, totalAnimationTime * maxProgress);

            // Set the mixer's time to the calculated time
            animationMixer.setTime(clampedTimeWithinAnimation);
        }


        gsap.timeline({
            scrollTrigger: {
                trigger: ".section-one", // This is where the animation will start
                start: "top top", // When the top of .section-one hits the top of the viewport
                endTrigger: ".section-five", // This is where the animation will end
                end: "bottom bottom", // When the bottom of .section-five hits the bottom of the viewport
                scrub: true,
                onUpdate: (self) => {
                    if (!animationMixer) return;
                    handleScrollAnimation(self.progress);
                }
            }
        });



// *******************************
// 	🎥CAMERA + MODEL ROTATION 🔄***
// *******************************

        let car_anim = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-one",
                scrub: 0.5,
                start: "top top",
                end: "bottom bottom",
            }
        });

// Slide 1
        car_anim.to(scene.rotation, {
            x: 0.0, // Assuming you want no rotation on the x-axis for Slide 1
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".section-one",
                scrub: 0.5,
                endTrigger: ".section-two",
                end: "bottom center", // Overlap between end of Slide 1 and start of Slide 2
            }
        });

// Slide 2
        car_anim.fromTo(scene.rotation, { y: 0.5 }, {
            y: Math.PI / 2, // the value you want to animate to
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".section-two",
                scrub: 0.5,
                start: "top bottom",
                end: "top top",
            }
        });

// Ensure the camera starts at the specified position
        car_anim.fromTo(camera.position, { x: 2, y: 10, z: 5 }, {
            // New camera position you want to animate to
            x: 2,
            y: 10,
            z: 3,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".section-three",
                scrub: 0.5,
                start: "top center",
                end: "bottom bottom",
            }
        });

// Slide 3
        car_anim.fromTo(scene.rotation, { y: 0.5 }, {
            y: Math.PI / 2, // the value you want to animate to
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".section-two",
                scrub: 0.5,
                start: "top bottom",
                end: "top top",
            }
        });

// Slide 4 - The problem child
        car_anim.to(scene.rotation, {
            x: -0.5,
            ease: "power1.inOut",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".section-four",
                scrub: 0.5,
                start: "top center",
                end: "bottom bottom",
            }
        })
    }
}


addModelToBG();