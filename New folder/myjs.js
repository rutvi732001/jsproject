let usersChoice = document.getElementById("userChoice");
let computersChoice = document.getElementById("computerChoice");
let result = document.getElementById("result");
let button = document.querySelectorAll(".btn");
let score = document.getElementById("score");
let  computerChoice
let  userChoice 
let selectWinner
let increaseScore = 0 ;

button.forEach((button)=>{
    button.addEventListener('click',()=>{
    userChoice = button.textContent;
     usersChoice.innerHTML =`Your choice : ${userChoice}`;
     computerChoiceFun();
     resultFun();
     selectWinner = resultFun();
     result.innerHTML = `Result : ${selectWinner}`
     addScore();
     score.innerHTML=`Score : ${increaseScore}`;

    })})
 
function computerChoiceFun() 
{
    let choice = Math.floor(Math.random()*4);

    switch(choice)
    {
        case 1 : computerChoice = `Rock`
        break ; 

        case 2 : computerChoice = `Scissors`
        break ; 

        case 3 : computerChoice = `Papper`
        break ; 
    }
    
    computersChoice.innerText = `Computer choice :${computerChoice}`

}
function resultFun()

{ 
     if(computerChoice == "Scissor" && userChoice == "Scissor"){
    return  "Its draw"
   }else 
   if(userChoice === computerChoice){
    return "Its draw"
   }else
   if(computerChoice == "Rock"){
    return  (userChoice == "Papper") ? "You win": "You loose"
   }else 
   if(computerChoice == "Papper"){
    return (userChoice == "Rock")  ? "You loose" :  "You win"
   }else(computerChoice =="Scissor")
   {
    return (userChoice == "Papper")  ? "You loose" :"You win"
   }

}
function addScore()
{
    if(selectWinner == "You win")
    {
      return  increaseScore++ ;
    }
}
