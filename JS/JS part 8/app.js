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
ar.forEach((el) => {
    console.log(el.grade);
});

//MAP
let sq = arr.map((el) => {
    return el * el;
})
console.log(sq);

//filter
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = nums.filter((el) => {
    return el % 2 == 0;
})
console.log(even);

//Every and Some
console.log(nums.every((el) => el % 2 == 0));
console.log(nums.some((el) => el % 2 == 0));

//Reduce
let num = [1, 2, 3, 4];
let finalVal = num.reduce((res, el) => res + el);
console.log(finalVal);
//max in an array using reduce
let n = [1, 4, 5, 9, 21, 3, 5, 9, 0];
let max = n.reduce((max, el) => {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(max);
//min in an array
let min = n.reduce((min, el) => {
    if (el < min) {
        return el;
    } else {
        return min;
    }
});
console.log(min);
//mult of 10
console.log(n.every((el) => el % 10 == 0));

//SPREAD
console.log(...arr);
console.log(...nums);
console.log(..."Devesh Tuteja");

//spread(with array literals)
let eve = [2, 4, 6, 8, 10];
let odd = [1, 3, 5, 7, 9];
let allNum = [...eve, ...odd];
console.log(allNum);

//spread(with obj literals)
const data = {
    email: "123@hotmail.com",
    pwd: "abcd"
};
const dataCopy = { ...data, id: 123 };
let obj1 = { ...odd }; //conv array to object
//key:value pairs->key=index and value=arr[i]
//*SAME IN STRINGS*//

//REST
function sum(...args) { //arguments->basically a collection(not an array)
    // for(let i=0;i<args.length;i++){
    //     console.log("you gave us:",args[i]);
    // }
    return args.reduce((sum, el) => sum + el);
}
function minimum(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}
//Destructuring
let names = ["devesh", "yash", "jayant", "deven", "gaurish", "manan"];
// let winner=names[0];
// let runnersup=names[1];
// let third=names[2];
let [winner, runnersup, ...others] = names;

//Destructuring(objects)
const student = {
    name: "devesh",
    age: 19,
    username: "devu@123",
    password: "abcd",
    city: "Gurgaon"
};
// let {username,password}=student;
let { username: user, password: pwd, city = "Mumbai" } = student;

//ASSIGNMENT QUES
//Q1
let array1 = [2, 4, 6, 8];
let sqSumAvg = array1.reduce((sqSumAvg, el) => {
    let sqSum = 0;
    for (let i = 0; i < array1.length; i++) {
        sqSum = sqSum + (array1[i] * array1[i]);
    }
    return sqSum / array1.length;
})
console.log(sqSumAvg);

//Q2
let newArray1 = array1.map((el) => el + 5);
//Q3
let strArr = ["devesh", "jayant", "yash"];
let newStr = strArr.map((str) => str.toUpperCase());

//Q4
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr, 
    ...args.map((v) => v * 2),
]; 
doubleAndReturnArgs([1, 2, 3], 4, 4); //[1,2,3,8,8]
doubleAndReturnArgs([2],10,4); //[2,20,8]
//Q5
const mergeObject=(obj1,obj2)=>{
    return {...obj1,...obj2};
};
const info={
    prod:"Iphone 15 pro",
    price:130000,
    disc:10000
};
console.log(mergeObject(student, info));