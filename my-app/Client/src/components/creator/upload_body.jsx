import React, { useState } from 'react';

const FileUploadBody = ({ files, onFilesChange }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [cards, setCards] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (e) => {
        setSelectedFiles(e.target.files[0]); 
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleTagsChange = (e) => {
        setTags(e.target.value);
    };

    const uploadFiles = () => {
        if (!selectedFiles) {
            alert('Please select a file to upload');
            return;
        }
    
        if (!title.trim() || !description.trim()) {
            alert('Title and description cannot be empty');
            return;
        }
    
        onFilesChange([selectedFiles]);
    
        // Replace the existing card with the new one
        setCards([{ fileName: selectedFiles.name, title, description }]);
    
        setSelectedFiles(null);
    };
    
    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
            <input type="text" placeholder="Description" value={description} onChange={handleDescriptionChange} />
            <input type="text" placeholder="Tags" value={tags} onChange={handleTagsChange} />
            <button onClick={uploadFiles}>Add</button>
            {cards.map((card, index) => (
                <div key={index}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <p>{card.fileName}</p>
                </div>
            ))}
        </div>
    );
};

export default FileUploadBody;