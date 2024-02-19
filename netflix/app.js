const bar = document.querySelectorAll(".question1");






bar.forEach(function (ba){
    let answer = document.querySelector(".header h1");
 answer.addEventListener("click",function (){

    ba.classList.toggle("open")
    

      
    
 })

})


let fullacordioin = document.querySelectorAll(".first-acrodion");

for(let i=0; i<fullacordioin.length;i++){
    fullacordioin[i].addEventListener("click",function (){
        this.classList.toggle("active");
    })

}

