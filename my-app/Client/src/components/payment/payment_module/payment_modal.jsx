import React from 'react';
import Modal from 'react-modal';
import './payment_modal.css';
Modal.setAppElement('#root'); 

class PaymentOptionsModal extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            paypalEmail: '',
            paypalPassword: '',
            paymentMethod: 'card',
        };
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handlePayment = () => {
        const { user, type, isSubscription } = this.props;
        const userId = user.username;
        let url = 'http://localhost:5000';
        let body = {};

        if (isSubscription) {
            console.log(`Payment made for subscription: ${type}`);
            url += '/subscriptions/insert';
            body = { user_nick: userId, subscription_name: type }; // replace 1 with actual duration
        } else {
            console.log(`Payment made for coin pack: ${type}`);
            url += '/purchases/insert';
            body = { user_nick: userId, coin_pack_name: type };
            user.addBalance(this.props.coins);
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(data => {
            this.closeModal();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    selectPaymentMethod = (method) => {
        this.setState({paymentMethod: method});
    }



render() {
    
    return (
    <div>
        <button className="modal-button" onClick={this.openModal}>Comprar ahora</button>
        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            className="modal">
            <button className="close-button" onClick={this.closeModal}>X</button>
            {this.props.user.logged ? (
                <div>
                    <h2 className="modal-title">Selecciona método<br/> de pago</h2>
                    <div className="payment-methods">
                        <div className={`payment-method ${this.state.paymentMethod === 'card' ? 'selected' : ''}`} onClick={() => this.selectPaymentMethod('card')}>Card</div>
                        <div className={`payment-method ${this.state.paymentMethod === 'paypal' ? 'selected' : ''}`} onClick={() => this.selectPaymentMethod('paypal')}>PayPal</div>
                    </div>
                    <div className="payment-details">
                        {this.state.paymentMethod === 'card' && (
                            <div className="payment-option-background">
                                <input className="modal-input" type="text" name="cardNumber" placeholder="Card Number" onChange={this.handleInputChange} />
                                <input className="modal-input" type="text" name="expiryDate" placeholder="Expiry Date" onChange={this.handleInputChange} />
                                <input className="modal-input" type="text" name="cvv" placeholder="CVV" onChange={this.handleInputChange} />
                            </div>
                        )}
                        {this.state.paymentMethod === 'paypal' && (
                            <div className="payment-option-background">
                                <input className="modal-input" type="text" name="paypalEmail" placeholder="PayPal Email" onChange={this.handleInputChange} />
                                <input className="modal-input" type="password" name="paypalPassword" placeholder="PayPal Password" onChange={this.handleInputChange} />
                            </div>
                        )}
                    </div>
                    <button className="modal-button" onClick={this.handlePayment}>Pagar:{this.props.price}€</button>
                </div>
            ) : (
                <div>Para realizar una compra debe haber iniciado sesión</div>
            )}
        </Modal>
    </div>
);
}

}

export default PaymentOptionsModal;