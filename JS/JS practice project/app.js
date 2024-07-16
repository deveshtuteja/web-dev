//gen random color in hex code
let randColor=function randomColor(){
    const hex='0123456789ABCDEF';
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
console.log(randColor);
let id;
function startChangingColor(){
    function changeBgcolor(){
        document.body.style.backgroundColor=randColor();
    }
    if(!id){
        id=setInterval(changeBgcolor,500);
    }
}
function stopColor(){
    clearInterval(id);
    id=null; //EDGE CASE
}
document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click",stopColor);