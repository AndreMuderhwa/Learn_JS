const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberPeople = document.getElementById('numberOfPeople')
const personTotalDiv = document.getElementById('perPersonTotal')
let numberOfPeople = Number(numberPeople.innerText)



const calculateBill =() =>{
    const bill = billTotalInput.value
    const tipPercentage = Number(tipInput.value) / 100
    const tipAmount = bill * tipPercentage
    const total = tipAmount + bill
    const perPerson = total / numberOfPeople
    personTotalDiv.innerText=`$${perPerson.toFixed(2).toLocaleString('en-US')}`
}

const increasePeople = () =>{
    numberOfPeople += 1
    numberPeople.innerText=numberOfPeople
    calculateBill()
}


const decreasePeople =() =>{
    if(numberOfPeople <= 1){
       // throw 'On ne peux pas avoir un nombre de personne en dessous de 1'
        return
    }
    numberOfPeople -= 1
    numberPeople.innerText=numberOfPeople
    calculateBill()
    

}

//continue a 4:59:59