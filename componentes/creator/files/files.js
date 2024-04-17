let uploadedFiles = [];

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const titleInput = document.getElementById('titleInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const output = document.getElementById('output');

    if (fileInput.files.length === 0 || !titleInput.value || !descriptionInput.value) {
        alert('Please fill in all fields and select a file.');
        return;
    }

    for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];
        const title = titleInput.value;
        const description = descriptionInput.value;

        uploadedFiles.push({ file, title, description });

        // Display uploaded file as a block
        const fileBlock = document.createElement('div');
        fileBlock.className = 'file-block';
        fileBlock.innerHTML = `
            <p>Title: ${title}</p>
            <p>Description: ${description}</p>
            <p>File Name: ${file.name}</p>
            <p>File Type: ${file.type}</p>
        `;
        output.appendChild(fileBlock);
    }

    // Clear input fields after uploading
    fileInput.value = '';
    titleInput.value = '';
    descriptionInput.value = '';
}
