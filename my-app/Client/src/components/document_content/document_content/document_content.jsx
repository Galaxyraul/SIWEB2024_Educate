import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './document_content.css';

const ReviewDocument = ({ document }) => {
    const [selectedTab, setSelectedTab] = useState('content');
    const [videos, setVideos] = useState([]);
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        if (document && document[0].path) {
            fetch(`https://d118flx1-5000.uks1.devtunnels.ms/resources/${document[0].path}`)
                .then(response => response.text())
                .then(data => setHtmlContent(data));
        }
    }, [document]);
    console.log("document",document);   
    useEffect(() => {
        if (document) {
            fetch(`https://d118flx1-5000.uks1.devtunnels.ms/videos/${document[0].name}`)
                .then(response => response.json())
                .then(data => {setVideos(data);console.log("data",data)});
        }
    }, [document]);
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