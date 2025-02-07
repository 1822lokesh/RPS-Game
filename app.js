let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genComp = () => {
    const options = ["Rock", "Paper","Scissors"];
    const randIDx = Math.floor(Math.random() *3);
    return options[randIDx];
};

const drawGame = () => {
    msg.innerText = ("Game Was Draw : Play Again!!");
    msg.style.backgroundColor= "#000051";
};
const showWinner =(userWin, userchoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!!" ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    } else{
        computerScore++;
        compScorepara.innerText = computerScore;
         msg.innerText = `You Lost!!" ${compChoice} beats your ${userchoice}`;
         msg.style.backgroundColor= "red";
    }
};

const playGame=(userchoice) => {
    
    const compChoice = genComp ();
    
    if(userchoice === compChoice) {
        drawGame();   
    } else {
        let userWin= true;
        if(userchoice === "Rock") {
            userWin= compChoice === "Paper" ? false : true;
        } else if(userchoice === "Paper") {
            userWin= compChoice === "Scissors" ? false : true;
        }else {
            userWin= compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }

};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
