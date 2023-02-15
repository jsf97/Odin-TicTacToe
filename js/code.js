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

// Get mark function
const getMark = document.querySelectorAll('.p-mark');
getMark.forEach((e) => {
  e.addEventListener('click', ()=> {
    if (e === getMark[0] || e === getMark[3]) {
      getMark[0].classList.toggle('active')
      getMark[3].classList.toggle('active')
      getMark[1].classList.remove('active')
      getMark[2].classList.remove('active')
    }
    else if  (e === getMark[1] || e === getMark[2]) {
      getMark[1].classList.toggle('active')
      getMark[2].classList.toggle('active')
      getMark[0].classList.remove('active')
      getMark[3].classList.remove('active')
    }
  })
})



// AFTER PLAY BUTTON
(function abc() {
  arrayGameboard.forEach((e) => {
    e.addEventListener('click', ()=> {
      e.textContent = 'a'
    })
  })
})()


