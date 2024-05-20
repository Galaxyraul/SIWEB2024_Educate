import React, { useState,useEffect } from 'react';
import TagSelector from '../tags/tags';
import './upload_body.css';

const FileUploadModule = ({userId,lectureId,setLectureId}) => {
  const [doc_name, setDocName] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const[ file_card, onAddCard] = useState(null);
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
      setDocName(event.target.files[0].name);
    }
  };

  const handleSubmit = () => {
    if (!file || !title || !description || !tags) {
      alert('Please fill in all fields');
      return;
    }
    name = file.name
    const object = JSON.stringify({
      creator: userId,
      title: title,
      description: description,
      tags: tags,
      fileName: name
    })
      fetch('http://localhost:5000/lectures/insert', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: object,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setLectureId(title);
    });
    
    const fileData = new FormData();
    fileData.append('file', file);

    fetch('http://localhost:5000/lectures/upload', { 
      method: 'POST',
      body: fileData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('File upload success:', data);
      setFile(null);
      setDocName('');
    });
    alert('El archivo se ha subido');
  };
  const handleAdd = () => {
    if (!file || !title || !description || !tags) {
      alert('Please fill in all fields');
      return;
    }
    const newCard = { file,fileName: file.name, title, description, tags };
    onAddCard(newCard);
    setLectureId(title)
    
  };
  const handleDelete = () => {
    onAddCard(null);
  };


  return (
    <div className='file-container'>
      <div className='set-up'>
        <label className="custom-file-upload">
          <input className="upload-file" type="file" onChange={handleFileChange} />
          Subir archivo
        </label>
        <input className="upload-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
        <input className="upload-input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" />
        <button onClick={() => setModalOpen(true)}>Etiquetas</button>
        <button className="upload-button" onClick={handleAdd}>Añadir</button>
        <button className="upload-button" onClick={handleSubmit}>Enviar</button>
      </div>
      <div className="upload-module">
        {modalOpen && (
          <div className="modal">
            <TagSelector tags={tags} onTagSelect={setTags} selectedTags = {tags} />
            <button onClick={() => {setModalOpen(false);}}>Añadir</button>
          </div>
        )}
        {file_card && (
          <div className="card">
            <h2 className="card-title">{file_card.title}</h2>
            <p className="card-description">{file_card.description}</p>
            <p className="card-filename">File Name: {doc_name}</p>
            <p className="card-tags">Tags: {file_card.tags.join(', ')}</p>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadModule;