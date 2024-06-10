document.addEventListener("DOMContentLoaded", function() {
    const users = [
        { username: "0", password: "0" } // Change to your username and password
    ];

    function authenticate() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            const modal = document.getElementById("login-modal");
            const protectedContent = document.getElementById("protected-content");

            if (modal && protectedContent) {
                modal.style.display = "none";
                protectedContent.style.visibility = "visible";
                protectedContent.style.position = "static";

                // Enable scrolling
                document.documentElement.style.overflow = "auto"; // For the HTML element
                document.body.style.overflow = "auto"; // For the body element
            } else {
                console.error("Modal or Protected Content not found");
            }
        } else {
            alert("Invalid username or password.");
        }
    }

    // Disable scrolling initially
    document.documentElement.style.overflow = "hidden"; // For the HTML element
    document.body.style.overflow = "hidden"; // For the body element

    window.authenticate = authenticate;
});