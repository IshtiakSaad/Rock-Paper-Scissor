const myMove = document.getElementById("myMove");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const machine = document.getElementById("machine");
const verdictFinal = document.getElementById("verdict");
const Yscore = document.getElementById("Yscore");
const Xscore = document.getElementById("Xscore");
var flag = 0, Y = 0, X = 0;

rock.addEventListener('click', (event) => {
    event.preventDefault();
    myMove.innerHTML = "Rock!";
    
    machineMove();

    if(flag==0){
        verdictFinal.innerHTML = "Tie";
    }
    else if(flag==1){
        verdictFinal.innerHTML = "Lost";
        X++;
    }
    else{
        verdictFinal.innerHTML = "Win";
        Y++;
    }

    result();
})
paper.addEventListener('click', (event) => {
    event.preventDefault();
    myMove.innerHTML = "Paper?";
    
    machineMove();

    if(flag==0){
        verdictFinal.innerHTML = "Win";
        Y++;
    }
    else if(flag==1){
        verdictFinal.innerHTML = "Tie";
    }
    else{
        verdictFinal.innerHTML = "Lost";
        X++;
    }

    result();
})
scissor.addEventListener('click', (event) => {
    event.preventDefault();
    myMove.innerHTML = "Scissor..XXXX";
    
    machineMove();

    if(flag==0){
        verdictFinal.innerHTML = "Lost";
        X++;
    }
    else if(flag==1){
        verdictFinal.innerHTML = "Win";
        Y++;
    }
    else{
        verdictFinal.innerHTML = "Tie";
    }

    result();
})

function machineMove(){
    var num = Math.floor(Math.random() * 10);

    if(num%3 == 0){
        flag = 0;
        machine.innerHTML = "The computer played Rock!";
    }
    else if(num%3 == 1){
        flag = 1;
        machine.innerHTML = "The computer played Paper!";
    }
    else{
        flag = 2;
        machine.innerHTML = "The computer played Scissor!";
    }
}

function result(){
    Yscore.innerHTML = Y;
    Xscore.innerHTML = X; 
}