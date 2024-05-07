import React, { useState } from 'react';
import '../styles/ledger.css'; // Import your ledger styles

const Ledger = ({user}) => {
    const [subscriptionStatus, setSubscriptionStatus] = useState('Active - Premium Plan');
    const [coinBalance, setCoinBalance] = useState('1000 Coins');
    const [autoPayEnabled, setAutoPayEnabled] = useState(false);

    useEffect(() => {
        setSubscriptionStatus(user.subscriptionStatus);
        setCoinBalance(user.coinBalance);
        setAutoPayEnabled(user.autoPayEnabled);
    }, [user]);
    
    const renewSubscription = () => {
        // Replace with your renew subscription logic
        alert('Subscription renewed!');
    };

    const toggleAutoPay = () => {
        setAutoPayEnabled(!autoPayEnabled);
        if (!autoPayEnabled) {
            alert('AutoPay enabled!');
        } else {
            alert('AutoPay cancelled!');
        }
    };

    const addCoins = () => {
        // Replace with your add coins logic
        alert('Coins added!');
    };

    return (
        <div className="ledger-container">
            <h2>Your Ledger</h2>
            <div className="ledger-content">
                <div className="subscription-status">
                    <h3>Subscription Status</h3>
                    <p>{subscriptionStatus}</p>
                    <button onClick={renewSubscription}>Renew Subscription</button>
                    <button onClick={toggleAutoPay}>
                        {autoPayEnabled ? 'Cancel AutoPay' : 'Enable AutoPay'}
                    </button>
                </div>
                
                <div className="coin-balance">
                    <h3>Coin Balance</h3>
                    <p>{coinBalance}</p>
                    <button onClick={addCoins}>Add Coins</button>
                </div>
            </div>
        </div>
    );
};

export default Ledger;
