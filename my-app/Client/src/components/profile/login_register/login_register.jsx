import React, { useState } from 'react';
import './login_register.css';
const LoginRegister = ({ user, closeModal }) => {
    const [activeTab, setActiveTab] = useState('login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');  
    
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    return (
        <div className='login-register'> 
            <div className='login-tabs'>
                <button 
                className={activeTab === 'login' ? 'selected' : ''} 
                onClick={() => setActiveTab('login')}
                >
                    Login
                </button>
                <button 
                className={activeTab === 'register' ? 'selected' : ''} 
                onClick={() => setActiveTab('register')}
                >
                    Register
                </button>
            </div>

            {activeTab === 'login' && (
                <div className='user-input'>
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                    <button onClick={() => {user.login();closeModal()}}>Submit</button>
                </div>
            )}

            {activeTab === 'register' && (
                <div className='user-input'>
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
                    <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                    <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm Password" />
                    <button onClick={() => {user.register();closeModal()}}>Submit</button>
                </div>
                )}
        </div>
    );
};

export default LoginRegister;