import React from 'react';
import '../styles/review.css'; // Import your review styles

const ReviewDocument = ({ fileType, fileUrl }) => {

    const acceptDocument = () => {
        alert('Document accepted!');
    };

    const refuseDocument = () => {
        alert('Document refused!');
    };

    const renderFile = () => {
        if (!fileType || !fileUrl) {
            return <div>No document selected.</div>;
        }

        switch (fileType) {
            case 'pdf':
                return <iframe src={fileUrl} title="Document Preview" width="100%" height="600px"></iframe>;
            case 'image':
                return <img src={fileUrl} alt="Document Preview" style={{ width: '100%', maxHeight: '600px' }} />;
            case 'text':
                return <object data={fileUrl} type="text/plain" width="100%" height="600px" aria-label="Document Preview"></object>;
            default:
                return <div>File type not supported.</div>;
        }
    };

    return (
        <div className="review-container">
            <h2>Review Document</h2>
            
            <div className="document-preview">
                {renderFile()}
            </div>
            
            <div className="review-actions">
                <button onClick={acceptDocument}>Accept</button>
                <button onClick={refuseDocument}>Refuse</button>
            </div>
        </div>
    );
};

export default ReviewDocument;
