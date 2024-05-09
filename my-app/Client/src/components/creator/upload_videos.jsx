import React, { useState } from 'react';

const VideoUploadModule = ({videos, onVideosChange }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const addVideo = () => {
    if (!title.trim() || !description.trim() || !url.trim()) {
        alert('Title, description, and URL cannot be empty');
        return;
    }

    const newVideo = { title, description, url };
    onVideosChange([...videos, newVideo]);
    setTitle('');
    setDescription('');
    setUrl('');
};

    const deleteVideo = (index) => {
        const newVideos = [...videos];
        newVideos.splice(index, 1);
        onVideosChange(newVideos);
    };

    // ...

    return (
        <div>
            <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
            <input type="text" placeholder="Description" value={description} onChange={handleDescriptionChange} />
            <input type="text" placeholder="URL" value={url} onChange={handleUrlChange} />
            <button onClick={addVideo}>Add</button>
            {videos.map((video, index) => (
                <div key={index}>
                    <h2>{video.title}</h2>
                    <p>{video.description}</p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src={video.url.replace("watch?v=", "embed/")} 
                        title={video.title}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                    />
                    <button onClick={() => deleteVideo(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default VideoUploadModule;