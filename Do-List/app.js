document.querySelector("#click").onclick = function (){

  

        let input = document.querySelector("#inputs").value;

        let box = document.querySelector(".sub-box");


        


       

       if(input == 0){
        alert("Please Enter the Value");
       }else{
        box.innerHTML +=`

        <div class="texts">
        <span id="letter">${input}</span>
        <div class="delete-button">
        <i class="fas fa-trash-alt"></i>
        </div>
        </div>
        
        `
       }

 var dele = document.querySelectorAll(".delete-button");

       
for(var i=0; i<dele.length; i++){
            dele[i].addEventListener("click",function (){
                this.parentNode.remove();
            })
               
            }



let lett = document.querySelectorAll(".texts");


for(let j=0; j<lett.length;j++){
    lett[j].addEventListener("click",function (){
        this.classList.toggle("active");
    })
}

        


       

       
   
   
  
    
}