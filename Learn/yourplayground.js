
//USE RANDOM TO PICK SOME VALUE IN ARRAY

const RandomFruit = (fruit ) =>{
    const randomNumber= Math.floor(Math.random() * fruit.length)
    return fruit[randomNumber]
 }
 
 const fruits =['banana','tomato','orange','avocado','apple']
 console.log(RandomFruit(fruits))
 