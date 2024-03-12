const totalScore ={computerChoice: 0, playerChoice: 0}

function getComputerChoice(){
    const rpsChoice = ['Rock','Paper','Scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return rpsChoice[randomNumber]

}

function getResult(playerChoice, computerChoice){
    let score=0;
    if(playerChoice == computerChoice){
        score = 0
    } else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
        score = 1

    }
    else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
        score = 1

    }
    else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
        score = 1

    } else {
        score = -1
    }
    return score


}

function showResult(score, playerChoice, computerChoice){
    const resultDiv =document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    if(score == -1){
        resultDiv.innerText='You loose !'
    }else if(score == 0){
        resultDiv.innerText="It's a tie !"
    }else{
        resultDiv.innerText="You won !"
    }
    handsDiv.innerText=`${playerChoice} vs ${computerChoice}`
    playerScoreDiv.innerText=`Your score : ${totalScore['playerChoice']}`


}

function onClickRPS(playerChoice){
    console.log({playerChoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    const score = getResult(playerChoice, computerChoice)
    totalScore['playerChoice'] += score
    console.log({score})
    console.log(totalScore)
    showResult(score,playerChoice,computerChoice)


}

function playGame(){
    const rpsButtons=document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })

    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame(totalScore)
}

function endGame(totalScore){
    for ( i in totalScore){
        totalScore[i]=0
    }
    const resultDiv =document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    resultDiv.innerText=''
    handsDiv.innerText=''
    playerScoreDiv.innerText=''

}

playGame()