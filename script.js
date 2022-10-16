const DEFAULT_COLOR = "#333333"
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentSize = DEFAULT_SIZE

const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset");
const colorButton = document.querySelector(".color")
const gridSizeSlider = document.querySelector(".size")

resetButton.addEventListener("click", clearGrid);
colorButton.addEventListener("click", changeColor);
gridSizeSlider.addEventListener("change", changeGridSize)

function createGrid(size) {
    for (let i = 0; i<(size * size); i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);
        pixel.addEventListener("mouseover", changeColor)
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    } 
}
function changeColor(event){
    event.target.style.backgroundColor = currentColor;
}

function clearGrid(){
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(function(item){
        item.style.backgroundColor = `${"rgb(219, 223, 223, 10)"}`
    })
}
function changeGridSize(event){
    currentSize = parseInt(event.target.value)
    clearGrid()
    createGrid(currentSize)
}

createGrid(currentSize);