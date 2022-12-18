const header  = document.querySelector('.header');


const intBox = document.createElement('div')
intBox.textContent = "Etch-a-Sketch";
header.appendChild(intBox);

const main = document.querySelector('.main');

const sideBar = document.querySelector('.side-bar');
main.appendChild(sideBar);

const sketchBox = document.querySelector('.sketch-box')
main.appendChild(sketchBox);

const sketch = document.querySelector('.sketch');
sketchBox.appendChild(sketch);

const footer = document.querySelector('.footer');

const colorBtn = document.querySelector('.color-btn');
sideBar.appendChild(colorBtn);

const blackBtn = document.querySelector('.black-btn');
sideBar.appendChild(blackBtn);

const colorScale = document.querySelector('.color-scale-btn');
sideBar.appendChild(colorScale);

const slideContainer = document.querySelector('.slide-container');
sideBar.appendChild(slideContainer);

const resetBtn = document.querySelector('.reset-btn');
sideBar.appendChild(resetBtn);

const slider = document.getElementById('myRange');
const output = document.getElementById('value');

function makeRows(rows, cols) {
    sketch.style.setProperty('--grid-rows', rows);
    sketch.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        sketch.appendChild(cell).className = 'grid-item';
    };
};

makeRows(16, 16);

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

//Create function to change the color of grid squares when hovered over

//Create function to change grid squares to random colors

//Create function to choose the color of grid change

//Create function to change the size of the grid between 16 and 100

//Create function to reset grid size to 16