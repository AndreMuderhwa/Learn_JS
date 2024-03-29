//https://dog.ceo/api/breeds/image/random

const dogImageDiv=document.getElementById('dogImage')
const buttonRefresh=document.getElementById('buttonRefresh')

const fetchImage =() =>{
fetch("https://dog.ceo/api/breeds/image/random") //promise
.then(response => response.json()) // promise
.then(json => {
    dogImageDiv.innerHTML=`<img src='${json.message}' height=300 weight=300/>`
})
}

fetchImage()

buttonRefresh.onclick =()=>fetchImage()
