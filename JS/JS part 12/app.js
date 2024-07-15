let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data1)=>{
//     console.log("Data 1:",data1.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("Data 2:",data2.fact);
// })
// .catch((err)=>{
//     console.log(err);
// });

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.fact);
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch (error) {
        console.log("error-",error);
    }
    console.log("Program ended");
}