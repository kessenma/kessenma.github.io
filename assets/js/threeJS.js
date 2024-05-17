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
    let animationRequest;

    async function init() {
        container = document.querySelector(".three-js-canvas");
        if (!container) {
            console.error("Container element not found");
            return;
        }

        scene = new THREE.Scene();

        const fov = 75;  // Lowered FOV for better performance
        const aspect = container.clientWidth / container.clientHeight;
        const near = 0.1;  // Increased near plane distance for better performance
        const far = 500;  // Lowered far plane distance for better performance
        camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(2, 15, 5);
        camera.lookAt(scene.position);

        renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });  // Disabled antialiasing for performance
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(isMobile() ? 1 : window.devicePixelRatio);  // Lower pixel ratio for mobile
        container.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.25);
        const lightColorMobile1 = 0xfbf9c1;
        const lightColorMobile2 = 0xF2B763;
        const lightColor2 = isMobile() ? lightColorMobile1 : 0xffffff;
        const lightColor3 = isMobile() ? lightColorMobile2 : 0xffffff;

        const directionalLight2 = new THREE.DirectionalLight(lightColor2, 1);  // Reduced intensity for mobile
        const directionalLight3 = new THREE.DirectionalLight(lightColor3, 1);  // Reduced intensity for mobile

        directionalLight1.position.set(5, 48, 213);
        directionalLight2.position.set(328, -20, -214);
        directionalLight3.position.set(-60, 159, -28);

        scene.add(directionalLight1, directionalLight2, directionalLight3, ambientLight);

        // GLTF Model Loader
        const loader = new GLTFLoader();
        const modelPath = isMobile()
            ? './assets/js/three/04.05.23_install2.glb'
            : './assets/js/three/03.15.24_INSTALL2.glb';

        loader.load(modelPath, function (gltf) {
            model = gltf.scene;
            scene.add(model);
            model.scale.set(0.03, 0.03, 0.03);
            model.position.set(0, 0, 0);
            animationMixer = new THREE.AnimationMixer(model);
            window.addEventListener("resize", debounce(onWindowResize, 100));
            window.addEventListener("scroll", throttle(onScroll, 100));
            setupScrollTrigger(gltf);
            animate();
            document.getElementById('loading-screen').style.display = 'none'; // Hide loader once loaded
        }, function (xhr) {
            const progress = (xhr.loaded / xhr.total) * 100; // Calculate progress
            document.getElementById('loadingLine').style.width = `${progress}%`; // Update loader width
        }, function (error) {
            console.error('An error happened', error);
            displayErrorMessage("Failed to load the 3D model. Please try refreshing the page.");
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isSceneVisible = entry.isIntersecting;
                if (isSceneVisible) {
                    if (!animationRequest) {
                        animate();
                    }
                } else {
                    if (animationRequest) {
                        cancelAnimationFrame(animationRequest);
                        animationRequest = null;
                    }
                }
            });
        }, { threshold: 0.1 });
        observer.observe(container);
    }

    function animate() {
        animationRequest = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        if (animationMixer) animationMixer.update(delta);  // Update animation mixer
        renderer.render(scene, camera);
    }

    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    function throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    function displayErrorMessage(message) {
        const existingErrorMsg = container.querySelector(".error-message");
        if (existingErrorMsg) {
            existingErrorMsg.textContent = message;
            return;
        }
        const errorMsg = document.createElement("div");
        errorMsg.textContent = message;
        errorMsg.style.color = "red";
        errorMsg.className = "error-message";
        container.appendChild(errorMsg);
    }

    window.onerror = function (message, source, lineno, colno, error) {
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
            const timeAdjustment = scrollDelta * 0.001;
            const targetTime = animationMixer.time + timeAdjustment;
            const alpha = 0.1;
            const newTime = animationMixer.time + (targetTime - animationMixer.time) * alpha;
            animationMixer.setTime(Math.max(0, newTime));
        }
    }

    window.addEventListener("resize", debounce(onWindowResize));
    gsap.registerPlugin(ScrollTrigger);

    init();

    function setupScrollTrigger(gltf) {
        let masterAction = animationMixer.clipAction(gltf.animations.find(anim => anim.name === "MASTER"));
        masterAction.play();

        function handleScrollAnimation(progress) {
            if (!animationMixer) return;

            const totalAnimationTime = masterAction.getClip().duration;
            const maxProgress = 0.99;
            const effectiveProgress = progress * maxProgress;
            const timeWithinAnimation = effectiveProgress * totalAnimationTime;
            animationMixer.setTime(Math.min(timeWithinAnimation, totalAnimationTime * maxProgress));
        }

        const initialCameraY = camera.position.y;
        const yStepDown = 8;
        const initialCameraX = camera.position.x;
        const xStepDown = 2;
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