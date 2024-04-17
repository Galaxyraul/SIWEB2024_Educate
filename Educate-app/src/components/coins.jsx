import React, { useState } from 'react';
import '../styles/coins.css'; // Import your modal styles

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>X</button>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

const BuyCoins = () => {
    const [videoWatched, setVideoWatched] = useState(false);
    const [showClaimButton, setShowClaimButton] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const openPaymentTab = (optionName, price) => {
        const paymentUrl = `payment.html?option=${optionName}&price=${price}`;
        window.open(paymentUrl, '_blank');
    };

    const openVideoModal = () => {
        setIsVideoModalOpen(true);
        setShowClaimButton(false);

        setTimeout(() => {
            setShowClaimButton(true);
            setVideoWatched(true);
        }, 5000);
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
        setShowClaimButton(false);
        setVideoWatched(false);
    };

    const claimCoins = () => {
        if (videoWatched) {
            alert('Coins claimed! Check your account.');
            setShowClaimButton(false);
            setVideoWatched(false);
            closeVideoModal();
        } else {
            alert('Please watch the video first.');
        }
    };

    return (
        <div className="coins-container">
            <h1>Buy Coins</h1>
            <div id="purchaseOptions" className="cards-container">
                <div className="card" onClick={() => openPaymentTab('100 Coins', 10)}>
                    <img src="coin-icon.png" alt="100 Coins" />
                    <h3>100 Coins</h3>
                    <p>$10</p>
                    <button>Buy Now</button>
                </div>

                <div className="card" onClick={() => openPaymentTab('500 Coins', 40)}>
                    <img src="coin-icon.png" alt="500 Coins" />
                    <h3>500 Coins</h3>
                    <p>$40</p>
                    <button>Buy Now</button>
                </div>

                <div className="card" onClick={() => openPaymentTab('1000 Coins', 75)}>
                    <img src="coin-icon.png" alt="1000 Coins" />
                    <h3>1000 Coins</h3>
                    <p>$75</p>
                    <button>Buy Now</button>
                </div>

                <div className="card" id="videoCard">
                    <img src="video-icon.png" alt="Video Option" />
                    <h3>Video Option</h3>
                    <p>Watch a video ad to claim coins</p>
                    <button onClick={openVideoModal}>Watch Video</button>
                </div>
            </div>

            <Modal isOpen={isVideoModalOpen} onClose={closeVideoModal}>
                <p>Simulated video ad here...</p>
                {showClaimButton && <button onClick={claimCoins}>Claim Coins</button>}
            </Modal>
        </div>
    );
};

export default BuyCoins;
