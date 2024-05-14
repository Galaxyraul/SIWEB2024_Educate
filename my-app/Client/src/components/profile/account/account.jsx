import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './account.css';

const UserProfile = ({ user, closeModal }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [mail, setMail] = useState();
    const [cPassword, setCPassword] = useState();


    const handleSave = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (mail && !emailRegex.test(mail)) {
            alert('Formato de email incorrecto');
            return;
        }

        if (password !== cPassword) {
            alert('Las contraseñas tienen que ser la misma');
            return;
        }

        let requestBody = {
            nick: username,
        };

        if (mail) {
            requestBody.mail = mail;
        }

        if (password) {
            requestBody.password = password;
        }

        fetch('http://localhost:5000/editUser', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                alert("User data updated successfully");
                setIsEditMode(false);
                closeModal();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const handleCancel = () => {
        setIsEditMode(false);
    };

    if (isEditMode) {
        return (
            <div className="account">
                <h3>Usuario</h3>
                <input type="text" value={user.username}readOnly/>
                <h3>Correo</h3>
                <input type="text" value={mail} placeholder= {user.mail}/>
                <h3>Contraseña</h3>
                <input type="password" value={password} placeholder= {user.password}/>
                <h3>Confirmar Contraseña</h3>
                <input type="password" value={cPassword} placeholder= {user.password}/>
                <div>
                    <button onClick={handleSave}>Guardar</button>
                    <button onClick={handleCancel}>Cancelar</button>
                </div>
            </div>
        );
    }
    const navigate = useNavigate();
    const handleLogout = () => {
        user.logout();
        closeModal();
        navigate('/landing');
    };
    return (
        <div className="account">
            <h3>
                Usuario
            </h3>
            <input type="text" value={user.username}readOnly />
            <h3>
                Correo
            </h3>
            <input type="text" value={user.mail}readOnly />
            <div>
                <button onClick={() => {setIsEditMode(true)}}>Editar</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default UserProfile;