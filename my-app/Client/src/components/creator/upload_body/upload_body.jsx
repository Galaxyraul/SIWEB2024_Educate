import React, { useState } from 'react';
import TagSelector from '../tags/tags';
import './upload_body.css';
const FileUploadModule = ({handleSubmit,file_card}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleAdd = () => {
    if (!file || !title || !description || !tags) {
      alert('Please fill in all fields');
      return;
    }

    setCard({ fileName: file.name, title, description, tags: tags.split(',').map(tag => tag.trim()) });

    setFile(null);
    setTitle('');
    setDescription('');
    setTags('');
  };
  const handleDelete = () => {
    setCard(null);
  };
  return (
    <div>
      <div className='set-up'>
        <label className="custom-file-upload">
          <input className="upload-file" type="file" onChange={(e) => setFile(e.target.files[0])} />
          Upload File
        </label>
        <input className="upload-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input className="upload-input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <button onClick={() => setModalOpen(true)}>Select Tags</button>
        <button className="upload-button" onClick={handleAdd}>Add</button>
        <button className="upload-button" onClick={handleSubmit}>Submit</button>
      </div>
      <div className="upload-module">
        {modalOpen && (
          <div className="modal">
            <TagSelector tags={['tag1', 'tag2', 'tag3', 'tag4','tag5']} onTagSelect={setTags} />
            <button onClick={() => setModalOpen(false)}>Añadir</button>
          </div>
        )}
        {file_card && (
          <div className="card">
            <h2 className="card-title">{file_card.title}</h2>
            <p className="card-description">{file_card.description}</p>
            <p className="card-filename">File Name: {file_card.fileName}</p>
            <p className="card-tags">Tags: {file_card.tags.join(', ')}</p>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadModule;