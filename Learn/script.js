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

// redDiv.onclick = () => console.log("red")
// yellowDiv.onclick =() => console.log('yellow')
// greenDiv.onclick =() => console.log('green')

const squares=document.querySelectorAll('.colorSquare') // get the class from html to DOM
// console.log(squares)
timesClicked={'red':0,'yellow':0,'green':0}
squares.forEach( square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText=timesClicked[square.value]
    }
})

const clearScores =() =>{
    for(const time in timesClicked){       ///for (const t in time)  s'utilise  pour iterer sur des objects/// for (const t of time ) s'utilise pour des arrays et strings
        timesClicked[time]=0
    }
    squares.forEach( square => {
        square.innerText=''
    })
}

let clearBtn= document.getElementById('clear-game')

clearBtn.onclick = ()=> clearScores()

