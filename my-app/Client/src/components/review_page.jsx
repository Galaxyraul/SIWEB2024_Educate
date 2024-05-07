import React, { useState } from 'react';
import ReviewDocument from './review';
import Mailbox from './mailbox';
import Ad from './ads';

const ReviewPage = ({ user }) => {
    const [mails, setMails] = useState([
        { id: 1, fileType: 'text', content: 'Sample Text 1' },
        { id: 2, fileType: 'pdf', content: 'sample.pdf' },
        { id: 3, fileType: 'image', content: 'sample.jpg' },
    ]);

    const [selectedMail, setSelectedMail] = useState(null);

    const handleSelectMail = (mail) => {
        console.log("Selected mail:", mail);
        setSelectedMail(mail);
    };

    const removeMail = () => {
        setMails(mails.filter(mail => mail.id !== selectedMail.id));
        setSelectedMail(null); // Clear the selected mail after removing
    };

    return (
        <div className="flex">
            <Mailbox mails={mails} onSelectMail={handleSelectMail} />
            <ReviewDocument selectedMail={selectedMail} removeMail={removeMail} />
            <Ad />
        </div>
    );
};

export default ReviewPage;
