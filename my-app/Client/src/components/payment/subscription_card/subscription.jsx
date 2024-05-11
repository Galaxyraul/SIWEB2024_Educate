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

    handlePayment = () => {
        fetch('/api/pay_s', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.props.subscription),
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