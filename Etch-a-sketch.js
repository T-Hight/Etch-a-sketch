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

function makeRows(rows, cols) {
    sketch.style.setProperty('--grid-rows', rows);
    sketch.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        sketch.appendChild(cell).className = 'grid-item';
    };
};

makeRows(16, 16);

const blackBtn = document.querySelector('.black-btn');
sideBar.appendChild(blackBtn);

const colorBtn = document.querySelector('.color-btn');
sideBar.appendChild(colorBtn);

const colorScale = document.querySelector('.color-scale-btn');
sideBar.appendChild(colorScale);

const gridBtn = document.querySelector('.grid-btn');
sideBar.appendChild(gridBtn);

const resetBtn = document.querySelector('.reset-btn');
sideBar.appendChild(resetBtn);