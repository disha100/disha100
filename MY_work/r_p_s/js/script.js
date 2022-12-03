const totalScore = {computerChoice: 0,playerChoice: 0}

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
        const resultDiv = document.getElementById('result')
        const handsDiv = document.getElementById('hands')
        const playerScoreDiv = document.getElementById('player-score')

if(score==-1)
{
 resultDiv.innerText = 'You Lose!'
} else if(score==0){
        resultDiv.innerText = 'Its s tie!'
}else{
        resultDiv.innerText = 'You Won!'
}


handsDiv.innerText= `🧑‍🦰${playerChoice} vs 🤖${computerChoice}`
playerScoreDiv.innerText = `Your score:${totalScore['playerScore']}`


}

function onClickRPS(playerChoice){

const computerChoice = getComputerChoice()


const score= getResult(playerChoice,computerChoice)
totalScore['playerScore'] += score
showresult(score,playerChoice,computerChoice)

}

function playGame(){
//select all the rps buttons using query selectors
const rpsButtons = document.querySelectorAll('.rpsButton')
rpsButtons[0].onclick = ( ) => console.log(rpsButtons[0].value) 
rpsButtons.forEach(rpsButton => {
        rpsButton.onclick=()=>onClickRPS(rpsButton.value)
})
let endGamebutton = document.getElementById('endGameButton')
endGamebutton.onclick = () => endGame()
}

function endGame(){
 let playerScore = document.getElementById('player-score')
 let hands = document.getElementById('hands')
 let result = document.getElementById('result')
 playerScore.innerText = ""
 hands.innerText=""
 result.innerText = ""
}
 playGame()