import React from 'react';
import Coin_Cards from './coin_card/coins_card'; 
import Ad_reward from './ad_reward/ad_reward';
import SubscriptionCard from './subscription_card/subscription';
import './payment_page.css'; 

const PaymentsPage = ({ user }) => {
    const subscriptions = [
        { name: 'Premium', features: ['Feature 1', 'Feature 2'], duration: '1 month', price: '10' },
        { name: 'Basic', features: ['Feature 3', 'Feature 4'], duration: '1 month', price: '5' },
        { name: 'Pro', features: ['Feature 5', 'Feature 6'], duration: '1 month', price: '15'}
    ];
    const coins = [
        { name: 'Gold Coin', image: '/path/to/image', quantity: 100, price: '10' },
        { name: 'Silver Coin', image: '/path/to/image', quantity: 50, price: '5' },
        { name: 'Bronze Coin', image: '/path/to/image', quantity: 25, price: '2.5' }
    ];
    return (
        <div className="payments-container">
            <h2>Monedas</h2>
            <div className='coins'>
            {coins.map((coin, index) => (
                    <Coin_Cards user = {user} coin = {coin}/>
                ))}
                
            </div>
            <h2>Subscricciones</h2>
            <div className='subscriciones'>
                {subscriptions.map((subscription, index) => (
                    <SubscriptionCard key={index} subscription={subscription} />
                ))}
            </div>
            <h2>Patrocinado</h2>
            <div>
                <Ad_reward />
            </div>
        </div>
    );
};

export default PaymentsPage;
