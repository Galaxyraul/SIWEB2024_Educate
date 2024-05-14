import React from 'react';
import './mailbox.css';

const Mailbox = ({ user, mails, onSelectMail, selectedMail,onRemoveMail}) => {
    const handleAccept = (mail) => {
        fetch(`http://localhost:5000/accept`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({mail:selectedMail.name,user:user.username}),
        })
        .then(response => response.json())
        .then(data => {});
        onRemoveMail(mail);
        user.addBalance(100)
    };
    const handleRefuse = (mail) => {
        fetch(`http://localhost:5000/refuse`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({mail:selectedMail.name,user:user.username}),
        })
        .then(response => response.json())
        .then(data => {});
        onRemoveMail(mail);
        user.addBalance(100)
    };
    return (
        <div className="mailbox-container">
            <h2>Documentos para revisar</h2>
            <div className="mail-list">
                {mails.map(mail => (
                    <div 
                        key={mail.name} 
                        className={`mail-item ${selectedMail && mail.name === selectedMail.name ? 'selected' : ''}`}
                        onClick={() => onSelectMail(mail)}
                    > 
                        <div>
                            <div><strong>Name:</strong> {mail.name}</div>
                            <div><strong>Description:</strong> {mail.description}</div>
                        </div>
                        <div className='accept-refuse'>
                            <button className = "accept" onClick={handleAccept}>&#10003;</button>
                            <button className = "refuse" onClick={handleRefuse}>&#10005;</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mailbox; 