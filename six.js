function a(){
    return{
        student:"john"
    };
}
console.log(a());

//loop

var sum=0;
for(var i=1;i<=10;i++){
    sum += i;
}
console.log(sum);


//default values

function food(sideDish){
    if(sideDish===undefined){
        sideDish = "daal";
    }
    console.log("Roti with " + sideDish);
}
food("sabji");
food();
food("curry");
food();