import React, { useState, useEffect } from 'react';
import '../styles/content.css'; // Import your tabs styles

const TabsContainer = () => {
    const [activeTab, setActiveTab] = useState('TextImages');

    const openTab = (tabName) => {
        // Hide all tab content
        const tabContents = document.getElementsByClassName("tabcontent");
        for (let tab of tabContents) {
            tab.style.display = "none";
        }

        // Remove the 'active' class from all tab links
        const tabLinks = document.getElementsByClassName("tablinks");
        for (let link of tabLinks) {
            link.classList.remove("active");
        }

        // Show the selected tab content and set 'active' class to the selected tab link
        const selectedTabContent = document.getElementById(tabName);
        selectedTabContent.style.display = "block";
        const selectedTabLink = document.querySelector(`.tablinks[data-tab="${tabName}"]`);
        selectedTabLink.classList.add("active");

        // Update the active tab state
        setActiveTab(tabName);
    };

    useEffect(() => {
        // Default to opening the first tab
        openTab('TextImages');
    }, []);

    return (
        <div className="tabs-container">
            <div className="tabs">
                <button 
                    className={`tablinks ${activeTab === 'TextImages' ? 'active' : ''}`} 
                    onClick={() => openTab('TextImages')}
                    data-tab="TextImages"
                >
                    Text & Images
                </button>
                <button 
                    className={`tablinks ${activeTab === 'Videos' ? 'active' : ''}`} 
                    onClick={() => openTab('Videos')}
                    data-tab="Videos"
                >
                    Videos
                </button>
                <button 
                    className={`tablinks ${activeTab === 'PDFs' ? 'active' : ''}`} 
                    onClick={() => openTab('PDFs')}
                    data-tab="PDFs"
                >
                    PDFs
                </button>
            </div>

            <div id="TextImages" className="tabcontent">
                {/* Text & Images content */}
                <h3>Text & Images</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lacus et leo commodo pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                <img src="image1.jpg" alt="Image 1" />
                <img src="image2.jpg" alt="Image 2" />
            </div>

            <div id="Videos" className="tabcontent">
                {/* Videos content */}
                <h3>Videos</h3>
                <div className="video-item">
                    <h4>Video 1</h4>
                    <video controls>
                        <source src="video1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p>Description for Video 1</p>
                </div>
                <div className="video-item">
                    <h4>Video 2</h4>
                    <video controls>
                        <source src="video2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p>Description for Video 2</p>
                </div>
            </div>

            <div id="PDFs" className="tabcontent">
                {/* PDFs content */}
                <h3>PDFs</h3>
                <a href="document1.pdf" download>Download PDF 1</a>
                <a href="document2.pdf" download>Download PDF 2</a>
            </div>
        </div>
    );
};

export default TabsContainer;
