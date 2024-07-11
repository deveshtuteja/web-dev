function rollDice() {
    let num = Math.floor(Math.random() * 6 + 1);
    console.log(num);
}

rollDice();

function sumN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumN(5));

let arr = ["devesh", "yash", "jayant"];
function concat(arr) {
    let newStr = "";
    for (let i = 0; i < arr.length; i++) {
        newStr += arr[i];
    }
    console.log(newStr);
}
concat(arr);

//LEXICAL SCOPE
function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        console.log(y);
    }
    innerFunc();
}
outerFunc();

//Function expression and higher order functions
function multGreet(func, number) {
    for (let i = 1; i <= number; i++) {
        func();
    }
}
let greet = function () {
    console.log("Hello");
}
multGreet(greet, 5);
//higher order functions(returns)
function OddEvenFactory(request) {
    if (request == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    } else if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0));
        }
    } else {
        console.log("INVALID REQUEST");
    }
}

//METHODS
// const calculator={
//     sum:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//     }
// };
const calculator={
    sum(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};
