import React, { useState } from 'react';
import './styles.css';
import LoginRegister from '../../login_register'
import UserProfile from '../../account';
const Modal = ({ isOpen, onClose,user }) => {
  if (!isOpen) {
    return null;
  }
return (
    <div className="modal-overlay">
        <div className="modal-content">
            <div className = "right">
                <button className="close-btn" onClick={onClose}>
                    &times;
                </button>
            </div>
            {user.logged ? <UserProfile user={user} closeModal = {onClose} /> : <LoginRegister user={user} closeModal = {onClose} />}
        </div>
    </div>
    );
};

export default Modal;
