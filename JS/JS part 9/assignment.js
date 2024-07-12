let btn=document.createElement("button");
document.querySelector("body").append(btn);
btn.textContent="Click me";
let input=document.createElement("input");
document.querySelector("body").append(input);
btn.innerText="Click me";

input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");

document.querySelector("#btn").style.backgroundColor="blue";
document.querySelector("#btn").style.color="white";

let h1=document.createElement("h1");
h1.innerText="DOM Practice";
document.querySelector("body").append(h1);
h1.style.textDecoration="underline";
h1.style.color="purple";

let para=document.createElement("p");
para.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para);