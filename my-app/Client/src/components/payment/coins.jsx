import React, { useState } from 'react';
import WatchVideo from './WatchVideo'; // Import the WatchVideo component


const CoinCard = ({ coin, user }) => {
    const handleBuy = () => {
        if (!user.logged) {
            alert('You must be logged in to buy coins.');
            return;
        }

        // Add your buy code here
    };

    return (
        <div>
            <h2>{coin.quantity}</h2>
            <button onClick={handleBuy}>Buy</button>
        </div>
    );
};

const Coins = ({ user }) => {
    const coins = [
        { quantity: 100 },
        { quantity: 200 },
        // Add more coins as needed
    ];

    const redeemReward = () => {
        if (!user.logged) {
            alert('You must be logged in to redeem rewards.');
            return;
        }

        // Add your redeem code here
    };

    return (
        <div>
            {coins.map((coin) => (
                <CoinCard key={coin.quantity} coin={coin} user={user} />
            ))}
            <h2>10 coins</h2>
            <WatchVideo user={user} redeemReward={redeemReward} />
        </div>
    );
};

export default Coins;