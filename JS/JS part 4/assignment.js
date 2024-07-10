//Q1
// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         let idx=i;
//         arr.splice(i,1);
//     }
// }
// for(print of arr){
//     console.log(print);
// }

//Q3    
let n=287152;
let sum=0;
while(n>0){
    let lastdigit=n%10;
    sum+=lastdigit;
    n=Math.floor(n/10);
}
console.log(sum);

//Q4
let num=5;
let fact=1;
for(let i=1;i<=num;i++){
    fact=fact*i;
}
console.log(fact);
//Q5
let arr=[2,4,6,8,10];
let largest=-Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
}
console.log(largest);