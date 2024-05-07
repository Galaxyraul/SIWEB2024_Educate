import React from 'react';
import BuyCoins from './coins'; // Import your BuyCoins component
import Subscribe from './subscription'; // Import your Subscribe component

const PaymentsPage = () => {
    return (
        <div className="payments-container">
            <h1>Select Payment Option</h1>
            <BuyCoins />
            <Subscribe />
        </div>
    );
};

export default PaymentsPage;
