let jsonRes='{"fact":"The average cat food meal is the equivalent to about five mice.","length":63}';
console.log(jsonRes);
let validRes=JSON.parse(jsonRes);
console.log(validRes);

let student={
    name:"devesh",
    age:19
};
console.log(JSON.stringify(student));
