let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i = 1; i < 101; i++) {
    let cell = document.createElement('div');
    field.appendChild(cell);
    cell.classList.add('cell');
}

let cell = document.getElementsByClassName('cell');
let x = 1,
    y = 10;

for (let i = 0; i < cell.length; i++) {
    if (x > 10) {
        x = 1;
        y--;
    }
    cell[i].setAttribute('posX', x);
    cell[i].setAttribute('posY', y);
    x++;
}



function generateSnake() {
    let posX = Math.round(Math.random() * (10 - 3) + 3);
    let posY = Math.round(Math.random() * (10 - 1) + 1);
    return [posX, posY];
}

let coordinates = generateSnake();
console.log(coordinates)
console.log(coordinates[0])
console.log(coordinates[1])
let snakeBody =
    [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'), 
    document.querySelector('[posX = "' + (coordinates[0]-1) + '"][posY = "' + coordinates[1] + '"]'), 
    document.querySelector('[posX = "' + (coordinates[0]-2) + '"][posY = "' + coordinates[1] + '"]')];


for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snake__body');
}

snakeBody[0].classList.add('snake__head')
    
let mouse;

function createMouse() {
    function generateMouse() {
        let posX = Math.round(Math.random() * (10 - 3) + 3);
        let posY = Math.round(Math.random() * (10 - 1) + 1);
    return [posX, posY];
    }
    let mouseCoordinates = generateMouse();
    console.log(mouseCoordinates);
    mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
    
    while(mouse.classList.contains('snakeBody')) {
        let mouseCoordinates = generateMouse();
        mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
    }
    
    mouse.classList.add('mouse');
}

createMouse();


function move() {
    snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
    snakeBody[0].classList.remove('snake__head');
    snakeBody[snakeBody.length-1].classList.remove('snake__body');
    snakeBody.pop();

    if (snakeCoordinates[0] < 10) {
        snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0]+1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
    } else {
        snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] + '"]'))
    }
    
    snakeBody[0].classList.add('snake__head');
    for (let i = 0; i < snakeBody.length; i++) {
        snakeBody[i].classList.add('snake__body');
    }
}

let interval = setInterval(move, 300);