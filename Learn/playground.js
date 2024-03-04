// console.log("Hello World")
//let name="Andrew Muderhwa" const =ce qui ne change pas let=ce qui va changer
//const name, var name
// age=24
//comment

//console.log(name)
//console.log(age)


// food =Number(prompt("How much was your food ??"))
//variables
// tipPercentage= Number(prompt("Tip %"))/100 
//operator
// tipAmount= food * tipPercentage
// total=food+tipAmount

// console.log('Tip Amount',tipAmount)
// console.log('Total',total)
 
/*
data types
string 'hello', numbers23, array[], objects{}, boolean true/ false
Math.floor()
Math.ceil()
Math.random()


//BABY Weather App
if rain grab your embrella else wear your sunglass
*/

//conditionals operators: ==, ===, >,<,<=,>=,!=,!==

// let weather=prompt("How is the weather ?")
// if(weather == 'rain'){
//     console.log('Grab your Umbrella')
// } else{
//     console.log('Wear your sunglasses')
// }

//FUNCTIONS

function SayMyNAME(name){
    console.log(name)
}

//SayMyNAME('Andrew')

function greetings(name){
    greet=`Hi ${name} Nice to meet you !!`
    console.log(greet)
}

//greetings('Anna')

function sum(a ,b){
    return a+b
}

//console.log(sum(12,4))

//BABY TIP CALCULATOR
//old declaration of function
function CalculateFoodTotal(food, tip){
    const tipPercentage= tip/100 
   
    const tipAmount= food * tipPercentage
    const total=sum(food,tipAmount)
    return total
}

//console.log(CalculateFoodTotal(100,20))

//ARROW FUNCTIONS
//arrow function with explicity return 
const SumArrow = (a, b) =>{
    return a + b
}
//arrow function with implicity return

const sum1 =(a, b) => a+b

//ARRAYS

const groceries =['banana','tomato','orange','avocado']

groceries.push("Pomme") //ajouter un element a la fin du tableau
//console.log(groceries)

//console.log(groceries.slice(1,3)) //ttrier  les elements se trouvant a l'indice donnee
//console.log(groceries.slice(3,5))
//array methods : slice, push, indexOf, length
//console.log(groceries.indexOf('Pomme')) //get the index of eleement in array

//console.log(groceries.length)

//OBJECTS

const person={
    name:'Leonardo',
    shirt:'white'
}

//access object : dot notation and bracket notation
// console.log(person.name)
// console.log(person.shirt) 

//bracket notation
// console.log(person['name'])
// console.log(person['shirt'])

person.phone="+243 991 900 843"
person['adress']='Q Katoy, av Bikukwe'

// console.log(person.phone)
// console.log(person.adress)

const person2={
    name:'Qazi',
    shirt:'black'
} 
// console.log(person2)

const introducer=(name, shirt) =>{
    const person={
        name: name,
        shirt: shirt,
        assets: 100000,
        liabilities:23000,
        networth: function (){
            return this.assets - this.liabilities
        }
    }
   const intro= `Hello my name is ${person.name} and the color of my shirt is ${person.shirt}
   and my net worth is $ ${person.networth()} USD `
   return intro
}
 
// console.log(introducer('Andrew','yellow'))

//LOOPS
const fruits =['banana','tomato','orange','avocado','apple']

// for(let i=0; i< fruits.length; i++){
//     console.log(fruits[i])
// } never use this loop

// for (const fruit of fruits){
//     console.log(fruit)
// } use every time this

const numbers=[1,2,3,4,5,6]

const double =(numbers) =>{
    let result =[]
    for(const number of numbers){
        result.push(number * 2)

    }
    return result
}

// for(const num of number){
//     //console.log(num)
//     result.push(num * 2)
// }
 
//console.log(double([2,4,6,8,10,12]))

const HowManyLetters=(phrase)=>{

    // let result =0;
    // for(const index in phrase){
    //     console.log(Number(index)+1)
    //     result = Number(index) + 1
    // }
    return { result : phrase.length }
}

// const phrase=prompt("Ecrit ta phrase")
// console.log(HowManyLetters(phrase))

const SumArrays =(numbers) =>{
    let result=0;
    for (const number of numbers){
        result = result + number
    }
    return { result }
}

//nums = [1,2,3,4,5]
// console.log(SumArrays(nums))
//find max number in array
const findMax= (numbers) => {
    let result = numbers[0]
    for(const number of numbers){
        if(number > result){
            result=number
        }
    }
    
    
    return { result }

}

// console.log(findMax([1,2,3,4,5,6,4,9,10,21,3,2]))

//letter frequency

const letterFrequency =(phrase) =>{
    // let new_phrase=phrase.toLowerCase();
    let frequency={}
    for(const letter of phrase){
        if(letter in frequency){
            frequency[letter] += 1
        }
        else{
            frequency[letter] = 1
        }
    } 
    return frequency
}

// console.log(letterFrequency('haha'))

  

// word frequency

// const wordFrequency =(phrase) =>{
//     let frequency={}
//     words=phrase.split(' ')
//     for(const word of words){
//         if(word in frequency){
//             frequency[word] += 1
//         }
//         else{
//             frequency[word] = 1
//         }
//     }
//     return frequency
// }
//other way to code word frequency
const wordFrequency =(phrase) =>{
    const words=phrase.split(' ')
    return letterFrequency(words)
}

// const userInput=prompt("Entrez une phrase pour voir la frequence des mots !!")

// console.log(wordFrequency(userInput))

//HIGHER ORDER FUNCTIONS
//map : loops and return array
//filter : loops and return array with matching conditions
//reduce : loops and gives you back the accumulator

// let result=[1,2,3,4,5,6,7].map(rs => console.log(rs))
//MAP
const doubleMap =(numbers) =>{
    return numbers.map(number => number * 2)
}
//console.log(doubleMap([1,2,3,4]))
//FILTER

const filterNumber =(numbers, greaterNumber) =>{
    return numbers.filter( number => number > greaterNumber)
}

const actors=[
    {name:'johnny', networth:200000},
    {name:'amber',networth:10},
    {name:'Matt',networth:170000},
    {name:'justin',networth:120000},
    {name:'Andrew',networth:100000},
    {name:'Ciento',networth:100000},
    {name:'Glam',networth:150000},
    {name:'Julia',networth:240000},
    {name:'leonardo', networth:100000}
]
// console.log(filterNumber([1,2,3,4,5,6],3))

// const nums=[1,2,3,4,5,6]
// console.log(nums.filter(num => num > 4 && num < 2))

// console.log(actors.filter(actor => actor.networth > 10))

// let result =actors.filter(actor => actor.networth > 10)
// let names=result.map( rs => rs.name).join(', ')
//playground.innerHTML=`<h1>${result[0].name}</h1>` pour l'enseignant
// document.getElementById('conteneur').innerHTML=`<h1>${names}</h1>`  // pour l'etudiant

// sum all the networth
//SUM : Think reduce
//reduce take in a function as an argument
 
const nums=[1,2,3,4]
const result =nums.reduce((prev, curr) => prev + curr) //addition
const multiply=nums.reduce((prev, curr) => prev * curr) //multiplication

//const totaActor=actors.map( actor => actor.networth).reduce((prev, curr) => prev + curr) //my way to resolve the question
const total=actors.reduce((prev, curr) => prev + curr.networth,0)   // the way of teacher

// console.log(result)
// console.log(multiply)
//console.log(total)

//DOM MANIPULATION => dans le fichier script.js

 

