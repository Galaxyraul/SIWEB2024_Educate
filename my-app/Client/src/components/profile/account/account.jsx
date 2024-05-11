import React, { useState } from 'react';
import './account.css';

const UserProfile = ({ user, closeModal }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [mail, setMail] = useState();
    const [cPassword, setCPassword] = useState();


    const handleSave = () => {
        user.update(username,mail, password,cPassword);
        setIsEditMode(false);
        closeModal()
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
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        );
    }

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
                <button onClick={() => {setIsEditMode(true)}}>Edit</button>
                <button onClick={() => {user.logout();closeModal()}}>Logout</button>
            </div>
        </div>
    );
};

export default UserProfile;