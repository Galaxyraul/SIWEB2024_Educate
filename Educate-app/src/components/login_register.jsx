import React, { useState } from 'react';
import '../styles/login_register.css'; // Import your login_register styles

const LoginRegister = () => {
    const [activeTab, setActiveTab] = useState('login');

    const switchToLogin = () => {
        setActiveTab('login');
    };

    const switchToRegister = () => {
        setActiveTab('register');
    };

    return (
        <section id="login">
            <div id="login_tags">
                <ul>
                    <li 
                        id="login_t" 
                        className={activeTab === 'login' ? 'active' : ''}
                        onClick={switchToLogin}
                    >
                        Login
                    </li>
                    <li 
                        id="register" 
                        className={activeTab === 'register' ? 'active' : ''}
                        onClick={switchToRegister}
                    >
                        Register
                    </li>
                </ul>
            </div>
            <div className="login_content">
                <form 
                    id="campos_login" 
                    className={activeTab === 'login' ? 'active-form' : ''}
                >
                    {/* Login Form Fields */}
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="login_username">Username</label>
                        <input type="text" id="login_username" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login_password">Password</label>
                        <input type="password" id="login_password" placeholder="Enter password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <form 
                    id="campos_register" 
                    className={activeTab === 'register' ? 'active-form' : ''}
                >
                    {/* Register Form Fields */}
                    <h2>Register</h2>
                    <div className="form-group">
                        <label htmlFor="register_username">Username</label>
                        <input type="text" id="register_username" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register_email">Email</label>
                        <input type="email" id="register_email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register_password">Password</label>
                        <input type="password" id="register_password" placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register_confirm_password">Confirm Password</label>
                        <input type="password" id="register_confirm_password" placeholder="Confirm password" />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </section>
    );
};

export default LoginRegister;
