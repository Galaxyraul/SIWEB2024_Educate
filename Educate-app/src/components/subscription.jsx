import React from 'react';
import '../styles/coins.css';

const Subscribe = () => {
    const openPaymentTab = (optionName, price) => {
        const paymentUrl = `payment.html?option=${optionName}&price=${price}`;
        window.open(paymentUrl, '_blank');
    };

    return (
        <div className="subscribe-container">
            <h2>Subscribe</h2>
            <div id="subscriptionOptions" className="cards-container">
                <div className="card" onClick={() => openPaymentTab('Basic Plan', 10)}>
                    <img src="subscription-icon1.png" alt="Subscription Option 1" />
                    <h3>Basic Plan</h3>
                    <p>$10/month</p>
                    <button>Subscribe Now</button>
                </div>

                <div className="card" onClick={() => openPaymentTab('Standard Plan', 20)}>
                    <img src="subscription-icon2.png" alt="Subscription Option 2" />
                    <h3>Standard Plan</h3>
                    <p>$20/month</p>
                    <button>Subscribe Now</button>
                </div>

                <div className="card" onClick={() => openPaymentTab('Premium Plan', 30)}>
                    <img src="subscription-icon3.png" alt="Subscription Option 3" />
                    <h3>Premium Plan</h3>
                    <p>$30/month</p>
                    <button>Subscribe Now</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
