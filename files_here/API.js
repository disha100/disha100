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
        document.getElementById("loc").innerHTML=inpObj.validationMessage;

    }
    else{
        document.getElementById("loc").innerHTML="Input OK";
    }
}