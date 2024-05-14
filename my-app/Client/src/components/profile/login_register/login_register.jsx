import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login_register.css';

const LoginRegister = ({ user, closeModal }) => {
    const [activeTab, setActiveTab] = useState('login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');  
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
        if (!username || !password) {
            setErrorMessage('Los campos usuario y contraseña son obligatorios');
        setActiveTab('error');
        return;
        }
    
        console.log(username, password);
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nick: username,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'User not found') {
                setErrorMessage('Credenciales inválidas');
                setActiveTab('error');
            } else if(data.message === 'Invalid credentials') {
                setErrorMessage('Credenciales inválidas');
                setActiveTab('error');
            } else{
                user.login(data.user.nick,data.user.mail,data.user.coins);
                closeModal();
                navigate('/home');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    
    const handleRegister = () => {
        if (!username || !email || !password) {
            setErrorMessage('Los campos usuario, email y contraseña son obligatorios');
            setActiveTab('error');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Formato de mail incorrecto');
            setActiveTab('error');
            return;
        }
        if (confirmPassword !== password) {
            setErrorMessage('Las contraseñas no coinciden');
            setActiveTab('error');
            return;
        }
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nick: username,
                mail: email,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'User registered successfully') {
                user.register(username,email);
                closeModal();
                navigate('/home');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        closeModal();
    };
    
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
                    Acceder
                </button>
                <button 
                className={activeTab === 'register' ? 'selected' : ''} 
                onClick={() => setActiveTab('register')}
                >
                    Registro
                </button>
            </div>

            {activeTab === 'login' && (
                <div className='user-input'>
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder="Usuario" />
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder="Contraseña" />
                    <button onClick={() => {handleLogin();}}>Enviar</button>
                </div>
            )}

            {activeTab === 'register' && (
                <div className='user-input'>
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder="Usuario" />
                    <input type="email" value={email} onChange={handleEmailChange} placeholder="Correo" />
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder="Contraseña" />
                    <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirmar contraseña" />
                    <button onClick={() => {handleRegister();}}>Submit</button>
                </div>
                )}
            {activeTab === 'error' && (
                <div className='error'>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
};

export default LoginRegister;