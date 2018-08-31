var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnRandom = document.getElementById("btnRand");


color1.addEventListener("input", changeGradient);
color2.addEventListener("input",  changeGradient);
btnRandom.addEventListener("click", changeGradientRandom);

function changeGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", "  + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function changeGradientRandom() {
   var colorValue1 = generateColors();
   var colorValue2 = generateColors();
   color1.setAttribute("value", colorValue1);
   color2.setAttribute("value", colorValue2);
   body.style.background = "linear-gradient(to right, " + colorValue1 + ", "  + colorValue2 + ")";
   css.textContent = body.style.background + ";";
}



function generateColors(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
       return color;
}