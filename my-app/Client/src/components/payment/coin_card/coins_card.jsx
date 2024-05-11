import React, { Component } from 'react';
import PaymentOptionsModal from '../payment_module/payment_modal';
import './coins_card.css';
class CoinCard extends Component {
    state = {
        modalIsOpen: false,
    };

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    handlePayment = () => {
        fetch('/api/pay_s', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.props),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Payment successful:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        this.closeModal();
    };
    render() {
        const { coin } = this.props;
        return (
            <div className="coin-card">
                <h2>{coin.name}</h2>
                <img src={coin.image} alt="Coin" />
                <p>Cantidad: {coin.quantity}</p>
                <p>Precio: {coin.price}€</p>
                <PaymentOptionsModal 
                    isOpen={this.state.modalIsOpen} 
                    onRequestClose={this.closeModal} 
                    price={coin.price}
                />
            </div>
        );
    }
}

export default CoinCard;