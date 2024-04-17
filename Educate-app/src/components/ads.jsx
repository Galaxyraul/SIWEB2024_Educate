import React, { useEffect } from 'react';
import '../styles/ads.css'; // Import your ad styles

const Ad = () => {
    
    useEffect(() => {
        // Load AdSense script
        const script = document.createElement('script');
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        document.head.appendChild(script);

        // Initialize AdSense
        if (window.adsbygoogle) {
            window.adsbygoogle.push({});
        }
        
        return () => {
            // Cleanup script after component unmounts
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="ad-container">
            {/* Uncomment the following line to add a local ad image */}
            {/* <img src="path-to-your-ad-image.jpg" alt="Advertisement" /> */}
            <div className="ad-content">
                <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-2714829077396866"
                    data-ad-slot="7166836047"
                    data-ad-format="vertical"
                    data-full-width-responsive="true">
                </ins>
            </div>
        </div>
    );
};

export default Ad;
