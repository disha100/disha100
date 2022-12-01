//only five functions
function getComputerChoice(){
//select randomly between rock, paper and scissors
const rpsChoice = ['Rock','Paper','Scissors']
const randomNumber = Math.floor(Math.random()*3)
return rpsChoice[randomNumber]
}

function getResult(playerChoice,computerChoice){
        //return result if you win , lost or draw
    let score;
           //score sets to zero whenever the game draws
        if (playerChoice==computerChoice){
                score = 0;
        }
            //score sets to one whenevre the player wins (all situations)
        else if(playerChoice=='Rock'&&computerChoice=='Scissors'){
                score = 1;
        }
        else if(playerChoice=='Paper'&&computerChoice=='Rock'){
                score = 1;
        }
        else if(playerChoice=='Scissors'&&computerChoice=='Paper'){
                score = 1;
        }
            // when player loses set score to -1 
        else{
            score=-1
        }
//return score
return score;

}

function showresult(score,playerChoice,computerChoice){


}

function onClickRPS(playerChoice){
console.log({playerChoice})
const computerChoice = getComputerChoice()
console.log({computerChoice})
const score= getResult(playerChoice,computerChoice)
console.log({score})
}

function playGame(){
//select all the rps buttons using query selectors
const rpsButtons = document.querySelectorAll('.rpsButton')
rpsButtons[0].onclick = ( ) => console.log(rpsButtons[0].value) 
rpsButtons.forEach(rpsButton => {
        rpsButton.onclick=()=>onClickRPS(rpsButton.value)
})
}

function endGame(){

}
 playGame()