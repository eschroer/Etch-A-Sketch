const DEFAULT_COLOR = "#333333"
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentSize = DEFAULT_SIZE

const container = document.querySelector(".container");
const resetButton = document.querySelector("button");

resetButton.addEventListener("click", clearGrid);

function createGrid(size) {
    for (let i = 0; i<(size * size); i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);
        pixel.addEventListener("mouseover", changeColor)
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
createGrid(currentSize);