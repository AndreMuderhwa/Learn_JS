const helloDiv = document.getElementById('play')

// helloDiv.addEventListener('click',()=>{
//     console.log("Another Way to click")
// })

document.addEventListener('keydown', function(e){
    if(e.key=="q"){
        console.log("You pressed Q")
        document.getElementById('punch').play()
    }
    else{
        console.log('Not Q')
        document.getElementById('victory').play()
    }
    
})

//audio tags
