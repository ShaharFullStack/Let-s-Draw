const myCanvas = document.getElementById("myCanvas").getContext("2d");
const canvasPaint = document.getElementById("myCanvas").getBoundingClientRect();
const colorBtn = document.getElementById("colorBtn");
const thicknessBtn = document.getElementById("thicknessBtn");

function mark() {
    myCanvas.beginPath()
}

function paint(event) {
    if (event.buttons !== 1) return;
    myCanvas.lineTo(event.clientX - canvasPaint.left, event.clientY - canvasPaint.top);
    myCanvas.stroke();
}
function changeColor(color) {
    myCanvas.strokeStyle = color;
}

function changeThickness(width){
    myCanvas.lineWidth = width;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const color = `rgb(${r},${g},${b})`;
    return color;
}

function randomColor() {
    myCanvas.strokeStyle = getRandomColor()
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max - min + 1) +min;
 }

function randomLetter() {
    clearAll();
    const letter = getRandomLetter();
    myCanvas.strokeStyle = 'blue';
    myCanvas.font = '200px Arial';
    myCanvas.lineWidth = 8;
    myCanvas.strokeText(letter, 450, 250);
}

function getRandomLetter() {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const index = getRandomNumber(0, letters.length - 1);
    const letter = letters[index];
    return letter;
}

function clearAll() {
    myCanvas.clearRect(0, 0, 1000, 400)
}

