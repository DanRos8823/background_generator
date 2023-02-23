var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var angle = document.querySelector(".angle");
var body = document.getElementById("gradient");




function setDefaultInputValue(){
    color1.value="#ff0000";
    color2.value="#ffff00";
    angle.value=90;
    setGradient();
};

function showGradient(){
    css.textContent=body.style.background + ";";
}

function setGradient(){
    body.style.background = "linear-gradient(" + angle.value + "deg" + ", " + 
        color1.value + ", " + color2.value + ")";
    showGradient();
}




setDefaultInputValue();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
angle.addEventListener("input", setGradient);

