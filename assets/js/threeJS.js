function addModelToBG() {
    let container, camera, renderer, scene, model, animationMixer, clock = new THREE.Clock();
    let lastScrollY = window.pageYOffset;

    function init() {
        container = document.querySelector(".scene.one");
        scene = new THREE.Scene();

        const fov = 100;
        const aspect = container.clientWidth / container.clientHeight;
        const near = 0.9;
        const far = 2000;
        camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 150, 150); //150 units up and 150 units back
        camera.lookAt(scene.position);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.gammaOutput = true;
        renderer.gammaFactor = 2.2;

        container.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight, ambientLight);

        // Load the GLB model
        const loader = new THREE.GLTFLoader();
        loader.load('/assets/js/siteSurvey02.22-1.glb', (gltf) => {
            model = gltf.scene;
            scene.add(model);
            model.scale.set(1, 1, 1);
            model.position.set(0, 0, 0);
            model.rotation.y = Math.PI / 2; // Rotate the model by 90 degrees
            animationMixer = new THREE.AnimationMixer(model);
            window.addEventListener("resize", onWindowResize);
            window.addEventListener("scroll", onScroll);
            console.log("Animation Mixer initialized:", animationMixer);

            const toHouseAction = animationMixer.clipAction(gltf.animations.find(anim => anim.name === 'van_n3dAction_toHouse'));
            const drivewayAction = animationMixer.clipAction(gltf.animations.find(anim => anim.name === 'van_n3dAction_driveway'));
            const pauseAction = animationMixer.clipAction(gltf.animations.find(anim => anim.name === 'van_n3dAction_pause'));
            const nlaAction = animationMixer.clipAction(gltf.animations.find(anim => anim.name === 'NlaTrack'));

            // Play the first animation by default
            // toHouseAction.play();

            // Set up the scroll triggers
            setupScrollTrigger(gltf);
            animate(); // Start the animation loop once the model is loaded
        });

    }

    function animate() {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        // Don't update the animation mixer here. It's handled in the ScrollTrigger's onUpdate callback.
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    gsap.registerPlugin(ScrollTrigger);

    init();

    function handleAnimation(section, progress) {
        let actionName;
        switch(section) {
            case 'house':
                actionName = 'van_n3dAction_toHouse';
                break;
            case 'pause':
                actionName = 'van_n3dAction_pause';
                break;
            case 'driveway':
                actionName = 'van_n3dAction_driveway';
                break;
        }

        const action = animationMixer._actions.find(action => action.getClip().name === actionName);
        if (action) {
            const clip = action.getClip();
            // Linear interpolation for smooth transition
            const targetTime = progress * clip.duration;
            const currentTime = animationMixer.time;
            // Lerp formula: newValue = oldValue + (targetValue - oldValue) * alpha
            const alpha = 0.1; // Adjust alpha (0.1 - 0.5) based on desired smoothness
            const newTime = currentTime + (targetTime - currentTime) * alpha;

            // Clamp the new time within the animation bounds
            const clampedTime = Math.max(0, Math.min(newTime, clip.duration));
            animationMixer.setTime(clampedTime);
        }
    }


//// ANIMATION ON SCROLL
    let scrollProgress; // Value between 0 and 1 (now declared only once)
// let currentTime = 0; // Declare currentTime outside the if block
    let lastAnimationTime = 0;

    const framesPerScene = 30;
    const frameRate = 24; // Replace with your actual frame rate


    function setupScrollTrigger(gltf) {
        const nlaAction = animationMixer.clipAction(gltf.animations.find(anim => anim.name === 'NlaTrack'));
        nlaAction.play();

        let currentTargetTime = 0;
        let lastUpdateTime = 0;
        const smoothingFactor = 0.05; // Adjust based on desired smoothness

        function updateAnimationMixer() {
            const currentTime = performance.now();
            if (currentTime - lastUpdateTime > 16) { // Throttle to ~60fps
                const delta = (currentTime - lastUpdateTime) / 1000; // Convert to seconds
                const timeDifference = currentTargetTime - animationMixer.time;
                if (Math.abs(timeDifference) > smoothingFactor) {
                    animationMixer.setTime(animationMixer.time + timeDifference * smoothingFactor * delta);
                } else {
                    animationMixer.setTime(currentTargetTime); // Close enough, snap to target
                }
                lastUpdateTime = currentTime;
            }
            requestAnimationFrame(updateAnimationMixer);
        }

        function clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        }

        // Generic function to handle the animation based on scroll progress
        function handleScrollAnimation(progress, section) {
            const totalDuration = 150 / frameRate; // Total animation duration in seconds
            const segmentDuration = totalDuration / 3; // Assuming three equal segments
            let segmentStart = 0;
            const clampedProgress = clamp(progress, 0, 0.99);

            // Adjust the segmentStart based on the section
            if (section === "scene-two") {
                segmentStart = segmentDuration;
            } else if (section === "scene-three") {
                segmentStart = 2 * segmentDuration;
            }

            const timeWithinSegment = segmentStart + (clampedProgress * segmentDuration);
            const clampedTimeWithinSegment = clamp(timeWithinSegment, segmentStart, segmentStart + segmentDuration);

            animationMixer.setTime(clampedTimeWithinSegment);
        }




        // SCENE 1 TO HOUSE
        ScrollTrigger.create({
            trigger: "#trigger-section1",
            start: "top+=10% bottom-=5%",
            end: "bottom-=5% top+=10%",
            scrub: 0.5,
            markers: true,
            // onEnter: () => {
            // 	handleAnimation('house', 0);
            // },
            onUpdate: self => {
                if (!animationMixer) return;
                handleScrollAnimation(self.progress, "scene-one");
            }
        });
        // SCENE 2 PAUSE
        ScrollTrigger.create({
            trigger: "#trigger-section2",
            start: "top+=10% bottom-=5%",
            end: "bottom-=5% top+=10%",
            scrub: 0.5,
            markers: true, // Useful for debugging
            // onEnter: self => {
            //     lastAnimationTime = animationMixer.time;
            //     toHouseAction.stop();

            //     pauseAction.play();
            //     handleAnimation('pause', 0); // Similarly for 'pause'
            //     console.log("onEnter");
            // },
            onUpdate: self => {
                if (!animationMixer) return;
                handleScrollAnimation(self.progress, "scene-two");
            }
        });
        //SCENE 3 DRIVEWAY
        ScrollTrigger.create({
            trigger: "#trigger-section3",
            start: "top+=10% bottom-=5%",
            end: "bottom-=5% top+=10%",
            scrub: 0.5,
            markers: true, // Useful for debugging
            // onEnter: self => {
            // 	pauseAction.stop();
            //     drivewayAction.play();
            //     console.log("onEnter");
            // },
            onUpdate: self => {
                if (!animationMixer) return;
                handleScrollAnimation(self.progress, "scene-three");
            }
        });


    }

//// ANIMATION ON SCROLL ^^^
//// CAMERA + SCENE ROTATION ON SCROLL


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



    // Set up the GSAP animation timeline with ScrollTrigger
    let car_anim = gsap.timeline({
        scrollTrigger: {
            trigger: "#trigger-section1",
            scrub: 0.5,
            start: "top top",
            end: "bottom bottom"
        }
    });

    // Slide 1
    // Tilt the scene slightly by rotating around the X-axis
    car_anim.to(scene.rotation, {
        x: gsap.utils.wrap([-0.25, 0.2]), // Subtle rotation values
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".section-one",
            scrub: 0.5,

            endTrigger: ".section-two",
            end: "top bottom",

        }})


    // Slide 2

    car_anim.to(camera.position, {x: -0.25, ease: "power1.inOut", scrollTrigger: {

            trigger: ".section-two",
            scrub: 0.5,

            start: "top bottom",
            end: "top top",

        }})

    car_anim.to(scene.rotation, {y: 1, ease: "power1.inOut", scrollTrigger: {

            trigger: ".section-two",
            scrub: 0.5,

            start: "top 50%",
            end: "top top",

        }})



    // Slide 3

    car_anim.to(scene.rotation, {x: -0.75, ease: "power1.inOut", scrollTrigger: {

            trigger: ".section-three",
            scrub: 0.5,

            start: "top bottom",
            end: "top top",

        }})




    // // Slide 4 - The problem child

    car_anim.to(scene.rotation, {x: 0.5, ease: "power1.inOut", scrollTrigger: {

            trigger: ".section-four",
            scrub: 0.5,

            start: "top 50%",
            end: "top top",

        }})



    // 	car_anim.to(camera.position, {x: 0.16, ease: Power1.easeInOut, scrollTrigger: {

    // 		trigger: ".section-four",
    // 		scrub: 0.5,

    // 		start: "top top",
    // 		end: "bottom top",

    // }})

}

//// CAMERA + SCENE ROTATION ON SCROLL ^^^^

addModelToBG();