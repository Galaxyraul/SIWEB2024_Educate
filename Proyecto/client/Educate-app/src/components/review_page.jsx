import React, { useState } from 'react';
import ReviewDocument from './review';
import Mailbox from './mailbox';
import Ad from './ads';

const ReviewPage = () => {
    const [pendingDoc, setDoc] = useState([]);
    useEffect(() => {
        fetch('/path/to/your/api')
            .then(response => response.json())
            .then(data => setDoc(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const [selectedDoc, setSelectedDoc] = useState(null);

    const handleSelectDoc = (pendingDoc) => {
        console.log("Selected mail:", pendingDoc);
        setSelectedDoc(pendingDoc);
    };

    const removeDoc = () => {
        setDoc(pendingDoc.filter(pendingDoc => pendingDoc.id !== selectedDoc.id));
        setSelectedDoc(null); // Clear the selected mail after removing
    };

    return (
        <div className="flex">
            <Mailbox docs={pendingDoc} onSelectDoc={handleSelectDoc} />
            <ReviewDocument selectedDoc={selectedDoc} removeMail={removeDoc} />
            <Ad />
        </div>
    );
};

export default ReviewPage;
