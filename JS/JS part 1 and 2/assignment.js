//Q2
let name=prompt("enter your name:");
let age=prompt("enter your age:");
alert(`${name} is ${age} years old.`);
//Q5
let a=10;
let b=7;
let c=9;
if(a>b){
    console.log("a is the largest");
} else if(b>c){
    console.log("b is the largest");
} else{
    console.log("c is the largest");
}
//Q6
let num1="32";
let num2="47852";
if(num1[num1.length-1]===num2[num2.length-1]){
    console.log("YES");
} else {
    console.log("NO");
}
//Q6 better way
let n1=32;
let n2=47852;
if((n1%10)===(n2%10)){
    console.log("YES");
} else {
    console.log("NO");
}