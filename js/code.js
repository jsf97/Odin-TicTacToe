const screen = document.querySelector('.container')


// GAMEBOARD UI 
const mid = document.querySelector('.mid');
const arrayGameboard = []

for(i = 0; i <= 8; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  arrayGameboard.push(cell)
  mid.appendChild(cell);
}




// FACTORY FUNCTION (must be atacched on buttons)
function newPlayer(name, mark) {
  return {name, mark}
}

// BEFORE PLAY BUTTON


// Get players name function


// Get mark function


// Start playing function




// AFTER PLAY BUTTON
let pX = true;
let p0 = false;
let winCombinations = [[arrayGameboard[0], arrayGameboard[1], arrayGameboard[2]],
                       [arrayGameboard[3], arrayGameboard[4], arrayGameboard[5]],
                       [arrayGameboard[6], arrayGameboard[7], arrayGameboard[8]],
                       [arrayGameboard[0], arrayGameboard[4], arrayGameboard[8]],
                       [arrayGameboard[2], arrayGameboard[4], arrayGameboard[6]]];

function checkWinX(win) {
  return win.textContent === 'X'
};

function checkWin0(win) {
  return win.textContent === '0'
};

(function abc() {
  arrayGameboard.forEach((e) => {
    e.addEventListener('click', ()=> {
      if (pX) {
        e.textContent = 'X'
        pX = false;
        p0 = true;
        for(i = 0; i < winCombinations.length; i++) {
          if(winCombinations[i].every(checkWinX)) {
            console.log('a')
            p0 = false;
          }
        }
      }
      else if (p0) {
        e.textContent = '0'
        pX = true;
        p0 = false;
        for(i = 0; i < winCombinations.length; i++) {
          if(winCombinations[i].every(checkWin0)) {
            console.log('a')
            pX = false;
          }
        }
      }

    })
  })
})()


