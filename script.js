// console.log("Hello World")
//let name="Andrew Muderhwa"
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
console.log(person.name)
console.log(person.shirt) 

//bracket notation
console.log(person['name'])
console.log(person['shirt'])

person.phone="+243 991 900 843"
person['adress']='Q Katoy, av Bikukwe'

console.log(person.phone)
console.log(person.adress)

const person2={
    name:'Qazi',
    shirt:'black'
} 