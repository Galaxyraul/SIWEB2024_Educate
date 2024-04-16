document.addEventListener("DOMContentLoaded", function() {
    const editProfileBtn = document.getElementById("editProfileBtn");
    const saveEditBtn = document.getElementById("saveEditBtn");
    const cancelEditBtn = document.getElementById("cancelEditBtn");
    const closeEditBtn = document.getElementById("closeEditBtn");

    const userData = {
        username: "JohnDoe",
        email: "johndoe@example.com",
        bio: "This is my bio."
    };

    const usernameInput = document.getElementById("usernameInput");
    const emailInput = document.getElementById("emailInput");
    const bioInput = document.getElementById("bioInput");
    const passwordInput = document.getElementById("passwordInput");

    // Function to update the input placeholders with current user data
    function displayUserData() {
        usernameInput.placeholder = userData.username;
        emailInput.placeholder = userData.email;
        bioInput.placeholder = userData.bio;
    }

    // Initial display of user data
    displayUserData();

    editProfileBtn.addEventListener("click", function() {
        editProfileBtn.style.display = "none";
        saveEditBtn.style.display = "inline-block";
        cancelEditBtn.style.display = "inline-block";
        closeEditBtn.style.display = "inline-block";

        // Enable inputs for editing
        usernameInput.disabled = false;
        emailInput.disabled = false;
        bioInput.disabled = false;
        passwordInput.disabled = false;

        // Set placeholders to current user data
        displayUserData();
    });

    saveEditBtn.addEventListener("click", function() {
        // Update userData with input values if they are not empty
        if (usernameInput.value) userData.username = usernameInput.value;
        if (emailInput.value) userData.email = emailInput.value;
        if (bioInput.value) userData.bio = bioInput.value;

        // Handle password change if a new password is entered
        const newPassword = passwordInput.value;
        if (newPassword) {
            // Handle password change
            console.log("Password changed:", newPassword);
        }

        // Reset input placeholders to updated user data
        displayUserData();
    });

    cancelEditBtn.addEventListener("click", function() {
        // Reset input placeholders to current user data
        displayUserData();
    });

    closeEditBtn.addEventListener("click", function() {
        editProfileBtn.style.display = "inline-block";
        saveEditBtn.style.display = "none";
        cancelEditBtn.style.display = "none";
        closeEditBtn.style.display = "none";

        // Disable inputs and reset placeholders to current user data
        usernameInput.disabled = true;
        emailInput.disabled = true;
        bioInput.disabled = true;
        passwordInput.disabled = true;
        displayUserData();
    });
});
