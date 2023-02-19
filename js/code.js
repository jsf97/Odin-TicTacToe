const screen = document.querySelector('.container')


// GAMEBOARD UI 
const mid = document.querySelector('.mid');
const arrayGameboard = []

for(i = 0; i <= 8; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell', `cell-${i}`);
  // cell.textContent = 
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

                       [arrayGameboard[0], arrayGameboard[3], arrayGameboard[6]],
                       [arrayGameboard[1], arrayGameboard[4], arrayGameboard[7]],
                       [arrayGameboard[2], arrayGameboard[5], arrayGameboard[8]],

                       [arrayGameboard[0], arrayGameboard[4], arrayGameboard[8]],
                       [arrayGameboard[2], arrayGameboard[4], arrayGameboard[6]]];



const checkWinX = (win) => {
  if (win.textContent === 'X') {
    return true
  }
}

const checkWin0 = (win) => {
  if (win.textContent === '0') {
    return true
  }
}

const getWinner = () => {
  winCombinations.forEach((e) => {
    if ((e.every(checkWinX)) || (e.every(checkWin0))) {
      console.log('Ganaste')
      e.forEach((x) => {
        x.style = 'background-color: green; color:white; transition: .2s'
      })
      turn0 = false;
      turnX = false;
    }
  })
}

let turnX = true;
let turn0 = false;


arrayGameboard.forEach((e) => {
  e.addEventListener('click', ()=> {
    if (turnX === true && e.textContent !== undefined) {
      e.textContent = 'X'
      turn0 = true;
      turnX = false;
      getWinner()

    }

    else if (turn0 === true && e.textContent !== undefined) {
      e.textContent = '0'
      turn0 = false;
      turnX = true;
      getWinner()
    }
  })
})

// for (i = 0; i < winCombinations.length; i++) {
//   console.log(winCombinations[i].every(checkWin))
// }