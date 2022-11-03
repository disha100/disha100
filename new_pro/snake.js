let direction = {x: 0,y: 0};
const foodSound = new Audio('sound/food.mp3');
const gameOverSound = new Audio('sound/gameover.mp3');
const moveSound = new Audio('sound/move.mp3');
let speed=2;
let lastPaintTime=0;
let snakeArr = [
    {x:15,y:13}
];
food = {x: 6, y: 7};


function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function gameEngine(){
    //snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })
    //food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
}






window.requestAnimationFrame(main)











































// var canvas = document.getElementById("mycanvas");
// var ctx = canvas.getContext("2d");
// ctx.fillStyle = "#F6F0BC";
// ctx.fillRect(0,0,520,520);

// var N = 20;
// var size = 520;
// var cellSize = size/N;
// for(var i=0;i<N;i++){
//     for(var j=0;j<N;j++){
//         if((i+j)%2==0){
//             ctx.fillStyle = "#F6F0BC";
//         }else{
            
//             ctx.fillStyle="#D1C9B8";
//         }
//         ctx.fillRect(i*cellSize,j*cellSize,cellSize,cellSize);
//     }
// }
// function handleKey(e){
//     e=e||window.event;
//     if (e.keyCode == '38'){
//  }
//     else if (e.keyCode == '40'){
//  }
//     else if (e.keyCode == '37'){
//  }
//     else if (e.keyCode == '39'){
//  }
//     console.log(e.keyCode);


// }
// document.onkeydown = handleKey;