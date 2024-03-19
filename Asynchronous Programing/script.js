
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
//     .catch(error => console.log({error}))       // transform this code using async and await

// )

const getPromise=async ()=>{
    try{
        const p= await promise
        console.log(p)
    }
    catch(err){
        console.log(err)
    }
}

getPromise()

// console.log(
//     fetch('https://dog.ceo/api/breeds/image/random') //promise
//     .then(response => response.json()) //promise
//     .then(data => console.log(data))
//     .catch(error => console.log({error:"Error for feching data"}))

// )

//USING KEYWORD ASYNC / AWAIT

const getRandomDog = async()=>{
    try{
        const url ='https://dog.ceo/api/breeds/image/random'
        const response = await fetch(url)
        const data =await response.json()
        console.log(data) 
    }
    catch(err){
        console.log('Error fetching data',err)
    }
   
}


//getRandomDog()