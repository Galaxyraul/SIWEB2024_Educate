import React from 'react';

const LanguageDropdown = () => {
    return (
        <div id="idioma" className="tag">
            <div className="dropdown" id="idiomaDropdown">
                <h2 className="dropdown-toggle" id="idiomaButton"> Idioma </h2>
                {/* Dropdown Content Here */}
                <div className="dropdown-content">
                    <a href="#">
                        <img src="path/to/flag1.png" alt="Flag 1" className="flag-icon" />
                        English
                    </a>
                    <a href="#">
                        <img src="path/to/flag2.png" alt="Flag 2" className="flag-icon" />
                        Español
                    </a>
                    <a href="#">
                        <img src="path/to/flag3.png" alt="Flag 3" className="flag-icon" />
                        Français
                    </a>
                    {/* Add more languages here */}
                </div>
            </div>
        </div>
    );
};

export default LanguageDropdown;
