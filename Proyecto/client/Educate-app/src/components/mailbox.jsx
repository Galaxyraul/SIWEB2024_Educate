import React from 'react';

const Mailbox = ({ docs, onSelectDoc }) => {
    return (
        <div className="mailbox-container">
            <h2>Mailbox</h2>
            <div className="mail-list">
                {docs.map(doc => (
                    <div 
                        key={mail.id} 
                        className="mail-item"
                        onClick={() => onSelectDoc(doc)}
                    >
                        {doc.fileType.toUpperCase()} - {doc.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mailbox;
