const token='862167001874135'
const base_url=`https://superheroapi.com/api.php/${token}`

const  getOne= (id,name)=>{
fetch(`${base_url}/${id}`)
.then(response=>response.json())
.then(json=>{
    console.log (json)
document.querySelector('body').innerHTML+='<img src="${json.image.url}" height=200 width=200> '
  })
} 
function randomHero(){
    const heroes=731
    return Math.ceil(Math.random()*heroes)
}
