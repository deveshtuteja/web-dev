// let smallImgs=document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImgs.length;i++){
//     smallImgs[i].src="assets/spiderman_img.png";
//     console.log(`the value of img${i} is changed`);
// }

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("#description"));

// console.dir(document.querySelectorAll("a"));

let links=document.querySelectorAll(".box a");
// for(let i=0;i<links.length;i++){
//     links[i].style.color="white";
// }

for(link of links){
    link.style.color="white";
}