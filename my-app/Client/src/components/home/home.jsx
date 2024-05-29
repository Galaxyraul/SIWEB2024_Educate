import React, { useEffect, useState } from 'react';
import './home.css';
import ChatContainer from '../chat/chat';
import Ad from '../ads/ads';
import {Link} from 'react-router-dom';
const Home = ({user}) => {
    const [categories, setCategories] = useState([]);
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        fetch('https://d118flx1-5000.uks1.devtunnels.ms/categories')
            .then(response => response.json())
            .then(data => setCategories(data));

        fetch('https://d118flx1-5000.uks1.devtunnels.ms/lectures')
            .then(response => response.json())
            .then(data => setDocs(data));
    }, []);

    return (
        <div className = "home-flex">
            <div className='home-chat'>
                <ChatContainer user ={user}/>
            </div>
            <div >
                <h2>Categorias</h2>
                <div className="home-container">
                    {categories.slice(0, 5).map((category, index) => (
                        <div key={index} className="home-card">
                            <h3><Link className="link" to={`/documents/${category.name}`}>{category.name}</Link></h3>
                        </div>
                    ))}
                </div>
                <h2>Documentos</h2>
                <div className="home-container">
                    {docs.slice(0, 5).map((doc, index) => (
                        <div key={index} className="home-card">
                            <h3><Link className="link"to={`/documents/${doc.name}`}>{doc.name}</Link></h3>
                        </div>
                    ))}
                </div>
                <h2>Categorías recomendadas</h2>
                <div className="home-container">
                    {categories.slice(5, 10).map((category, index) => (
                        <div key={index} className="home-card">
                            <h3><Link className="link"to={`/documents/${category.name}`}>{category.name}</Link></h3>
                        </div>
                    ))}
                </div>
                <h2>Documentos recomendados</h2>
                <div className="home-container">
                    {docs.slice(5, 10).map((doc, index) => (
                        <div key={index} className="home-card">
                            <h3><Link className="link" to={`/documents/${doc.name}`}>{doc.name}</Link></h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className='ad'>
                <Ad />
            </div>
        </div>
    );
}

export default Home;