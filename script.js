const css = document.querySelector("h3");
const body = document.querySelector("body");
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');

function setBackground() {
    body.style.background = "linear-gradient(to right, "
    + color1.value 
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener('input', setBackground);
color2.addEventListener('input', setBackground);

function setInput1Background() {
    color1.style.background = "linear-gradient(to right, "
    + color1.value 
    + ", "
    + color2.value
    + ")";
}

color1.addEventListener('input', setInput1Background);

function setInput2Background() {
    color2.style.background = "linear-gradient(to right, "
    + color1.value 
    + ", "
    + color2.value
    + ")";
}

color2.addEventListener('input', setInput2Background);
function firstFunction() {
    body.style.background = "linear-gradient(to right, "
    + color1.value 
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}

function generateRandomBackground() {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();

    color1.value = randomColor1;
    color2.value = randomColor2;

    setBackground();
}