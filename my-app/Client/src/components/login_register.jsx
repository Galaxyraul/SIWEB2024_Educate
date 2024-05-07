import React, { useState } from 'react';

const LoginRegister = ({ user, closeModal }) => {
    const [activeTab, setActiveTab] = useState('login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        await user.login(username, password);
        closeModal();
    };

    const handleRegister = async () => {
        await user.register(username, password);
        closeModal();
    };

    return (
        <div>
            <div>
                <button onClick={() => setActiveTab('login')}>Login</button>
                <button onClick={() => setActiveTab('register')}>Register</button>
            </div>

            {activeTab === 'login' && (
                <div>
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                    <button onClick={handleLogin}>Submit</button>
                </div>
            )}

            {activeTab === 'register' && (
                <div>
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                    <button onClick={handleRegister}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default LoginRegister;