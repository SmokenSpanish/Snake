let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i=1; i<101; i++) {
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