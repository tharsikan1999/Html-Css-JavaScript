


function test(){
    let input = document.querySelector("#inputs");
    let inputs = document.querySelector("#inputs").value;
    let eyeSlash = document.querySelector("#see");

    if(inputs == 0){
        alert("please enter the password");

    }
    else{

        if(input.type === 'password'){
            input.setAttribute('type','text');
            eyeSlash.style.display = "none";

        }
        else{
            input.setAttribute('type','password');
            eyeSlash.style.display = 'flex';
        }
    }






}

function test1(){
    let input = document.querySelector("#inputs1");
    let inputs = document.querySelector("#inputs1").value;
    let eyeSlash = document.querySelector("#see1");

    if(inputs == 0){
        alert("please enter the password");

    }
    else{

        if(input.type === 'password'){
            input.setAttribute('type','text');
            eyeSlash.style.display = "none";

        }
        else{
            input.setAttribute('type','password');
            eyeSlash.style.display = 'flex';
        }
    }






}
function test2(){
    let input = document.querySelector("#inputs2");
    let inputs = document.querySelector("#inputs2").value;
    let eyeSlash = document.querySelector("#see2");

    if(inputs == 0){
        alert("please enter the password");

    }
    else{

        if(input.type === 'password'){
            input.setAttribute('type','text');
            eyeSlash.style.display = "none";

        }
        else{
            input.setAttribute('type','password');
            eyeSlash.style.display = 'flex';
        }
    }






}



function signupp(){
    let inputs1 = document.querySelector("#inputs1").value;
let inputs2 = document.querySelector("#inputs2").value;
    if(inputs1 ==  inputs2){
   
   
    }else{
        alert("Password is didn't match")
    }
}




let signup = document.querySelector("#sigup1");

signup.addEventListener("click",()=>{
    let signBox = document.querySelector("#sign-in-box1");
    let signUpbox = document.querySelector("#signup-box");

    signBox.style.display = 'none';
    signUpbox.style.display = 'flex';
})

let login = document.querySelector("#loginn");;

login.addEventListener("click",()=>{
    let signBox = document.querySelector("#sign-in-box1");
    let signUpbox = document.querySelector("#signup-box");

    signBox.style.display = 'flex';
    signUpbox.style.display = 'none'; 
})

let butoonSign = document.querySelector("#sign");

butoonSign.addEventListener("click",()=>{
    let signUpbox = document.querySelector("#signup-box");

    signUpbox.style.display = 'flex';
    

    let signUpbox1 = document.querySelector("#signn");

    signUpbox1.style.display = 'flex';
   
    



    
})


let closeButton = document.querySelector("#signup-box .fa-times");

closeButton.addEventListener("click",()=>{
    let signUpbox = document.querySelector("#signn");
    let butoonSign = document.querySelector("#sign");
    let closeButton2 = document.querySelector("#sign-in-box1");


    signUpbox.style.display = 'none';
    closeButton2.style.display = 'none';


})

let closeButton2 = document.querySelector("#sign-in-box1 .fa-times");

closeButton2.addEventListener("click",()=>{
    let signUpbox = document.querySelector("#signn");
    let butoonSign = document.querySelector("#sign");

    signUpbox.style.display = 'none';
    let closeButton2 = document.querySelector("#sign-in-box1");
    closeButton2.style.display = 'none';


})
