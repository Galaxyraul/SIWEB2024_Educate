import React, { useState } from 'react';


const Excercises = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedTags, setSelectedTags] = useState([]);
    const [showTagModal, setShowTagModal] = useState(false);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const toggleTagSelection = (tagName) => {
        if (selectedTags.includes(tagName)) {
            setSelectedTags(prevTags => prevTags.filter(tag => tag !== tagName));
        } else {
            setSelectedTags(prevTags => [...prevTags, tagName]);
        }
    };

    const addTags = () => {
        if (selectedTags.length === 0) {
            alert('Please select at least one tag.');
            return;
        }

        // Display selected tags
        const output = document.getElementById('output');
        const selectedTagsElement = document.createElement('p');
        selectedTagsElement.innerHTML = `Selected Tags: ${selectedTags.join(', ')}`;
        output.appendChild(selectedTagsElement);

        setShowTagModal(false);

        // Clear selected tags
        setSelectedTags([]);
    };

    return (
        <div className="container">
            <h1>File Upload with Tags</h1>

            <label htmlFor="fileInput">Upload File:</label>
            <input 
                type="file" 
                id="fileInput" 
                accept=".txt, .pdf, .doc, .docx" 
                onChange={handleFileChange}
            />

            <button onClick={() => setShowTagModal(true)}>Add Tags</button>

            <div id="output"></div>

            {/* Tag Modal */}
            {showTagModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={() => setShowTagModal(false)}>&times;</span>
                        <h2>Select Tags</h2>
                        <div id="tagsContainer">
                            <span 
                                className={selectedTags.includes('Tag1') ? 'tag selected' : 'tag'} 
                                onClick={() => toggleTagSelection('Tag1')}
                            >
                                Tag1
                            </span>
                            <span 
                                className={selectedTags.includes('Tag2') ? 'tag selected' : 'tag'} 
                                onClick={() => toggleTagSelection('Tag2')}
                            >
                                Tag2
                            </span>
                            <span 
                                className={selectedTags.includes('Tag3') ? 'tag selected' : 'tag'} 
                                onClick={() => toggleTagSelection('Tag3')}
                            >
                                Tag3
                            </span>
                        </div>
                        <button onClick={addTags}>Add Selected Tags</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Excercises;
