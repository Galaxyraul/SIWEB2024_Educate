document.addEventListener("DOMContentLoaded", function() {
    const addVideoBtn = document.getElementById("addVideoBtn");
    const videoCards = document.getElementById("videoCards");
    const uploadBtn = document.getElementById("uploadBtn");
    const fileInput = document.getElementById("fileInput");
    const editProfileBtn = document.getElementById("editProfileBtn");
    const confirmEditBtn = document.getElementById("confirmEditBtn");
    const cancelEditBtn = document.getElementById("cancelEditBtn");
    const editButtons = document.getElementById("editButtons");
    const usernameInput = document.getElementById("usernameInput");
    const emailInput = document.getElementById("emailInput");
    const bioInput = document.getElementById("bioInput");
    const passwordInput = document.getElementById("passwordInput");

    // Function to open a tab
    window.openTab = function(tabName) {
        const tabs = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
    }

    // Previous User Profile Module functionalities
    editProfileBtn.addEventListener("click", function() {
        editButtons.style.display = "block";
        editProfileBtn.style.display = "none";

        usernameInput.disabled = false;
        emailInput.disabled = false;
        bioInput.disabled = false;
        passwordInput.disabled = false;
    });

    confirmEditBtn.addEventListener("click", function() {
        // Save functionality for profile data
        displayUserData();

        editButtons.style.display = "none";
        editProfileBtn.style.display = "block";
        usernameInput.disabled = true;
        emailInput.disabled = true;
        bioInput.disabled = true;
        passwordInput.disabled = true;
    });

    cancelEditBtn.addEventListener("click", function() {
        // Reset input values to the current user data
        displayUserData();

        editButtons.style.display = "none";
        editProfileBtn.style.display = "block";
        usernameInput.disabled = true;
        emailInput.disabled = true;
        bioInput.disabled = true;
        passwordInput.disabled = true;
    });

    // Function to update the DOM with user data
    function displayUserData() {
        const userData = {
            username: "JohnDoe",
            email: "johndoe@example.com",
            bio: "This is my bio."
        };

        usernameInput.value = userData.username;
        emailInput.value = userData.email;
        bioInput.value = userData.bio;
    }

    // Video Card Creation
    addVideoBtn.addEventListener("click", function() {
        const card = document.createElement("div");
        card.className = "video-card";
        card.innerHTML = `
            <h3>Video Title</h3>
            <iframe width="300" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
            <p>Description</p>
        `;
        videoCards.appendChild(card);
    });

    // File Upload
    uploadBtn.addEventListener("click", function() {
        const file = fileInput.files[0];
        if (file) {
            console.log("File uploaded:", file.name);
            // Here you can add logic to upload the file to a server
        } else {
            alert("Please select a file.");
        }
    });

    // Open the first tab by default
    openTab("tab1");
});
