const login = document.getElementById("login_t");
const register = document.getElementById("register");
const login_form = document.getElementById("campos_login");
const register_form = document.getElementById("campos_register");

login.addEventListener("click", function() {
    setActive(login, register, login_form, register_form);
});

register.addEventListener("click", function() {
    setActive(register, login, register_form, login_form);
});

function setActive(activeTab, inactiveTab, activeForm, inactiveForm) {
    activeTab.classList.add("active");
    inactiveTab.classList.remove("active");
    
    activeForm.classList.add("active-form");
    inactiveForm.classList.remove("active-form");
}
