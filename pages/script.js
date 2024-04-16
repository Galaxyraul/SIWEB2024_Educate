const slider = document.getElementById("slider");
const toggle = document.getElementById("toggle");
const sun = document.querySelector(".fa-sun");
const moon = document.querySelector(".fa-moon");
const droppable = document.getElementById("categorias");
const hidden = document.getElementById("content")
const perfilDrop = document.getElementById("perfil")
const idiomaDrop = document.getElementById("idioma")
const ct_perfilDrop = document.getElementById("ct_perfil")
const ct_idiomaDrop = document.getElementById("ct_idioma")
let logged = false;
let left = true;
let startTime;
let start;
let iniSlider = "#808080";
let objectiveSlider = "#555353";
let iniSun = "#ffd700"
let objectiveSun = "#000000"
let iniMoon = "#000000"
let objectiveMoon = "#ffffff"

function slide() {
    const elapsed = Date.now() - start;
    const duration = 500; // 0.5 seconds
    const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn"t exceed 1
    const translation = left ? (progress * 200) + "%" : (200 - (progress * 200)) + "%";
    slider.style.transform = "translateX(" + translation + ")";
    const sunColor = interpolateColor(iniSun, objectiveSun, progress);
    const moonColor = interpolateColor(iniMoon, objectiveMoon, progress);
    const toggleColor = interpolateColor(iniSlider, objectiveSlider, progress);
    const sliderColor = interpolateColor(objectiveSlider, iniSlider, progress);
    toggle.style.backgroundColor = toggleColor
    slider.style.backgroundColor = sliderColor
    sun.style.color = sunColor;
    moon.style.color = moonColor;
    if (progress < 1) {
        requestAnimationFrame(slide);
    } else {
        left = !left;
        [iniSun,iniMoon,iniSlider,objectiveSun,objectiveMoon,objectiveSlider] = [objectiveSun,objectiveMoon,objectiveSlider,iniSun,iniMoon,iniSlider]
    }
}

function interpolateColor(color1, color2, progress) {
    const r1 = parseInt(color1.substr(1, 2), 16);
    const g1 = parseInt(color1.substr(3, 2), 16);
    const b1 = parseInt(color1.substr(5, 2), 16);
    const r2 = parseInt(color2.substr(1, 2), 16);
    const g2 = parseInt(color2.substr(3, 2), 16);
    const b2 = parseInt(color2.substr(5, 2), 16);
    const r = Math.round((1 - progress) * r1 + progress * r2);
    const g = Math.round((1 - progress) * g1 + progress * g2);
    const b = Math.round((1 - progress) * b1 + progress * b2);
    return "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0");
}

toggle.addEventListener("click", function() {
    if (!startTime || Date.now() - startTime >= 500) {
        startTime = Date.now();
        start = Date.now();
        requestAnimationFrame(slide);
    }
});

droppable.addEventListener("mouseenter",()=>{
    console.log("Entramos en el desplagable");
    hidden.style.display = "block";
})


hidden.addEventListener("mouseleave", () => {
    console.log("Salimos en el desplagable");
        hidden.style.display = "none";
}); 

idiomaDrop.addEventListener("mouseenter",()=>{
    console.log("Entramos en el desplagable");
    ct_idiomaDrop.style.display = "block";
})

idiomaDrop.addEventListener("mouseleave",()=>{
    console.log("Entramos en el desplagable");
    ct_idiomaDrop.style.display = "none";
})

perfilDrop.addEventListener("mouseenter",()=>{
    console.log("Entramos en el desplagable");
    ct_perfilDrop.style.display = "block";
})

perfilDrop.addEventListener("mouseleave",()=>{
    console.log("Entramos en el desplagable");
    ct_perfilDrop.style.display = "none";
})

const displayChat = document.getElementById("display_chat");
const chat = document.getElementById("chat");
const chat_bar_buttons = document.getElementsByClassName("chat_bar_button");
const chat_bar = document.getElementById("chat_bar");
let displayed = false;

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