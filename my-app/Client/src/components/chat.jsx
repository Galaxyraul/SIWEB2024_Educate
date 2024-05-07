import React, { useState, useRef, useEffect } from 'react';
import '../styles/chat.css';

const ChatContainer = () => {
    const [displayed, setDisplayed] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', content: 'Este es un mensaje del bot', img: 'logo.svg' },
        { type: 'user', content: 'Este es un mensaje del usuario', img: 'logo.svg' }
    ]);
    const [inputValue, setInputValue] = useState('');

    const messagesEndRef = useRef(null);

    const toggleDisplay = () => {
        setDisplayed(!displayed);
    };

    const sendMessage = () => {
        if (inputValue) {
            setMessages(prevMessages => [
                ...prevMessages,
                { type: 'bot', content: 'Bot response', img: 'logo.svg' },
                { type: 'user', content: inputValue, img: 'logo.svg' }
            ]);
            setInputValue('');
        }
    };

    const clearMessages = () => {
        setMessages([]);
    };

    return (
        <main>
            <section id="chat_container">
                <div id="chat" style={{ width: displayed ? '30vw' : '0vw', border: displayed ? 'solid 3px black' : '0' }}>
                    <div id="ct_chat">
                        {messages.map((message, index) => (
                            <div key={index} className={`chat_msg_${message.type}`}>
                                {message.type === 'user' ? (
                                    <>
                                        {message.content} <img src={message.img} alt="user-logo" />
                                    </>
                                ) : (
                                    <>
                                        <img src={message.img} alt="bot-logo" /> {message.content}
                                    </>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="search" id="chat_bar" style={{ border: displayed ? 'solid 3px black' : '0' }}>
                        <input
                            type="text"
                            placeholder="Introduzca su mensaje"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button className="chat_bar_button" onClick={clearMessages} style={{ display: displayed ? 'block' : 'none' }}>clear</button>
                        <button className="chat_bar_button" onClick={sendMessage} style={{ display: displayed ? 'block' : 'none' }}>Send</button>
                    </div>
                </div>
                <button id="display_chat" onClick={toggleDisplay}>{displayed ? '<' : '>'}</button>
            </section>
        </main>
    );
};

export default ChatContainer;
