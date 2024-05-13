import React from 'react';
import ChatContainer from "../chat/chat";
import Ad from "../ads/ads";
import './landing.css'

const Landing = ({ user }) => {
    return(
        <div className="body-flex">
            <div className="body-chat">
                <ChatContainer user={user}/>
            </div>
            <div className = "presentation">
            <img src="http://localhost:5000/resources/images/logo_educate.jpg" alt="logo" />
            <h1>Educate: Tu lugar de Estudio</h1>
            <h2>Conecta, aprende y crece en Educate. Únete ahora para acceder a recursos educativos, compartir conocimientos y encontrar apoyo en tu viaje de aprendizaje.</h2>
            </div>
            <div className = "ad">
                <Ad />
            </div>
        </div>
    );
}
export default Landing;

