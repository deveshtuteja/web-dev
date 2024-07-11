let arr = [1, 2, 3, 4, 5];
arr.forEach(element => {
    console.log(element);
});
arr.forEach(function (el) {
    console.log(el);
});

let ar = [{
    name: "devesh",
    grade: "O+"
},
{
    name: "avesh",
    grade: "B+"
},
{
    name: "dev",
    grade: "A+"
}];
ar.forEach((el)=>{
    console.log(el.grade);
});

//MAP
let sq=arr.map((el)=>{
    return el*el;
})
console.log(sq);

//filter
let nums=[1,2,3,4,5,6,7,8,9,10];
let even=nums.filter((el)=>{
    return el%2==0;
})
console.log(even);

//Every and Some
console.log(nums.every((el)=>el%2==0));
console.log(nums.some((el)=>el%2==0));
