import React, { useState,useEffect } from 'react';
import './review_page.css';
import Mailbox from './mailbox/mailbox';
import ReviewDocument from './review_content/review_content';
import Ad from '../ads/ads';

const ReviewPage = ({user}) => {
    const [mails, setMails] = useState([]);

    useEffect(() => {
    fetch('http://localhost:5000/pending')
        .then(response => response.json())
        .then(data => {setMails(data);console.log(data);})
        .catch(error => console.error('Error:', error));
    }, []);

    const [selectedMail, setSelectedMail] = useState(null);

    const onRemoveMail = (mailToRemove) => {
        setMails(mails.filter(mail => mail.name !== mailToRemove.name));
        setSelectedMail(null);
    };
    const handleSelectMail = (mail) => {
        console.log("Selected mail:", mail);
        setSelectedMail(mail);
    };

    return (
        <div className="review-flex">
        {!user.logged || user.role !== 'reviewer' ? (
            <p className='ERROR-MESSAGE'>Tienes que haber iniciado sesión como revisor para acceder aquí</p>
        ) : (
            <>
            <Mailbox user = {user} mails={mails} onSelectMail={handleSelectMail} selectedMail={selectedMail} onRemoveMail={onRemoveMail} />
            <ReviewDocument selectedMail={selectedMail} removeMail={onRemoveMail} />
            <Ad />
            </>
        )};
        </div>
    );
};

export default ReviewPage;