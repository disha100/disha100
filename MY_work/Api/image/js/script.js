
const dogImageDiv = document.getElementById("dogImage");
function myFunction() {
    fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {
    console.log(json.message)
    dogImageDiv.innerHTML=`<center><img src='${json.message}' height="550" width="800"></center>`
})

}



//.then - promises
