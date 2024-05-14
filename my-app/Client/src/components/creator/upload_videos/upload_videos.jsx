import React, { useState } from 'react';
import './upload_videos.css';

const VideoUploadModule = ({lectureId}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [videos_cards, setVideosCards] = useState([]);
  
  const handleSubmit = () => {
    fetch('http://localhost:5000/videosAdd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lectureId: lectureId,
        videos: videos_cards,
      })
    })
    .then(response => response.json())
    .then(data => {
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
    
  };
  const handleEdit = (index) => {
    const video = videos_cards[index];
    setTitle(video.title);
    setDescription(video.description);
    setUrl(video.url);
    setEditingIndex(index);
  };
  
  const handleDelete = (index) => {
    const newVideos = [...videos_cards];
    newVideos.splice(index, 1);
    setVideosCards(newVideos);
    if (editingIndex === index) {
      setTitle('');
      setDescription('');
      setUrl('');
      setEditingIndex(null);
    }
  };
  const handleAddOrSave = () => {
    if (!title || !description || !url) {
      alert('Please fill in all fields');
      return;
    }

    if (editingIndex !== null) {
      const newVideos = [...videos_cards];
      newVideos[editingIndex] = { title, description, url };
      setVideosCards(newVideos);
      setEditingIndex(null);
    } else {
      setVideosCards([...videos_cards, { title, description, url }]);
    }

    setTitle('');
    setDescription('');
    setUrl('');
  };

  return (
    <div className='section'>
      <div className="set-up">
          <input className="upload-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
          <input className="upload-input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" />
          <input className="upload-input" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enlace" />
          <button className="upload-button" onClick={handleAddOrSave}>{editingIndex !== null ? 'Guardar' : 'Añadir'}</button>
          <button className="upload-button" onClick={handleSubmit}>Enviar</button>
      </div>
      <div className="video-upload-module">
        {videos_cards.map((video, index) => (
        <div className="card" key={index}>
          <h2 className="card-title">{video.title}</h2>
          <iframe
            className="card-video"
            src={`https://www.youtube.com/embed/${video.url.split('v=')[1]}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div>
            <p className="card-description">{video.description}</p>
            <p className="card-url">URL: {video.url}</p>
          </div>
          <div>
            <button className="edit-button" onClick={() => handleEdit(index)}>Editar</button>
            <button className="delete-button" onClick={() => handleDelete(index)}>Borrar</button>
          </div>
          
        </div>
      ))}
      </div>
    </div>
  );
};

export default VideoUploadModule;