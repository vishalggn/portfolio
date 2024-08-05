
let body = document.querySelector("body")
let boxes = Array.from(document.querySelectorAll(".box"))
let playerText = document.querySelector(".player-text")
let resetBtn = document.querySelector(".reset")
let winnerStreaks = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const PlayerX_text= "X"
const PlayerO_text = "O"
let currentPlayer = PlayerX_text
let spaces = Array(9).fill(null)

const startGame = () =>{
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked (e) {
 const id = e.target.id

if (!spaces[id]){
    spaces[id] = currentPlayer 
    e.target.innerText = currentPlayer

    if (currentPlayer == PlayerX_text){
        currentPlayer = PlayerO_text
        e.target.style.backgroundColor = "white"
    }
    else {
        currentPlayer = PlayerX_text
        e.target.style.backgroundColor = "black"
        e.target.style.color = "white"


    }

   let winningcombo = playerWon()
   if (winningcombo){
    playerText.innerText = `${spaces[winningcombo[0]]} has won!`
    boxes.forEach(box => box.removeEventListener('click', boxClicked));
    }
    else if (spaces.every(space => space !==null)){
        playerText.innerText = "Sad! Match is draw"
    }
}}

resetBtn.addEventListener("click", reset)

function reset (){
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ""
        box.style.backgroundColor = "pink"
        box.style.color = "#434242"
    })

    currentPlayer = PlayerX_text
    playerText.innerText = ""
    startGame()
}

function playerWon() {
  for (const conditon of winnerStreaks) {
    let [a,b,c] = conditon
    if (spaces [a] && spaces[a] === spaces[b] && spaces[a] == spaces[c]){
        return [a,b,c]
    }
  } 
  return false
}


startGame()

