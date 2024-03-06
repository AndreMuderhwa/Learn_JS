
//USE RANDOM TO PICK SOME VALUE IN ARRAY

const RandomFruit = (fruit ) =>{
    const randomNumber= Math.floor(Math.random() * fruit.length)
    return fruit[randomNumber]
 }
 
 const fruits =['banana','tomato','orange','avocado','apple']
 console.log(RandomFruit(fruits))

 // exercice about rain, sunny overcast
 // rainny ==1 sunny ==-1 overcast == 0


 const weatherScore = (weather) =>{
    let score 
    if (weather =='rainy'){
        score=1
    }else if(weather == 'sunny'){
        score = -1
    }else{
        score = 0
    }

 }

 //5:18:19