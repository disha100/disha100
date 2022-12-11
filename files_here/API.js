const x = document.getElementById("api");
function getLocation(){
    try{
        navigator.geolocation.getCurrentPosition(showPosition);
    }catch{
        x.innerHTML=err;
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +"<br> Longitude:"+position.coords.longitude;
}

// check validity()

function myFunction(){
    const inpObj= document.getElementById("id1");
    if(!inpObj.checkValidity()){
        document.getElementById("loc1").innerHTML=inpObj.validationMessage;

    }
    else{
        document.getElementById("loc1").innerHTML="Input OK";
    }
}


// range overflow property

function flow(){
    let text;
    if(document.getElementById("id2").validity.rangeOverflow){
    text="Value too large."
}
else{
    text= "Value OK.";
}
document.getElementById("loc2").innerHTML=text;
}

//similarly the range underflow property for min value of input.

//WEB HISTORY API : provide easy method to provide easy methods to access the windows.history object.
//windows.history contains the URLs (websites ) visited by the user.

//history back() method : loads the previous URL in the windows.history
// it is same as clicking the "back arrow".


function backBtn(){
    windows.history.back();
}

//history go method : loads a specific url in hte history list  
function goBack() {
    window.history.go(-2);
  }

  // forward():loads the next URL in the history list.

  localStorage.setItem("name","John Doe");
document.getElementById("demo").innerHTML = localStorage.getItem("name");

//web worker API
// let w;

// function startWorker() {
//   if(typeof(w) !== "undefined") {
//     w = new Worker("demo_workers.js");
//   }
//   w.onmessage = function(event) {
//     document.getElementById("result").innerHTML = event.data;
//   };
// }
// function stopWorker() { 
//     w.terminate();
//     w = undefined;
//   }


//Fetch API

