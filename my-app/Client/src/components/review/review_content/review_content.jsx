import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './review_content.css';


const ReviewDocument = ({ selectedMail }) => {
    const [selectedTab, setSelectedTab] = useState('content');
    const [videos, setVideos] = useState([]);
    const [htmlContent, setHtmlContent] = useState('');
    useEffect(() => {
        if (selectedMail && selectedMail.path) {
            fetch(`http://localhost:5000/resources/${selectedMail.path}`)
                .then(response => response.text())
                .then(data => setHtmlContent(data));
        }
    }, [selectedMail]);
    useEffect(() => {
        if (selectedMail) {
            fetch(`http://localhost:5000/videos/${selectedMail.name}`)
                .then(response => response.json())
                .then(data => setVideos(data));
        }
    }, [selectedMail]);
    return (
        <div className="doc-container">
            <div>
        <button 
            className={selectedTab === 'content' ? 'button-selected' : ''} 
            onClick={() => setSelectedTab('content')}
        >
            Content
        </button>
        <button 
            className={selectedTab === 'videos' ? 'button-selected' : ''} 
            onClick={() => setSelectedTab('videos')}
        >
            Videos
        </button>
        </div>
        <div className='contents'>
        {selectedTab === 'content' && htmlContent && (
            <div className="html-content">
                {ReactHtmlParser(htmlContent)}
            </div>
        )}
        {selectedTab === 'videos' && videos.map(video => {
            const videoId = video.url.split('v=')[1];
            return (
                <div key={videoId} className="video-card">
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <h2>{video.title}</h2>
                    <p>{video.description}</p>
                </div>
            );
        })}
        </div>
    </div>
);
};

export default ReviewDocument;