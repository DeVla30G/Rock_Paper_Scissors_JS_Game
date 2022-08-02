const yourSelection = document.createElement("h1");
const computerSelection = document.createElement("h1");
const resultOutput = document.createElement("h1");
const gameGrid = document.getElementById("game")
gameGrid.append(yourSelection, computerSelection, resultOutput);

const choices = ["rock", "paper", "scissors"];
const images = ['<img src="./images/rock.png"/>', '<img src="./images/paper-icon.png"/>', '<img src="./images/scissors-icon.png"/>'];

let userChoice
let computerChoice 

const handleClick = (e) => {
    console.log("marche")
    userChoice = e.target.id;
    console.log(userChoice)
    yourSelection.innerHTML = "You : " + userChoice;
    generateRCC()
    resultOutput.innerHTML = getResult();
}

const generateRCC = () => {
    const randomChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(randomChoice)
    computerChoice = randomChoice
    computerSelection.innerHTML = "Computer : " + computerChoice;
}

for (i=0; i<choices.length; i++){
    const button = document.createElement("button");
    button.id = choices[i]; // or use e.target.innerHTML in handleClick()
    button.innerHTML = choices[i] + images[i];
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button);
}

const getResult = () => {
if (userChoice === computerChoice ){
    return "NULL";
} else if (userChoice + computerChoice === "pierreciseaux" || userChoice + computerChoice === "ciseauxpapier" || userChoice + computerChoice === "papierpierre"  ) {
    return "YOU WIN"
} else {
    return "YOU LOSE"
}


}