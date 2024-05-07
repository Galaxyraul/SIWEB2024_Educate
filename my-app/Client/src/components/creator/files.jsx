import React, { useState } from 'react';

const FileUploadModule = () => {
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleFileChange = (e) => {
        setFiles([...e.target.files]);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const uploadFile = () => {
        if (files.length === 0 || !title || !description) {
            alert('Please fill in all fields and select a file.');
            return;
        }

        const uploaded = files.map((file) => ({
            file,
            title,
            description,
        }));

        setFiles([]);

        // Display uploaded files
        return uploaded.map((uploadedFile, index) => (
            <div key={index} className="file-block">
                <p>Title: {uploadedFile.title}</p>
                <p>Description: {uploadedFile.description}</p>
                <p>File Name: {uploadedFile.file.name}</p>
                <p>File Type: {uploadedFile.file.type}</p>
            </div>
        ));
    };

    return (
        <div className="container">
            <h1>File Upload Module</h1>

            <label htmlFor="fileInput">Upload File:</label>
            <input
                type="file"
                id="fileInput"
                accept=".txt, .pdf, .doc, .docx"
                multiple
                onChange={handleFileChange}
            />

            <label htmlFor="titleInput">Title:</label>
            <input
                type="text"
                id="titleInput"
                value={title}
                onChange={handleTitleChange}
            />

            <label htmlFor="descriptionInput">Description:</label>
            <textarea
                id="descriptionInput"
                rows="4"
                value={description}
                onChange={handleDescriptionChange}
            ></textarea>

            <button onClick={uploadFile}>Upload</button>

            <div id="output">
                {files.length > 0 && uploadFile()}
            </div>
        </div>
    );
};

export default FileUploadModule;
