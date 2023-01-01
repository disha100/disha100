let redDiv= document.getElementById('red')
let yellowDiv= document.getElementById('yellow')
let greenDiv= document.getElementById('green')

redDiv.onclick=()=>console.log("you clicked red")
yellowDiv.onclick=()=>console.log("you clicked yellow");
greenDiv.onclick=()=>console.log("you clicked green");

const squares=document.querySelectorAll('.colorSquare')
console.log(squares)
//  console.log(squares[1].value)
//  console.log(squares[2].value)
//  console.log(squares[0].value)


// use of ....for Each

squares.forEach(square =>console.log(square.value))

const timesClicked={'red':0,'yellow':0,'green':0}
squares.forEach(square => {
    square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
  //  console.log (square.value)
    }
})

clearScores = ()=>{
    squares.forEach(square=>square.innerText = '0')
}
const clearGame = document.getElementById('clear-game')
clearGame.onclick=()=>clearScores()

