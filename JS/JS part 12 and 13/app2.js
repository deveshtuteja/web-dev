//dad jokes
// let url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config={headers:{Accept:"application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     } catch (error) {
//         console.log("error-", error);
//     }
// }

let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let clgsArr=await getColleges(country);
    show(clgsArr);
});
async function getColleges(country){
    try{
        let res=await axios.get(url+country);
        return res.data;
    } catch(e){
        console.log("error:",e);
    }
}
function show(clgsArr){
    let list=document.querySelector("#list");
    list.innerText="";
    let inp=document.querySelector("#input");
    inp.value="";
    for(clg of clgsArr){
        let li=document.createElement("li");
        console.log(clg.name);
        li.innerText=clg.name;
        list.appendChild(li);
    }
}