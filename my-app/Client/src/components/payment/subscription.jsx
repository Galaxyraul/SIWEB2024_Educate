import React, { useState } from 'react';
import '../../styles/coins.css';

const SubscriptionCard = ({ subscription, user, isOpen, handleOpen, handleClose }) => {
    const handleBuy = () => {
        if (!user.logged) {
            alert('You must be logged in to buy a subscription.');
            return;
        }

        // Add your buy code here

        handleClose();
    };

    return (
        <div onClick={() => handleOpen(subscription.type)}>
            <h2>{subscription.type}</h2>
            {isOpen && (
                <div>
                    <p>{subscription.description}</p>
                    <button onClick={handleBuy}>Buy</button>
                </div>
            )}
        </div>
    );
};

const Subscribe = ({ user }) => {
    const subscriptions = [
        { type: 'Basic', description: 'This is the basic subscription.' },
        { type: 'Premium', description: 'This is the premium subscription.' },
        // Add more subscriptions as needed
    ];

    const [openSubscription, setOpenSubscription] = useState(null);

    const handleOpen = (type) => {
        setOpenSubscription(type);
    };

    const handleClose = () => {
        setOpenSubscription(null);
    };

    return (
        <div>
            {subscriptions.map((subscription) => (
                <SubscriptionCard
                    key={subscription.type}
                    subscription={subscription}
                    user={user}
                    isOpen={openSubscription === subscription.type}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                />
            ))}
        </div>
    );
};

export default Subscribe;