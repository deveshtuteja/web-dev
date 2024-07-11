const student = {
    name: "Devesh",
    age: "19",
    math: 98,
    eng: 95,
    chem: 97,
    getAvg() {
        console.log(this);
        let avg = (this.math + this.eng + this.chem) / 3;
        console.log(avg);
    }
};

//Arrow Function
const sum = (a, b) => {
    return a + b;
}
const pow = (a, b) => {
    return a ** b;
}
const cube = n => {
    return n * n * n;
}
//implicit return
const mul = (a, b) => (a * b);

//set Timeout fn
console.log("Hello Everyone!");

// setTimeout(()=>{
//     console.log("Devesh Tuteja");
// },4000);
let id=setInterval(()=>{
    console.log("Devesh Tuteja");
},2000);

console.log("Myself,");

clearInterval(id); //to make fn STOP

//This keyword with arrow and normal funcs
const stu = {
    name: "aman",
    marks: 95,
    prop: this, //GLOBAL SCOPE
    getName() {
        console.log(this); //student
        return this.name;
    },
    getMarks: () => {
        console.log(this); //Parent's scope->Window
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);//Student
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this); //Window
        }, 2000);
    }
};
//Prac Q1
const sq = (n) => {
    return n * n;
}
console.log(sq(5));

//Prac Q2
let id1=setInterval(() => {
    console.log("Hello World");
}, 2000);
setTimeout(()=>{
    clearInterval(id1);
    console.log("clear interval ran");
},10000)