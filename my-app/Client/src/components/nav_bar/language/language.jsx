import React from 'react';
import './styles.css'

const LanguageDropdown = () => {
    return (
        <div id="idioma" className="tag">
            <div className="dropdown" id="idiomaDropdown">
                <h2 className="dropdown-toggle" id="idiomaButton"> <img src="http://localhost:5000/resources/images/language.png" alt="" /> </h2>
                <div className="dropdown-content">
                    <a href="#">
                        <img src="http://localhost:5000/resources/images/flags/uk.png" alt="Flag 1" className="flag-icon" />
                        English
                    </a>
                    <a href="#">
                        <img src="http://localhost:5000/resources/images/flags/spain.png" alt="Flag 2" className="flag-icon" />
                        Español
                    </a>
                    <a href="#">
                        <img src="http://localhost:5000/resources/images/flags/french.png" alt="Flag 3" className="flag-icon" />
                        Français
                    </a>
                    {/* Add more languages here */}
                </div>
            </div>
        </div>
    );
};

export default LanguageDropdown;
