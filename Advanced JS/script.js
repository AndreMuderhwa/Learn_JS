const helloDiv = document.getElementById('play')

// helloDiv.addEventListener('click',()=>{
//     console.log("Another Way to click")
// })

document.addEventListener('keydown', function(e){
    if(e.key=="q"){
        console.log("You pressed Q")
    }
    else{
        console.log('Not Q')
    }
    
})