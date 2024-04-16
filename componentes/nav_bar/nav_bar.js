const slider = document.getElementById("slider");
const toggle = document.getElementById("toggle");
const sun = document.querySelector(".fa-sun");
const moon = document.querySelector(".fa-moon");
const droppable = document.getElementById("categorias");
const hidden = document.getElementById("content");
const perfilDrop = document.getElementById("perfil");
const idiomaDrop = document.getElementById("idioma");
const ct_perfilDrop = document.getElementById("perfilContent");
const ct_idiomaDrop = document.getElementById("ct_idioma");
const perfilButton = document.getElementById("perfilButton");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close-btn");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

let logged = false;
let left = true;
let startTime;
let start;
let iniSlider = "#808080";
let objectiveSlider = "#555353";
let iniSun = "#ffd700";
let objectiveSun = "#000000";
let iniMoon = "#000000";
let objectiveMoon = "#ffffff";

function slide() {
    const elapsed = Date.now() - start;
    const duration = 500; // 0.5 seconds
    const progress = Math.min(elapsed / duration, 1);
    const translation = left ? (progress * 200) + "%" : (200 - (progress * 200)) + "%";
    slider.style.transform = "translateX(" + translation + ")";
    const sunColor = interpolateColor(iniSun, objectiveSun, progress);
    const moonColor = interpolateColor(iniMoon, objectiveMoon, progress);
    const toggleColor = interpolateColor(iniSlider, objectiveSlider, progress);
    const sliderColor = interpolateColor(objectiveSlider, iniSlider, progress);
    toggle.style.backgroundColor = toggleColor;
    slider.style.backgroundColor = sliderColor;
    sun.style.color = sunColor;
    moon.style.color = moonColor;
    if (progress < 1) {
        requestAnimationFrame(slide);
    } else {
        left = !left;
        [iniSun, iniMoon, iniSlider, objectiveSun, objectiveMoon, objectiveSlider] = [objectiveSun, objectiveMoon, objectiveSlider, iniSun, iniMoon, iniSlider];
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

droppable.addEventListener("mouseenter", () => {
    console.log("Entramos en el desplagable");
    hidden.style.display = "block";
});

hidden.addEventListener("mouseleave", () => {
    console.log("Salimos en el desplagable");
    hidden.style.display = "none";
});

idiomaDrop.addEventListener("mouseenter", () => {
    console.log("Entramos en el desplagable");
    ct_idiomaDrop.style.display = "block";
});

perfilDrop.addEventListener("mouseenter", () => {
    console.log("Seleccionado el perfil");
    if (logged) {
        ct_perfilDrop.style.display = "block";
    } else {
        ct_perfilDrop.style.display = "none";
    }
});

perfilDrop.addEventListener("mouseleave", () => {
    ct_perfilDrop.style.display = "none";
});

perfilButton.addEventListener("click", function() {
    if (!logged) {
        loginModal.style.display = "block";
    } else {
        ct_perfilDrop.style.display = "block";
    }
});

closeBtn.addEventListener("click", function() {
    loginModal.style.display = "none";
});

loginBtn.addEventListener("click", function() {
    console.log("Acceder clicked");
});

registerBtn.addEventListener("click", function() {
    console.log("Registrarse clicked");
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownContent = document.getElementById("dropdownContent");

    dropdownContent.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            const selectedLang = event.target.getAttribute("data-lang");
            console.log(`Selected language: ${selectedLang}`);
            dropdownButton.textContent = event.target.textContent;
        }
    });
});
