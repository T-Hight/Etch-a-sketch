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

const colorScale = document.querySelector('.color-scale');
sideBar.appendChild(colorScale);

const slideContainer = document.querySelector('.slide-container');
sideBar.appendChild(slideContainer);

const resetBtn = document.querySelector('.reset-btn');
sideBar.appendChild(resetBtn);

//Create a function to make a variable grid of squares
function makeRows(rows, cols) {
    sketch.style.gridTemplateRows = `repeat(${rows} 1fr)`;
    sketch.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        sketch.appendChild(cell).className = 'grid-item';
    };
};

makeRows(16, 16);

//Create function to show value of grid slider
const slider = document.getElementById('myRange');
const output = document.getElementById('value');

output.innerHTML = slider.value;

slider.oninput = function range() {
    output.innerHTML = this.value;
}

//Create function to change the color of grid squares to black when hovered over
let black = '#312A2A';

function changeToBlack() {
    document.querySelectorAll('.grid-item').forEach((item) => {
        let mouseOverFunc = function() {
            this.style.background = black;
        };
        item.onmouseover = mouseOverFunc;
    });
}

//Create function to change grid squares to random colors
let color = ['#FF0000', '#FFA500', '#FFFF00', '#8A2BE2', '#228B22', '#0000FF' ];

function rainbow() {
    document.querySelectorAll('.grid-item').forEach((item) => {
        let mouseOverFunc = function() {
            this.style.background = 
            color[Math.floor(Math.random() * color.length)];
        };
        item.onmouseover = mouseOverFunc;
    });
}

//Create function to choose the color of grid change
let userColor = document.querySelector('.color-picker');

userColor.addEventListener('change', colorPicker);

function colorPicker() {
    document.querySelectorAll('.grid-item').forEach((item) => {
        let mouseOverFunc = function() {
        this.style.background = userColor.value;
        };
        item.onmouseover = mouseOverFunc
    });
}

//Create function to change the size of the grid between 16 and 100

//Create function to reset grid size to 16