import React from 'react';

const HeadingBanner = ({ title, subtitle, background }) => {
    return (
        <div className="heading-banner" style={{ backgroundImage: `url(${background})` }}>
            <h1 className="heading">{title}</h1>
            <p className="subtitle">{subtitle}</p>
        </div>
    );
};

export default HeadingBanner;
