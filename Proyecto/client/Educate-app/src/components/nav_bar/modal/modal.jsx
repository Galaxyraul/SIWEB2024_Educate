import React, { useState } from 'react';
import './styles.css';
import LoginRegister from '../../login_register'

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

return (
    <div className="modal-overlay">
        <div className="modal-content">
            <div class = "right">
                <button className="close-btn" onClick={onClose}>
                    &times;
                </button>
            </div>
            <LoginRegister/>
        </div>
    </div>
    );
};

export default Modal;
