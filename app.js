const container = document.querySelector('.container')
const clear = document.querySelector('.clear')
let pixels = [];


container.style.gridTemplateColumns = 'repeat(16, auto)';
container.style.gridTemplateRows = 'repeat(16, auto)';

function createGrid(size) {
    for(i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            pixel = document.createElement('div')
            pixel.classList.add("pixel");
            container.appendChild(pixel);
        }
    }
    pixels = Array.from(document.querySelectorAll('.pixel'));
	pixels.forEach(pixel => pixel.addEventListener('mouseenter', fill));
}

function fill(e) {
	e.target.style.backgroundColor = 'black';
}

function deleteGrid() {
    pixels.forEach(pixel => container.removeChild(pixel));
    pixels = [];
}
function nonvalid(newGrid) {
    while(newGrid <1 || newGrid >100){
        newGrid = Number(prompt("New grid has to be between 1 and 100 px:"));
    }
    return newGrid
}

function reset () {
    newGrid = Number(prompt("Please choose the new grid size up to 100px"))
    if(newGrid < 1 || newGrid > 100) {
        newGrid = nonvalid(newGrid);
    }
    deleteGrid();
    container.style.gridTemplateColumns = `repeat(${newGrid}, auto)`;
    container.style.gridTemplateRows = `repeat(${newGrid}, auto)`;
    createGrid(newGrid);
}

createGrid(16);

clear.addEventListener('click', reset)
