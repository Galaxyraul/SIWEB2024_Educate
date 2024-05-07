import React from 'react';

const Mailbox = ({ mails, onSelectMail }) => {
    return (
        <div className="mailbox-container">
            <h2>Mailbox</h2>
            <div className="mail-list">
                {mails.map(mail => (
                    <div 
                        key={mail.id} 
                        className="mail-item"
                        onClick={() => onSelectMail(mail)}
                    >
                        {mail.fileType.toUpperCase()} - {mail.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mailbox;
