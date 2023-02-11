// Player factory
const Player = (name) => {
  return name
}

const gameBoard = (() => {
  // Gettings cells and pushing into an array
  const getCells = document.querySelectorAll('.cell');
  const cell = []
  for (i = 0; i < getCells.length; i++) {
    cell.push(getCells[i])
  }
  //
  // Putting marks in cells
  let turnX = true;
  let turn0 = false;

  cell.forEach((e)=> {
    e.addEventListener('click', ()=> {
      if (turnX === true && e.textContent === '') {
        e.textContent = 'X'
        turnX = false;
      }
       else if (turnX === false && e.textContent === '') {
         e.textContent = '0';
         turnX = true;
       }
    })
  })

  // Function to check winner
  cell[0].textContent = 'x'
  cell[1].textContent = 'x'
  cell[2].textContent = 'x'
  let winCombination = [
    [cell[0], cell[1], cell[2]],
    [cell[3], cell[4], cell[5]],
    [cell[6], cell[7], cell[8]]
  ]
  
  winCombination.forEach((e) => {
    e.forEach((f) => {
      console.log(f.textContent)
    })
  })

})();
