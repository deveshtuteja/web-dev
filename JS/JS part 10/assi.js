let user=document.querySelector("#username");
let h2=document.querySelector("h2");
user.addEventListener("input",function(){

    h2.innerText=this.value;
});