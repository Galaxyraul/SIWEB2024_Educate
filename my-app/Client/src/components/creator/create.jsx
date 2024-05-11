import React from 'react';
import FileUploadBody from './upload_body/upload_body';
import VideoUploadModule from './upload_videos/upload_videos';
import './create.css';
const Create = ({ user }) => {
  const [key, setKey] = React.useState('exercises');
  const [file_card, setFileCard] = React.useState();
  const [videos_cards, setVideosCards] = React.useState([]);
  const renderContent = () => {
    switch (key) {
      case 'files':
        return <FileUploadBody onSubmit={handleSubmit} card={file_card} />;
      case 'videos':
        return <VideoUploadModule  onSubmit={handleSubmit} videos_cards = {videos_cards} setVideosCards = {setVideosCards}/>;
      default:
        return null;
    }
  };
  const handleSubmit = () => {
    console.log('Submitted');
  };
  return (
    <div className="create-container">
      <h1>Create</h1>
      <div className="tab-buttons">
        <button className={key === 'files' ? 'selected-button' : ''} onClick={() => setKey('files')}>Files</button>
        <button className={key === 'videos' ? 'selected-button' : ''} onClick={() => setKey('videos')}>Videos</button></div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Create;