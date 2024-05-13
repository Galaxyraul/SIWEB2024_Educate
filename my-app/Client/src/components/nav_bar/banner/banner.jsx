import React from 'react';
import './styles.css'

const HeadingBanner = ({ title, subtitle, background }) => {
    return (
        <div className="heading-banner">
            <h1 className="heading">{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
        </div>
    );
};

export default HeadingBanner;
