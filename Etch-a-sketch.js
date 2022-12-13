const header  = document.querySelector('.header');


const intBox = document.createElement('div')
intBox.textContent = "Etch a Sketch";
header.appendChild(intBox);

const main = document.querySelector('.main');

const sideBar = document.querySelector('.sidebar');
main.appendChild(sideBar);

const sketchBox = document.querySelector('.sketchBox')
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

