// let btns=document.querySelectorAll("button");

// function sayHello(){
//     alert("Hello World");
// }
// function sayName(){
//     alert("I'm Devesh");
// }
// for(btn of btns){
//     // btn.onclick=sayHello;
//     // btn.onmouseenter=function(){
//     //     console.log("You entered in a button");
//     // }
//     //EVENT LISTENERS
//     // btn.addEventListener("click",sayHello);
//     // btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function(){
//         console.log("You double clicked me!");
//     })
// }
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3")
// let p=document.querySelector("p");
// let btn=document.querySelector("button");

// function colorBlue(){
//     console.log(this.textContent);
//     this.style.backgroundColor="blue";
// }

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("mouse is clicked");
// });
// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("mouse is double-clicked");
// });

// h1.addEventListener("click",colorBlue);

// h3.addEventListener("click",colorBlue);

// p.addEventListener("click",colorBlue);
//CHARACTER GAME
// let input=document.querySelector("input");
// input.addEventListener("keydown",function(event){
//     console.log("code:",event.code);
//     if(event.code=="ArrowUp"){
//         console.log("Characters moves forward");
//     } else if(event.code=="ArrowDown"){
//         console.log("Characters moves downward")
//     }else if(event.code=="ArrowRight"){
//         console.log("Characters moves right")
//     }else if(event.code=="ArrowLeft"){
//         console.log("Characters moves left")
//     } else {
//         console.log("Wrong key pressed");
//     }
// })
// input.addEventListener("keyup",function(){
//     console.log("key was released");
// })

//form events
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    // let inp=document.querySelector("input");
    // console.dir(inp);
    // console.log(inp.value);

    console.dir(form); //form contains elements collection

    // let user=document.querySelector(".user");
    // let pass=document.querySelector(".pwd");

    let user=this.elements[0]; //form.elements[0];
    let pass=this.elements[1];

    alert(`Hey ${user.value}!, The password you entered is ${pass.value}`);
});

