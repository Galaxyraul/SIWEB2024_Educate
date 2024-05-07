import React from 'react';
import bannerImage from '../path/to/your/image.jpg'; // Import your image

const Ad = () => {
    return (
        <div className="ad-banner">
            <img src={bannerImage} alt="Banner" />
        </div>
    );
};

export default Ad;