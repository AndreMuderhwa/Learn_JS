

let playButton = document.getElementById('play')
let resultDiv=document.getElementById('result')
let p1NameDiv= document.getElementById('p1Name')
let p2NameDiv =document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')

const updateGame =(p1,p2,gameState) =>{

}


class Player{

    constructor(name,health,attackDamage){
        this.name=name,
        this.health=health,
        this.attackDamage=attackDamage
    }
    strike(player,enemy, attackDamage){

    }

    heal(player){
          
    }
}

class Game{
    constructor(){
        this.isOver=false;
    }

    declareWinner(isOver,p1,p2){

    }
    reset(p1,p2){

    }
    play(p1,p2){


        while(!this.isOver){
            
        }
    }
}


let p1;
let p2;

let gameState;

document.addEventListener('keydown', function(e){

});

document.addEventListener('keydown', function(e){

});v