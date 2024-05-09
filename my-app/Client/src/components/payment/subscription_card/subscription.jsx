import React, { Component } from 'react';
import PaymentOptionsModal from '../payment_module/payment_modal';
import './subscription.css'; // Import the CSS file


class SubscriptionCard extends Component {
    state = {
        modalIsOpen: false,
    };

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    handlePayment = (price) => {
        console.log(`Payment made for subscription: ${price}`);
        this.closeModal();
    };

    render() {
        const { name, features, duration, price } = this.props.subscription;
        return (
            <div className="subscription-card">
                <h2>{name}</h2>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <p>Duration: {duration}</p>
                <p>Precio: {price}€</p>
                <PaymentOptionsModal 
                    isOpen={this.state.modalIsOpen} 
                    onRequestClose={this.closeModal} 
                    onPayment={() => this.handlePayment(price)} 
                    price={price}
                />
            </div>
        );
    }
}

export default SubscriptionCard;