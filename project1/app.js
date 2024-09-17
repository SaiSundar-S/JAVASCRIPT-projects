let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');


const gencompchoice=()=>{
    //rock,paper,scissor
    let options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
};
const drawGame=()=>{
    msg.innerText="game is draw ,play again !";
    msg.style.backgroundColor="black";

};
const showWinner=(userWIN,userchoice,compchoice)=>{
    if(userWIN){
        userScore++;
        userScorePara.innerText=userScore;
       msg.innerText='You win! ';
       msg.style.backgroundColor="green";

    } else{
        computerScore++;
        compScorePara.innerText=computerScore;
      msg.innerText='You lose ';
      msg.style.backgroundColor="red";

    }
};

const playGame=(userchoice)=>{
    console.log("user choice =",userchoice);
    //generate comp choice
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);

    if (userchoice===compchoice){
        drawGame();
    }else{
        let userWIN=true;
        if(userchoice==="rock"){
            userWIN=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
          userWIN=  compchoice==="scissors"?false:true;
        }else{
           userWIN= compchoice==="rock"?false:true;

        }
        showWinner(userWIN,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
     const userchoice=choice.getAttribute("id");
    playGame(userchoice);
});
});