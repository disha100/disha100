var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#F6F0BC";
ctx.fillRect(0,0,520,520);

var N = 20;
var size = 520;
var cellSize = size/N;
for(var i=0;i<N;i++){
    for(var j=0;j<N;j++){
        if((i+j)%2==0){
            ctx.fillStyle = "#F6F0BC";
        }else{
            
            ctx.fillStyle="#D1C9B8";
        }
        ctx.fillRect(i*cellSize,j*cellSize,cellSize,cellSize);
    }
}