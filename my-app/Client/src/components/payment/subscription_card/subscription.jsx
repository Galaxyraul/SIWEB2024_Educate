import React, { Component } from 'react';
import PaymentOptionsModal from '../payment_module/payment_modal';
import './subscription.css';


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
        const { name, price,description,coins_per_day,duration } = this.props.subscription;
        const user = this.props.user;	
        return (
            <div className="subscription-card">
                <h2>{name}</h2>
                <p>Descripción:<br/>{description}</p>
                <p>Duración: {duration} días</p>
                <p>Monedas diarias:{coins_per_day}</p>
                <PaymentOptionsModal 
                    isOpen={this.state.modalIsOpen} 
                    onRequestClose={this.closeModal} 
                    onPayment={() => this.handlePayment(price)} 
                    price={price}
                    type={name}
                    user={user}
                    isSubscription={true}
                />
            </div>
        );
    }
}

export default SubscriptionCard;