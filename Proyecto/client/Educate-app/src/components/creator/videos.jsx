import React, { useState } from 'react';


const VideoCardCreation = () => {
    const [videoCards, setVideoCards] = useState([]);

    const addVideoCard = () => {
        const newVideoCard = {
            id: Date.now(), // Unique ID for each card
            title: '',
            description: '',
        };

        setVideoCards(prevCards => [...prevCards, newVideoCard]);
    };

    const editVideoCard = (id, title, description) => {
        const updatedVideoCards = videoCards.map(card => {
            if (card.id === id) {
                return { ...card, title, description };
            }
            return card;
        });

        setVideoCards(updatedVideoCards);
    };

    const removeVideoCard = (id) => {
        const updatedVideoCards = videoCards.filter(card => card.id !== id);
        setVideoCards(updatedVideoCards);
    };

    return (
        <div>
            {/* Video Card Creation */}
            <button onClick={addVideoCard}>Add Video Card</button>
            
            <div id="videoCards">
                {videoCards.map(card => (
                    <div key={card.id} className="video-card">
                        {card.title ? (
                            <>
                                <h3>{card.title}</h3>
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                                <p>{card.description}</p>
                                <button onClick={() => editVideoCard(card.id, card.title, card.description)}>Edit</button>
                                <button onClick={() => removeVideoCard(card.id)}>Remove</button>
                            </>
                        ) : (
                            <>
                                <input type="text" placeholder="Video Title" className="video-title" onChange={(e) => editVideoCard(card.id, e.target.value, card.description)} />
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                                <textarea placeholder="Description" className="video-description" onChange={(e) => editVideoCard(card.id, card.title, e.target.value)}></textarea>
                                <button onClick={() => editVideoCard(card.id, card.title, card.description)}>Save</button>
                                <button onClick={() => removeVideoCard(card.id)}>Remove</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoCardCreation;
