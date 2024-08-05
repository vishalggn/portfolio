
let body = document.querySelector("body");
let boxes = Array.from(document.querySelectorAll(".box"));
let playerText = document.querySelector(".player-text");
let winnerStreaks = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const PlayerX_text= "X";
const PlayerO_text = "O";
let currentPlayer = PlayerX_text;
let spaces = Array(9).fill(null);

const startGame = () =>{
    boxes.forEach(box => box.addEventListener('click', boxClicked))
};

function boxClicked (e) {
 const id = e.target.id;

if (!spaces[id]){
    spaces[id] = currentPlayer ;
    e.target.innerText = currentPlayer;
    currentPlayer = currentPlayer === PlayerX_text ? PlayerO_text : PlayerX_text;
}};

startGame();