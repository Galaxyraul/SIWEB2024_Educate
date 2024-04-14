const displayChat = document.getElementById("display_chat");
const chat = document.getElementById("chat");
const ct_chat = document.getElementById("ct_chat");
const chat_bar_buttons = document.getElementsByClassName("chat_bar_button");
const chat_bar = document.getElementById("chat_bar");
const login =  document.getElementById("login_t");
const register = document.getElementById("register");
const login_toogle = document.getElementById("login_tags")
const login_fields = document.getElementById("campos_login")
const register_fields = document.getElementById("campos_register")
let displayed = false;
let login_opt = true;

displayChat.addEventListener("click", function() {
    displayed = !displayed;
    if (displayed) {
        chat.style.width = "30dvw";
        chat.style.border = "solid 3px black"
        chat_bar.style.border = "solid 3px black"
        displayChat.textContent = "<";
        Array.from(chat_bar_buttons).forEach(button => {
            button.style.display = "block"
        });
        
    } else {
        chat.style.width = "0dvw";
        chat.style.border = "0"
        chat_bar.style.border = "0"
        displayChat.textContent = ">";
        Array.from(chat_bar_buttons).forEach(button => {
            button.style.display = "none"
        });
    }
});

login_toogle.addEventListener("click",function(){
    login_opt = !login_opt;
    if(login_opt){
        login.style.backgroundColor = "gray";
        register.style.backgroundColor = "black";
        login_fields.style.display = "block";
        register_fields.style.display = "none";
    }else{
        register.style.backgroundColor = "gray";
        login.style.backgroundColor = "black";
        login_fields.style.display = "none";
        register_fields.style.display = "block";
    }
})
