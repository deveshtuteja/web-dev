let btns=document.querySelectorAll("button");

function sayHello(){
    alert("Hello World");
}
function sayName(){
    alert("I'm Devesh");
}
for(btn of btns){
    // btn.onclick=sayHello;
    // btn.onmouseenter=function(){
    //     console.log("You entered in a button");
    // }
    //EVENT LISTENERS
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("You double clicked me!");
    })
}
