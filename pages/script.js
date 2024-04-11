const slider = document.getElementById('slider');
const toggle = document.getElementById('toggle');
const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
let left = true;
let startTime;
let start;

function slide() {
    const elapsed = Date.now() - start;
    const duration = 50; 
    const progress = Math.min(elapsed / duration, 1);
    const translation = left ? (progress * 200) + "%" : (200 - (progress * 200)) + "%";
    slider.style.transform = "translateX(" + translation + ")";
    if (progress < 1) {
        requestAnimationFrame(slide);
    } else {
        left = !left;
        if (left) {
            sun.style.color = "#ffd700";
            moon.style.color = "black";
        } else {
            sun.style.color = "black";
            moon.style.color = "white";
        }
    }
}

toggle.addEventListener('click', function() {
    start = Date.now();
    requestAnimationFrame(slide);
});
