var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var angle = document.querySelector(".angle");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".randomize");




function setDefaultInputValue(){
    color1.value="#000000";
    color2.value="#ffffff";
    angle.value=0;
    setGradient();
};

function showGradient(){
    css.textContent=body.style.background + ";";
};

function setGradient(){
    body.style.background = "linear-gradient(" + angle.value + "deg" + ", " + 
        color1.value + ", " + color2.value + ")";
    showGradient();
};

function randomizeGradient(){
    let output = '';
    for (let i = 0; i < 6; i++) {
        output += (Math.floor(Math.random() * 16)).toString(16);
    }
    return output;
}

function randomizeBtn(){
    color1.value="#"+randomizeGradient();
    color2.value="#"+randomizeGradient();
    setGradient();
}



setDefaultInputValue();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
angle.addEventListener("input", setGradient);
randomBtn.addEventListener("click", randomizeBtn)


