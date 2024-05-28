import React,{useState} from 'react';
import FileUploadBody from './upload_body/upload_body';
import VideoUploadModule from './upload_videos/upload_videos';
import './create.css';
const Create = ({ user }) => {
  const [key, setKey] = React.useState('files');
  const [lectureId, setLectureId] = useState('');
  
  const renderContent = () => {
    switch (key) {
      case 'files':
        return <FileUploadBody userId = {user.username} lectureId = {lectureId} setLectureId = {setLectureId}/>;
      case 'videos':
        return <VideoUploadModule lectureId = {lectureId} userId = {user.username} />;
      default:
        return null;
    }
  };
  return (
    <div className="create-container">
      {!user.logged || user.role !== 'creator' ? (
        <p className='ERROR-MESSAGE'>Tienes que haber iniciado sesión como creador para acceder aquí</p>
      ) : (
        <>
          <h1>&#8203;</h1>
          <div className="tab-buttons">
            <button className={key === 'files' ? 'selected-button' : ''} onClick={() => setKey('files')}>Files</button>
            <button className={key === 'videos' ? 'selected-button' : ''} onClick={() => setKey('videos')}>Videos</button>
          </div>
          <div className="tab-content">
            {renderContent()}
          </div>
        </>
      )}
    </div>
  );
};

export default Create;