import React, { useState } from 'react';
export const OuiMoon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
  <path fill="currentColor" d="M8.796 9.048c-1.552-2.238-1.199-5.323.61-8.1c-3.47-.12-6.6 2.232-7.269 5.672c-.742 3.82 1.83 7.533 5.749 8.294a7.226 7.226 0 0 0 7.526-3.218c-2.794.177-5.27-.711-6.616-2.648"></path>
</svg>
)
export const LetsIconsSun = (props) => (
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
<g fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"></circle>
    <path strokeLinecap="round" d="M12 5V3m0 18v-2m4.95-11.95l1.414-1.414M5.636 18.364L7.05 16.95M19 12h2M3 12h2m11.95 4.95l1.414 1.414M5.636 5.636L7.05 7.05"></path>
</g>
</svg>
  )

const Slider = () => {
    let [left, setLeft] = useState(true);
    let [iniSlider, setIniSlider] = useState("#808080");
    let [objectiveSlider, setObjectiveSlider] = useState("#555353");
    let [iniSun, setIniSun] = useState("#ffd700");
    let [objectiveSun, setObjectiveSun] = useState("#000000");
    let [iniMoon, setIniMoon] = useState("#000000");
    let [objectiveMoon, setObjectiveMoon] = useState("#ffffff");

    const slide = () => {
        const start = Date.now();

        const updateColors = () => {
            const elapsed = Date.now() - start;
            const duration = 500; // 0.5 seconds
            const progress = Math.min(elapsed / duration, 1);
            const slider = document.getElementById("slider");
            const toggle = document.getElementById("toggle");
            const sun = document.getElementById("sun");
            const moon = document.getElementById("moon");
            const translation = left ? (progress * 200) + "%" : (200 - (progress * 200)) + "%";
            slider.style.transform = "translateX(" + translation + ")";
            const sunColor = interpolateColor(iniSun, objectiveSun, progress);
            const moonColor = interpolateColor(iniMoon, objectiveMoon, progress);
            const toggleColor = interpolateColor(iniSlider, objectiveSlider, progress);
            const sliderColor = interpolateColor(objectiveSlider, iniSlider, progress);
            toggle.style.backgroundColor = toggleColor;
            slider.style.backgroundColor = sliderColor;
            sun.style.color = sunColor
            moon.style.color = moonColor

            if (progress < 1) {
                requestAnimationFrame(updateColors);
            } else {
                swapColors();
            }
        };
        const swapColors = () => {
            setLeft(!left);
            setIniSun(objectiveSun);
            setIniMoon(objectiveMoon);
            setIniSlider(objectiveSlider);
            setObjectiveSun(iniSun);
            setObjectiveMoon(iniMoon);
            setObjectiveSlider(iniSlider);
        };

        updateColors();
        
    };

    const interpolateColor = (color1, color2, progress) => {
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
    };

    return (
        <>
            <div className='flex' >
                <LetsIconsSun className = "sun" id = "sun"/>
                <div className="slider" id="toggle" onClick={slide}>
                    <label className="slider-toggle" id="slider">
                    </label>
                </div>
                <OuiMoon className="moon" id = "moon"/>
            </div>
        </>
    );
};

export default Slider;
