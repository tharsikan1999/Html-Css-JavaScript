let bars = document.querySelector(".bar");

let navv = document.querySelector("nav ul");

bars.addEventListener("click",function  (){
    navv.classList.toggle("display");
    bars.children[0].classList.toggle("display1");
    bars.children[1].classList.toggle("display2");
    bars.children[2].classList.toggle("display3");

});



let mainimg = document.querySelector(".mainproductimg img");

let smallimg = document.querySelector(".product-same");


smallimg.children[0].addEventListener("click",function (){
    mainimg.src = smallimg.children[0].src;


});

smallimg.children[1].addEventListener("click",function (){
    mainimg.src = smallimg.children[1].src;


});
smallimg.children[2].addEventListener("click",function (){
    mainimg.src = smallimg.children[2].src;


});
smallimg.children[3].addEventListener("click",function (){
    mainimg.src = smallimg.children[3].src;


});
