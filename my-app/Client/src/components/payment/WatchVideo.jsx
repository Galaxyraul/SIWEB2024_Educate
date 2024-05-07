import React, { useState } from 'react';

const WatchVideo = ({ user, redeemReward }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        redeemReward();
    };

    if (!isOpen) {
        return <button onClick={handleOpen}>Watch Video</button>;
    }

    return (
        <>
            <div className="backdrop" onClick={handleClose} />
            <div className="video-container">
                <video src="your-video-url" controls onEnded={handleClose} />
            </div>
        </>
    );
};

export default WatchVideo;