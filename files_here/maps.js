
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


//delete()method : removes a map
fruits.delete("oranges");

//size of map or no. of elements
document.getElementById("maps").innerHTML = fruits.size;


//has()element   to find an element is present in the map or not return the true or false
document.getElementById("has").innerHTML=fruits.has("oranges");

document.getElementById("has").innerHTML=fruits.has("bag");

//forEach()Method
let text = "";
fruits.forEach(
    function(value,key){
        text += "cost of "+ key + " = " + value + "<br>"
    }
)
document.getElementById("each").innerHTML=text;

//entries()method
let entry = "";
for (const x of fruits.entries()){
    entry+=x + "<br>";

}
document.getElementById("entry").innerHTML=entry;
 

// practice

//newMap

const subjects = new Map([
    ["COA",54],
    ["DSTL",55],
    ["DS",59],
    ["UHV",55],
    ["SNI",55],
    ["CSS",39]
])
document.getElementById("new").innerHTML=subjects.size;

subjects.delete("CSS");
document.getElementById("del").innerHTML=subjects.size;
document.getElementById("js").innerHTML=subjects.has("SNI");

let para="";
subjects.forEach(
      function(value,key){
    para += key +"="+ value + "<br>"
})
document.getElementById("para").innerHTML=para;

