const displayChat = document.getElementById("display_chat");
const chat = document.getElementById("chat");
const chat_bar_buttons = document.getElementsByClassName("chat_bar_button");
const chat_bar = document.getElementById("chat_bar");
const ct_chat = document.getElementById("ct_chat");
const sendChatBtn = document.getElementById("send_chat");

let displayed = false;

const messages = [
    { type: 'user', content: 'Este es un mensaje del usuario', img: 'logo.svg' },
    { type: 'bot', content: 'Este es un mensaje del bot', img: 'logo.svg' }
];

function displayMessages() {
    ct_chat.innerHTML = ''; // Clear existing messages
    
    messages.forEach(message => {
        const msgElement = document.createElement('div');
        msgElement.classList.add('chat_msg', `chat_msg_${message.type}`);
        
        if (message.type === 'user') {
            msgElement.innerHTML = `${message.content} <img src="${message.img}" alt="user-logo">`;
        } else if (message.type === 'bot') {
            msgElement.innerHTML = `<img src="${message.img}" alt="bot-logo">${message.content}`;
        }
        
        ct_chat.appendChild(msgElement);
    });
}

displayMessages();

displayChat.addEventListener("click", function() {
    displayed = !displayed;
    
    if (displayed) {
        chat.style.width = "30dvw";
        chat.style.border = "solid 3px black";
        chat_bar.style.border = "solid 3px black";
        displayChat.textContent = "<";
        
        Array.from(chat_bar_buttons).forEach(button => {
            button.style.display = "block";
        });
        
    } else {
        chat.style.width = "0dvw";
        chat.style.border = "0";
        chat_bar.style.border = "0";
        displayChat.textContent = ">";
        
        Array.from(chat_bar_buttons).forEach(button => {
            button.style.display = "none";
        });
    }
});

sendChatBtn.addEventListener("click", function() {
    const userInput = document.querySelector("#chat input").value;
    
    if (userInput) {
        messages.push({ type: 'user', content: userInput, img: 'logo.svg' });
        // Simulate a bot response
        messages.push({ type: 'bot', content: 'Bot response', img: 'logo.svg' });
        displayMessages();
    }
});
