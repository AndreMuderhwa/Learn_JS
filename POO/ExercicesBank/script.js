class BankAccount{

    constructor(balance){
        this.balance=balance
    }
    deposit(amount){
        this.balance +=amount
    }
    withdraw(amount){
        return this.balance >= amount ? this.balance -=amount : console.log("You don't have the enough money")
    }
}
const balance=document.getElementById('balance')
const amount=document.getElementById('amount').value;

andrew=new BankAccount(0)

const showBalance=()=>{
    balance.innerText=andrew.balance
}

const deposit =()=>{
    const montant =Number(amount)
    andrew.deposit(montant)
    showBalance()
    
}

const withdraw =()=>{
    const montant=Number(amount)
    andrew.withdraw(montant)
    showBalance()
}

// andrew=new BankAccount(100)
// console.log(andrew.balance)
// console.log('Deposit')
// andrew.deposit(500)
// console.log(andrew.balance)
// console.log('Withdraw')
// andrew.withdraw(700)
// console.log(andrew.balance)