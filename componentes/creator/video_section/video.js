document.addEventListener("DOMContentLoaded", function() {
    const addVideoBtn = document.getElementById("addVideoBtn");
    const videoCards = document.getElementById("videoCards");

    // Video Card Creation
    addVideoBtn.addEventListener("click", function() {
        const card = document.createElement("div");
        card.className = "video-card";
        videoCards.appendChild(card);
        card.innerHTML = `
            <input type="text" placeholder="Video Title" class="video-title">
            <iframe width="300" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
            <textarea placeholder="Description" class="video-description"></textarea>
            <button onclick="editVideoCard(this)">Save</button>
            <button onclick="removeVideoCard(this)">Remove</button>
        `;
    });

    // Edit Video Card
    window.editVideoCard = function(btn) {
        const card = btn.parentElement;
        let titleInput = card.querySelector(".video-title");
        let descriptionInput = card.querySelector(".video-description");

        if (btn.textContent === "Edit") {
            const title = titleInput ? titleInput.value : "";
            const description = descriptionInput ? descriptionInput.value : "";

            card.innerHTML = `
                <input type="text" placeholder="Video Title" class="video-title" value="${title}">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                <textarea placeholder="Description" class="video-description">${description}</textarea>
                <button onclick="editVideoCard(this)">Save</button>
                <button onclick="removeVideoCard(this)">Remove</button>
            `;
        } else {
            titleInput = card.querySelector(".video-title");
            descriptionInput = card.querySelector(".video-description");
            const title = titleInput.value;
            const description = descriptionInput.value;

            card.innerHTML = `
                <h3>${title}</h3>
                <iframe width="300" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                <p>${description}</p>
                <button onclick="editVideoCard(this)">Edit</button>
                <button onclick="removeVideoCard(this)">Remove</button>
            `;
        }
    }

    // Remove Video Card
    window.removeVideoCard = function(btn) {
        const card = btn.parentElement;
        videoCards.removeChild(card);
    }
});
