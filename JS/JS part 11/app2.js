// async function greet(){
//     throw "some random error";
//     return "hello!"
// }
// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was:",result);
// })
// .catch((err)=>{
//     console.log("promise was rejected");
//     console.log("error was:",err);
// })

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    getNum();
}