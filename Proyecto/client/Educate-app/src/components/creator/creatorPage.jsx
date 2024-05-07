import React, { useState } from 'react';
import Excercises from "./excercises";
import FileUploadModule from "./files";
import VideoCardCreation from "./videos";

const CreatorPage = () => {
    const [activeTab, setActiveTab] = useState('exercises'); // Default active tab is 'exercises'

    const renderTabContent = () => {
        switch (activeTab) {
            case 'exercises':
                return <Excercises />;
            case 'files':
                return <FileUploadModule />;
            case 'videos':
                return <VideoCardCreation />;
            default:
                return <Excercises />;
        }
    };

    return (
        <div className="creator-page">
            <div className="tab-buttons">
                <button 
                    className={activeTab === 'exercises' ? 'active' : ''} 
                    onClick={() => setActiveTab('exercises')}
                >
                    Exercises
                </button>
                <button 
                    className={activeTab === 'files' ? 'active' : ''} 
                    onClick={() => setActiveTab('files')}
                >
                    File Upload
                </button>
                <button 
                    className={activeTab === 'videos' ? 'active' : ''} 
                    onClick={() => setActiveTab('videos')}
                >
                    Videos
                </button>
            </div>
            <div className="tab-content">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default CreatorPage;
