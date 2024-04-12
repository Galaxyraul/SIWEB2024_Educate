const displayChat = document.getElementById("display_chat");
const chat = document.getElementById("chat");
const ct_chat = document.getElementById("ct_chat")
let displayed = false;

displayChat.addEventListener("click", function() {
    displayed = !displayed;
    if (displayed) {
        chat.style.width = "30dvw";
        ct_chat.style.border = "solid 3px black"
        displayChat.textContent = "<";
    } else {
        chat.style.width = "0dvw";
        ct_chat.style.border = "0"
        displayChat.textContent = ">";
    }
});
