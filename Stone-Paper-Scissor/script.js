const Stone = document.querySelector("#stone");
const Paper = document.querySelector("#paper");
const Scissors = document.querySelector("#scissors");
const msgBox = document.querySelector(".message");
const computerChoiceMsg = document.querySelector(".computerChose");
const userScoreElement = document.querySelector(".user-score");
const botScoreElement =  document.querySelector(".bot-score");
const resetBtn = document.querySelector(".reset");

let userScore = 0;
let botScore = 0;

const playGame = (userChoice) => {
    let computerChoice = getComputerChoice();
    computerChoiceMsg.innerText = `You Chose : ${userChoice} || Computer Chose: ${computerChoice}`;
    determineWinner(userChoice, computerChoice);

}

const determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === computerChoice){
        msgBox.innerText = "It's draw";
        msgBox.style.backgroundColor = "Blue";
    } else if ( (userChoice === "Stone" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Stone")){
        msgBox.innerText = " You won!";
        msgBox.style.backgroundColor = "Green";
        userScore++;
        userScoreElement.innerText = `${userScore}`;
    }
    else {
        msgBox.innerText = "You Lose!";
        msgBox.style.backgroundColor = "Red";
        botScore++;
        botScoreElement.innerText = `${botScore}`;
    }
}

const getComputerChoice = () =>{
    let randomNumber = Math.random()*3;
    let choiceIndex = Math.floor(randomNumber);
    let choices = ["Stone", "Paper", "Scissors"];
    return choices[choiceIndex];
}

Stone.addEventListener("click", () => playGame("Stone"));
Paper.addEventListener("click", () => playGame("Paper"));
Scissors.addEventListener("click", () => playGame("Scissors"));

resetBtn.addEventListener("click", () =>{
    userScore = 0;
    botScore = 0;
    userScoreElement.innerText = "0";
    botScoreElement.innerText = "0";
    msgBox.innerText ="Play Now";
    msgBox.style.backgroundColor = "rgb(171, 2, 255)";
    computerChoiceMsg.innerText = "";
})