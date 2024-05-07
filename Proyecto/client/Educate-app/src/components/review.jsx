// ReviewDocument.jsx
import React, { useState } from 'react';

const ReviewDocument = ({ selectedMail, removeMail }) => {
    const [isVisible, setIsVisible] = useState(false);

    const acceptDocument = () => {
        alert('Document accepted!');
        removeMail(); // Remove the selected mail from the mailbox
    };

    const refuseDocument = () => {
        alert('Document refused!');
        removeMail(); // Remove the selected mail from the mailbox
    };

    return (
        <div className="review-container">
            <h2>Review Document</h2>
            <iframe 
                srcDoc={selectedMail ? selectedMail.content : ''}
                title="Document Preview"
                style={{ display: isVisible ? 'block' : 'none' }}
                onLoad={() => setIsVisible(true)}
            ></iframe>
            <div className="review-actions" style={{ display: isVisible ? 'block' : 'none' }}>
                <button onClick={acceptDocument}>Accept</button>
                <button onClick={refuseDocument}>Refuse</button>
            </div>
        </div>
    );
};

export default ReviewDocument;
