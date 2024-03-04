
const billInput=document.getElementById('billTotalInput')
const  perPersonTotalDiv=document.getElementById('perPersonTotal')
const  tipInput =document.getElementById('tipInput')
const  numberPeople=document.getElementById('numberOfPeople')

let numberOfPeople=Number(numberPeople.innerText)

const calculateBill =() =>{
 const bill =Number(billInput.value)
 const tipPercentage=Number(tipInput.value) / 100
 const tipAmount = bill * tipPercentage
 const total =tipAmount + bill
 const personTotal =total / numberOfPeople
 perPersonTotalDiv.innerText=`$${personTotal}`

}

const increasePeople =()=>{}

const decreasePeople =() =>{}