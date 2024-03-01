//DOM MANIPULATION

let titleDiv=document.getElementById("title")
console.log("Before: ",titleDiv.innerText)
let message="Hello dear";
titleDiv.innerText=message
console.log("After: ",titleDiv.innerText)

titleDiv.innerHTML=`<p>${message}</p>`
titleDiv.style.color='red'
titleDiv.style.backgroundColor='black'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

redDiv.onclick = () => console.log("red")

//recommencer a 04:03:27