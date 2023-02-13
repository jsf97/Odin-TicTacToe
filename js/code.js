const screen = document.querySelector('.container')
// GAMEBOARD UI 

const mid = document.querySelector('.mid');

for (i = 0; i < 9; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell', `cell-${i}`);
  mid.appendChild(cell);
}