import React, { useState } from 'react';

const UserProfile = ({ user, closeModal }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSave = () => {
        if(username && user.username !== username) {
          user.username = username;
        }
        if(password && user.password !== password) {
          user.password = password;
          user.update()
        }
        setIsEditMode(false);
    };

    const handleCancel = () => {
        setIsEditMode(false);
    };

    if (isEditMode) {
        return (
            <div>
                <input type="text" value={username} onChange={handleUsernameChange} />
                <input type="password" value={password} onChange={handlePasswordChange} />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        );
    }

    return (
        <div>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
            <button onClick={() => setIsEditMode(true)}>Edit</button>
        </div>
    );
};

export default UserProfile;