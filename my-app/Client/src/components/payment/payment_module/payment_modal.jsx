import React from 'react';
import Modal from 'react-modal';
import './payment_modal.css';
Modal.setAppElement('#root'); // This line is needed for accessibility reasons

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
    //TODO: Implement payment handling
    handlePayment = () => {
        if (this.state.paymentMethod === 'card') {
            console.log(`Payment made with card number: ${this.state.cardNumber}`);
        } else if (this.state.paymentMethod === 'paypal') {
            console.log(`Payment made with PayPal account: ${this.state.paypalEmail}`);
        }
        this.closeModal();
        this.props.onPayment();
    }

    selectPaymentMethod = (method) => {
        this.setState({paymentMethod: method});
    }



render() {
    const { user, object } = this.props;
    return (
        <div>
            <button className="modal-button" onClick={this.openModal}>Buy Now</button>
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                className="modal">
                <button className="close-button" onClick={this.closeModal}>X</button>
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
                <button className="modal-button" onClick={this.handlePayment}>Pagar:{this.props.object.price}€</button>
            </Modal>
        </div>
    );
}

}

export default PaymentOptionsModal;