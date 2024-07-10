//OBJECT LITERALS
const student={
    name:"devesh",
    age:20,
    marks:94.4
};
let item={
    price:100.99,
    disc:10,
    colors:["red","pink"]
};
//TWITTER POST
const post={
    likes:1000,
    content:"this is my #1 post",
    username:"@devesh_tuteja",
    tags:["@deven","@yash","@jayant"],
    reposts:5
};
//js automatically conv to strings
let random={
    1:"a",
    2:"b",
    3:"c",
    null:"d",
    undefined:"e"
};
//NESTED OBJECTS
const classInfo={
    devesh:{
        grade:"O",
        city:"Gurgaon"
    },
    yash:{
        grade:"O",
        city:"Faridabad"
    },
    jayant:{
        grade:"O",
        city:"Delhi"
    }
};

//Array of objects
const classInfoArray=[
    {
        name:"devesh",
        grade:"O",
        city:"Gurgaon"
    },
    {
        name:"devu",
        grade:"O",
        city:"Dubai"
    },
    {
        name:"beb",
        grade:"A+",
        city:"Melbourne"
    }
];

//Random integers(1-10)
let num=Math.floor((Math.random()*10)+1);
console.log(num);
//1-100
console.log(Math.floor((Math.random()*100)+1));