const DEFAULT_COLOR = "#333333";
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset");
const colorPicker = document.querySelector(".color");
const randomButton = document.querySelector(".random");
const rainbowButton = document.querySelector(".rainbow");
const gridSizeSlider = document.querySelector(".size");

resetButton.addEventListener("click", clearGrid);
colorPicker.addEventListener("input", changeColor);
randomButton.addEventListener("click", generateRandomColor);
rainbowButton.addEventListener("click", activateRainbowMode);
gridSizeSlider.addEventListener("change", changeGridSize);
gridSizeSlider.addEventListener("mousemove", changeGridSizeValue);

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i<(size * size); i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);
        pixel.addEventListener("mouseover", colorPixel); 
    } 
}
function colorPixel(event){
    event.target.style.backgroundColor = currentColor;
}
function changeColor(event){
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(function(item){
        item.addEventListener("mouseover", function(){
            currentColor = event.target.value;
        })
    })
    currentColor = event.target.value;
}
function generateRandomColor(){
    const randomColor = '#'+(Math.random().toString(16)+'00000').slice(2,8)
    currentColor = randomColor
    return currentColor
}

function activateRainbowMode() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(function(item){
        item.addEventListener("mouseover", function(){
            currentColor = generateRandomColor();
        })
    })
}

function clearGrid(){
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(function(item){
        item.style.backgroundColor = `${"rgb(219, 223, 223, 10)"}`;
    })
}
function changeGridSize(event){
    currentSize = parseInt(event.target.value);
    clearGrid();
    createGrid(currentSize);
}
function changeGridSizeValue(event){
    const gridSizeValue = document.querySelector(".size-value");
    const value = event.target.value;
    gridSizeValue.textContent = `${value} x ${value}`;
}

createGrid(currentSize);