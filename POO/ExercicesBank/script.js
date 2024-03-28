// class BankAccount{

//     constructor(balance){
//         this.balance=balance
//     }
//     deposit(amount){
//         this.balance +=amount
//     }
//     withdraw(amount){
//         return this.balance >= amount ? this.balance -=amount : console.log("You don't have the enough money")
//     }
// }
// const balance=document.getElementById('balance')
// const amount=document.getElementById('amount').value;

// andrew=new BankAccount(0)

// const showBalance=()=>{
//     balance.innerText=andrew.balance
// }

// const deposit =()=>{
//     const montant =Number(amount)
//     andrew.deposit(montant)
//     showBalance()
    
// }

// const withdraw =()=>{
//     const montant=Number(amount)
//     andrew.withdraw(montant)
//     showBalance()
// }

// // andrew=new BankAccount(100)
// // console.log(andrew.balance)
// // console.log('Deposit')
// // andrew.deposit(500)
// // console.log(andrew.balance)
// // console.log('Withdraw')
// // andrew.withdraw(700)
// // console.log(andrew.balance)
// //start at 09:49:36

class Bank{
    constructor(balance){
        this.balance=balance
    }

    withdraw(amount){
        if(this.balance - amount <=0){
            console.log("Operation failed, You cannot withdraw more money than what you have")
            console.log({balance :this.balance})
            return

        }
        this.balance -=amount
        console.log(`Withdrew $${amount}`)
        console.log({balance :this.balance})

    }

    deposit(amount){
        this.balance +=amount
        console.log(`Deposited $${amount}`)
        console.log({balance :this.balance})

    }

}
andrewChecking=new Bank(100)
andrewChecking.deposit(500)
andrewChecking.deposit(400)
andrewChecking.withdraw(955)

const withdrawButton = document.getElementById('withdraw')
const depositButton = document.getElementById('deposit')
const amountInput = document.getElementById('amount')
const balanceDiv = document.getElementById('balance')

depositButton.onclick=()=>{
        const amount =Number(amountInput.value)
        andrewChecking.deposit(amount)
        balanceDiv.innerText=`Balance : ${andrewChecking.balance}`
}
withdrawButton.onclick=()=>{
    const amount =Number(amountInput.value)
    andrewChecking.withdraw(amount)
    balanceDiv.innerText=`Balance : ${andrewChecking.balance}`
}