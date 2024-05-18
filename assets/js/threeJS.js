import * as THREE from '/assets/js/three/three.module.js';
import { GLTFLoader } from '/assets/js/three/GLTFLoader.js';

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

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

    async function init() {
        container = document.querySelector(".three-js-canvas");
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
        camera.position.set(2, 15, 5);
        camera.lookAt(scene.position);
        if (isMobile()) {
            renderer = new THREE.WebGLRenderer({ alpha: true });
        } else {
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        }
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.25);

        const lightColorDesktop = 0xffffff; // White for desktop
        const lightColorMobile1 = 0xfbf9c1; //  color 1 for mobile
        const lightColorMobile2 = 0xF2B763; //  color 2 for mobile

        // Determine light colors based on the device
        const lightColor2 = isMobile() ? lightColorMobile1 : lightColorDesktop;
        const lightColor3 = isMobile() ? lightColorMobile2 : lightColorDesktop;

        // right
        const directionalLight2 = new THREE.DirectionalLight(lightColor2, 5);
        //left
        const directionalLight3 = new THREE.DirectionalLight(lightColor3, 3);

        directionalLight1.position.set(5.000, 48.060, 213.371);
        directionalLight2.position.set(328.649, -20.957, -214.535);
        directionalLight3.position.set(-60.866, 159.137, -28.965);

        scene.add(directionalLight1, directionalLight2, directionalLight3, ambientLight);

        // GLTF Model Loader
        const loader = new GLTFLoader();
        if (!isMobile()) { // Adjusted to directly call isMobile()
            const { DRACOLoader } = await import('/assets/js/three/Draco/DRACOLoader.js');
            const { KTX2Loader } = await import('/assets/js/three/ktx2/KTX2Loader.js');

            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath('./assets/js/three/Draco/');
            loader.setDRACOLoader(dracoLoader);

            const ktx2Loader = new KTX2Loader();
            ktx2Loader.setTranscoderPath('/assets/js/three/ktx2/');
            ktx2Loader.detectSupport(renderer);
            loader.setKTX2Loader(ktx2Loader);
        }

        const modelPath = isMobile()
            ? './assets/js/three/04.05.23_install2.glb'
            : './assets/js/three/03.15.24_INSTALL2.glb';

        loader.load(modelPath, function (gltf) {
        // loader.load('./assets/js/three/03.15.24_INSTALL2.glb', function (gltf) {
            model = gltf.scene;
            scene.add(model);
            // model.rotation.y = (3 * Math.PI) / 2; // Rotate the model by 270 degrees
            model.scale.set(0.03, 0.03, 0.03);
            model.position.set(0, 0, 0);
            animationMixer = new THREE.AnimationMixer(model);
            window.addEventListener("resize", onWindowResize);
            window.addEventListener("scroll", onScroll);
            console.log("Animation Mixer initialized:", animationMixer);
            const masterAnimation = animationMixer.clipAction(gltf.animations.find(anim => anim.name === "MASTER"));
            setupScrollTrigger(gltf); // Important to see if this gets called
            console.log("Setup ScrollTrigger called");
            animate();
            document.getElementById('loading-screen').style.display = 'none'; // Hide loader once loaded
        }, function (xhr) {
            // During loading
            console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`);
            const progress = (xhr.loaded / xhr.total) * 100; // Calculate progress
            document.getElementById('loadingLine').style.width = `${progress}%`; // Update loader width
        }, function (error) {
            console.error('An error happened', error);
        }, undefined, function (error) {
            // Error callback
            console.error('An error happened while loading the model:', error);
            displayErrorMessage("Failed to load the 3D model. Please try refreshing the page.");
        });



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
        // console.log('Rendering frame');
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

    // ######################
    // ### ERROR HANDLING + LOGGING ###
    // ######################

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

    // memory tracking inside chrome
    // if (window.performance && window.performance.memory) {
    //     console.log(`Used JS Heap Size: ${window.performance.memory.usedJSHeapSize / 1048576} MB`);
    //     console.log(`Total JS Heap Size: ${window.performance.memory.totalJSHeapSize / 1048576} MB`);
    // }

    window.onerror = function(message, source, lineno, colno, error) {
        console.log('An error occurred: ', message);
    };


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

        const initialCameraY = camera.position.y; // Use the initial Y position
        const yStepDown = 8; // Adjust this value based on how much you want the camera to move down
        const initialCameraX = camera.position.x; // Use the initial Y position
        const xStepDown = 2; // Adjust this value based on how much you want the camera to move down
        const initialCameraZ = camera.position.z; // Use the initial Y position
        const zStepDown = -5; // Adjust this value based on how much you want the camera to move down

        function calculateOffsetTop() {
            let offsetTop = 0;
            let sections = ['one', 'two', 'three', 'four', 'five'];
            for (let i = 0; i < sections.length; i++) {
                const section = document.querySelector('.section-' + sections[i]);
                if (section) {
                    offsetTop += section.offsetHeight;
                } else {
                    console.error('Missing section: .section-' + sections[i]);
                    break; // Stop the loop if a section is missing
                }
            }
            return offsetTop;
        }

        let lastScrollDirectionDown = true;

        function getScrollDirection() {
            const currentScrollY = window.pageYOffset;
            const directionDown = currentScrollY > lastScrollY; // Determine scroll direction
            lastScrollY = currentScrollY;
            return directionDown;
        }

        gsap.timeline({
            scrollTrigger: {
                trigger: ".section-zero",
                start: "top top",
                endTrigger: ".section-seven",
                end: "bottom bottom",
                scrub: true,
                // markers: true,
                onUpdate: (self) => {
                    if (!animationMixer) return;
                    handleScrollAnimation(self.progress);
                    let totalSections = 4;
                    let rotationPerSection = 0.25; // Radians
                    let cumulativeRotation = rotationPerSection * totalSections * self.progress;
                    scene.rotation.y = cumulativeRotation;
                    let cameraYPosition = initialCameraY - (yStepDown * self.progress); // Adjust the Y-coordinate
                    camera.position.y = cameraYPosition;
                    let cameraXPosition = initialCameraX - (xStepDown * self.progress); // Adjust the X-coordinate
                    camera.position.x = cameraXPosition;
                    let cameraZPosition = initialCameraZ - (zStepDown * self.progress); // Adjust the Z-coordinate
                    camera.position.z = cameraZPosition;
                },
                onEnter: () => {
                    // When re-entering the fixed section
                    let sceneElement = document.querySelector('.three-js-canvas');
                    sceneElement.style.position = 'fixed';
                    sceneElement.style.top = '0';
                },
                onLeave: () => {
                    let sceneElement = document.querySelector('.three-js-canvas');
                    let offsetTop = calculateOffsetTop(); // Your existing function to calculate the offset
                    lastScrollDirectionDown = getScrollDirection(); // Check scroll direction
                    let topValue = lastScrollDirectionDown ? '100vh' : '0'; // Set top based on scroll direction
                    sceneElement.style.position = 'absolute';
                    sceneElement.style.top = topValue;
                    },
                onLeaveBack: () => {
                    let sceneElement = document.querySelector('.three-js-canvas');
                    let sections = ['one', 'two', 'three', 'four', 'five'];
                    let offsetTop = 0;
                    for (let i = 0; i < sections.length; i++) {
                        const section = document.querySelector('.section-' + sections[i]);
                        if (section) {
                            offsetTop += section.offsetHeight;
                        } else {
                            console.error('Missing section: .section-' + sections[i]);
                            return; // Exit the function if a section is missing
                        }
                    }
                    if (sceneElement) {
                        sceneElement.style.position = 'absolute';
                        sceneElement.style.top = `${offsetTop}px`;
                    }
                },
                onEnterBack: () => {
                    let sceneElement = document.querySelector('.three-js-canvas');
                    if (sceneElement) {
                        sceneElement.style.position = 'fixed';
                        sceneElement.style.top = '0';
                        sceneElement.style.left = '0';
                        sceneElement.style.width = '100vw';
                        sceneElement.style.height = '100vh';
                        console.log('Entering fixed section from the back');
                    }
                },
            }
        });
    }
}


addModelToBG();