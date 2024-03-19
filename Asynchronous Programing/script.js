
// const waitingSoup =()=>{
//     console.log('Get the soup')
// }
// console.log('You start the Convo with GF')
// setTimeout(waitingSoup,2000)
// console.log('Still speaking')


const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        isReady=[true,false][Math.floor(Math.random()*2)]
        isReady ? resolve('Soup is Ready') : reject('No soup today')

    }, 2000)
})

// console.log(
//     promise
//     .then(success => console.log({success}))
//     .catch(error => console.log({error}))

// )

console.log(
    fetch('https://dog.ceo/api/breeds/image/random') //promise
    .then(response => response.json()) //promise
    .then(data => console.log(data))
    .catch(error => console.log({error:"Error for feching data"}))

)