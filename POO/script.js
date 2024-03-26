class Car{
    constructor(name,color,topSpeed){
        this.name=name,
        this.color=color,
        this.topSpeed=topSpeed,
        this.currentSpeed=0;
    }
    drive(){
        console.log("Just drove 2 miles")
        this.currentSpeed +=10
        console.log(`Driving speed at ${this.currentSpeed} mph`)
    }
    break(){
        console.log("Just break the car")
      
        this.currentSpeed -=10
        
    }
    stop(){
        console.log("Stop running car")
        this.currentSpeed=0;
    }
    zerotoSixty(){
        setTimeout(()=>{
            console.log("Huu that was the speed")
            this.currentSpeed +=60
            console.log(this.currentSpeed)
        })
    }

}

const ferrari = new Car('Ferrari','red',500)
// console.log(ferrari)
// console.log(ferrari.color)
console.log(ferrari.currentSpeed)
//ferrari.drive()
//ferrari.break()
ferrari.zerotoSixty()
console.log(ferrari.currentSpeed)