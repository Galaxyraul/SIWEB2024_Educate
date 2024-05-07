import React, { useState } from 'react';
import '../styles/profile.css';

const Profile = () => {
    const [userData, setUserData] = useState({
        username: "JohnDoe",
        email: "johndoe@example.com",
        bio: "This is my bio."
    });
    const [isEditing, setIsEditing] = useState(false);
    const [newPassword, setNewPassword] = useState('');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        if (newPassword) {
            console.log("Password changed:", newPassword);
        }
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="user-module">
            <h2>User Profile</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="usernameInput" 
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="emailInput" 
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                />
            </div>
            <div>
                <label htmlFor="bio">Bio:</label>
                <textarea 
                    id="bioInput"
                    name="bio"
                    value={userData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                ></textarea>
            </div>
            <div>
                <label htmlFor="password">New Password:</label>
                <input 
                    type="password" 
                    id="passwordInput" 
                    name="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    disabled={!isEditing}
                />
            </div>
            <div id="editButtons">
                {!isEditing ? (
                    <button id="editProfileBtn" onClick={handleEditClick}>Edit Profile</button>
                ) : (
                    <>
                        <button id="saveEditBtn" onClick={handleSaveClick}>Save</button>
                        <button id="cancelEditBtn" onClick={handleCancelClick}>Cancel</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;
