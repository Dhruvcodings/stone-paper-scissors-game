let userScore=0;
let computerScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const genCompChoice =()=>{
    //rock,paper,scissor
    const options=["rock","paper","scissors"];
    const randInd=Math.floor(Math.random() *3);
    let select=options[randInd];
    choices.forEach(choice => {
        choice.style.backgroundColor = "";
    });
    const img=document.querySelector(`#${select}`);
    img.style.backgroundColor="yellow";
    return options[randInd];
}


const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText="Game was Draw play again."
    msg.style.backgroundColor = "#081b31";
}

const showWinner =(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
        
    }else{
        computerScore++;
        compScorePara.innerText=computerScore;
        msg.innerText=`You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        

        
    }
};


const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    // Generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice==compChoice){
        // Draw Game
        drawGame();
    } else{
        let userWin=true;
        if(userChoice=="rock"){
            // scissors , paper
            userWin=compChoice == "paper" ? false : true;

        }else if(userChoice=="paper"){
            // rock,scissors
            userWin=compChoice=="scissors"? false:true;
        }else{
            // rock,paper
            userWin=compChoice=="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    

};
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        userChoice=choice.getAttribute("id");
        playGame(userChoice)
    });
});






