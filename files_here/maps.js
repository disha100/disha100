
//new map() method
const fruits = new Map([
    ["pen",50],
    ["book",500],
    ["bag",600]
]);
//document.getElementById("maps").innerHTML = fruits.get("pen");

//set() method
const  tools = new Map();
tools.set("nails",10);
tools.set("hammer",1);
document.getElementById("set").innerHTML = tools.get("nails");
fruits.set("oranges",400);
//document.getElementById("maps").innerHTML = fruits.get("oranges");

//get() method
//document.getElementById("maps").innerHTML = fruits.get("oranges");

document.getElementById("maps").innerHTML = fruits.size;
