

var note = "new day , new work";
console.log("gobal:"+ note);

var g = function(){
    var note="new day , new thought";
    console.log("g says: "+ note);
    function h(){
        console.log("h:note = "+ note);
        
    }
    h();

}

 function f(){
    var note=" g is right";
    console.log("f says: "+ note);
 
 }

g();
f();

var v;
v = 0;
console.log(v);

var x;
x=6;
if( x == undefined){
    console.log("x is undefined");
}

else{
    console.log("x is defined and equals to "+x);
}


















