h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange) {
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange){
//             nextColorChange();
//         }
//     },delay);
// };

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!")
        }, delay);
    });
};

changeColor("red",1000) 
.then(()=>{
    console.log("red colour was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green colour was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue colour was completed");
    return changeColor("yellow",1000);
})
.then(()=>{
    console.log("yellow colour was completed");
})

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });

//CALLBACK HELL->nesting of functions

// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }
// saveToDb("apna college",
//     () => {
//         console.log("success:Your data was saved");
//         saveToDb("Devesh", () => {
//             console.log("success2:Your data was saved");
//             saveToDb("Virat", () => {
//                 console.log("sucess3:Your data was saved");
//             }, () => {
//                 console.log("failure3:Weak connection");
//             });
//         }, () => {
//             console.log("failure2:Weak connection");
//         });
//     },
//     () => {
//         console.log("failure:Weak connection");
//     });

//PROMISES IN JS
// function saveToDb(data) {
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//             if (internetSpeed > 4) {
//                 resolve("sucess:data was saved");
//             } else {
//                 reject("failure:weak connection");
//         }
//     });
// }
// //PROMISE CHAINING
// saveToDb("apna college")
//     .then((result)=>{
//     console.log("data1 saved");
//     console.log("result of promise:",result);
//     return saveToDb("hello world");
// })
//     .then((result)=>{
//         console.log("data2 saved");
//         console.log("result of promise:",result);
//         return saveToDb("virat");
//     })
//     .then((result)=>{
//         console.log("data3 saved");
//         console.log("result of promise:",result);
//     })
//     .catch((error)=>{
//     console.log("promise was rejected");
//     console.log("error of promise:",error);
// });