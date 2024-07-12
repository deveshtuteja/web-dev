// // let smallImgs=document.getElementsByClassName("oldImg");
// // for(let i=0;i<smallImgs.length;i++){
// //     smallImgs[i].src="assets/spiderman_img.png";
// //     console.log(`the value of img${i} is changed`);
// // }

// // console.dir(document.querySelector("h1"));
// // console.dir(document.querySelector(".oldImg"));
// // console.dir(document.querySelector("#description"));

// // console.dir(document.querySelectorAll("a"));

// let links=document.querySelectorAll(".box a");
// // for(let i=0;i<links.length;i++){
// //     links[i].style.color="white";
// // }

// for(link of links){
//     link.style.color="white";
// }

//PRAC Q
let para1=document.createElement("p");
para1.innerText="Hey I'm Red!";
para1.classList.add("red");
document.querySelector("body").append(para1);

let h3=document.createElement("h3");
h3.innerText="I'm a blue h3";
h3.classList.add("blue");
document.querySelector("body").append(h3);

let div=document.createElement("div");
let h1=document.createElement("h1");
h1.innerText="I'm in a h1";
let para2=document.createElement("para2");
para2.innerText="me too!";
div.append(h1);
div.append(para2);
document.querySelector("body").append(div);
div.classList.add("box")