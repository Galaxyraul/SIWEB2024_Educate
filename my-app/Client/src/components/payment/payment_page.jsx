import React, { useState, useEffect }from 'react';
import Coin_Cards from './coin_card/coins_card'; 
import Ad_reward from './ad_reward/ad_reward';
import SubscriptionCard from './subscription_card/subscription';
import './payment_page.css'; 

const PaymentsPage = ({ user }) => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/subscription_types')
        .then(response => response.json())
        .then(data => {setSubscriptions(data);})
        .catch(error => console.error('Error:', error));

        fetch('http://localhost:5000/coins_pack')
        .then(response => response.json())
        .then(data => {setCoins(data);})
        .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="payments-container">
            <h1>Monedas</h1>
            <div className='coins'>
            {coins.map((coin, index) => (
                    <Coin_Cards user = {user} coin = {coin}/>
                ))}
                
            </div>
            <h1>Subscricciones</h1>
            <div className='subscriciones'>
                {subscriptions.map((subscription, index) => (
                    <SubscriptionCard key={index} user ={user} subscription={subscription} />
                ))}
            </div>
            <h1>Patrocinado</h1>
            <div>
                <Ad_reward user = {user}/>
            </div>
        </div>
    );
};

export default PaymentsPage;
