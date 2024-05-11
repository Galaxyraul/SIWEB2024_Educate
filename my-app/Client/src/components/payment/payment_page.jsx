import React, { useState, useEffect }from 'react';
import Coin_Cards from './coin_card/coins_card'; 
import Ad_reward from './ad_reward/ad_reward';
import SubscriptionCard from './subscription_card/subscription';
import './payment_page.css'; 

const PaymentsPage = ({ user }) => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch('/api/subscriptions')
            .then(response => response.json())
            .then(data => setSubscriptions(data));

        fetch('/api/coins')
            .then(response => response.json())
            .then(data => setCoins(data));
    }, []);
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
