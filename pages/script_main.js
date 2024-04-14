const login =  document.getElementById("login_t");
const register = document.getElementById("register");
const login_toogle = document.getElementById("login_tags")
const login_fields = document.getElementById("campos_login")
const register_fields = document.getElementById("campos_register")
let login_opt = true;


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
