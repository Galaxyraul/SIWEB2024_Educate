import React, { useState, useRef, useEffect } from 'react';
import './chat.css';

const ChatContainer = ({user}) => {
    const [displayed, setDisplayed] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', content: 'Welcome to our chat!', img: 'http://localhost:5000/resources/images/logo_educate.jpg' }
    ]);
    const [inputValue, setInputValue] = useState('');

    const messagesEndRef = useRef(null);

    const toggleDisplay = () => {
        setDisplayed(!displayed);
    };

    const sendMessage = () => {
    if (!user.logged) {
        setInputValue('Tienes que haber iniciado sesión');
        return;
    }
    if (user.balance < 10) {
        setInputValue('No tienes suficiente saldo');
        return;
    }
    if (inputValue) {
        user.reduceBalance(10);
        setMessages(prevMessages => [
            ...prevMessages,
            { type: 'user', content: inputValue, img: 'http://localhost:5000/resources/images/user.png' },
            { type: 'bot', content: <div>Para resolver una ecuación lo primero es saber de que tipo es.<br/>
                Suponiendo que nos enfrentemos a una ecuación de 2º grado recomiendo aplicar la fórmula:<br/>
                -b±√(b²-4ac)/2a<br/>
                Para más información visita <a href="http://example.com">Ecuaciones</a></div>, img: 'http://localhost:5000/resources/images/logo_educate.jpg' }
        ]);
        setInputValue('');
    }
}

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
