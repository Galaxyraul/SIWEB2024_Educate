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

    render() {
        const { coin } = this.props;
        return (
            <div className="coin-card">
                <h2>{coin.name}</h2>
                <img src={"https://d118flx1-5000.uks1.devtunnels.ms/resources/" + coin.image_path} alt="Coin" />
                <p>Cantidad: {coin.quantity}</p>
                <p>Precio: {coin.price}€</p>
                <PaymentOptionsModal 
                    isOpen={this.state.modalIsOpen} 
                    onRequestClose={this.closeModal} 
                    price={coin.price}
                    coins = {coin.quantity}
                    isSubscription={false}
                    user={this.props.user}
                    type={coin.name}
                />
            </div>
        );
    }
}

export default CoinCard;