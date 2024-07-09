let cric = [["Rohit", "Kohli", "Dhoni"],["Smith", "Gilchrist", "Warner"]];
for(let i=0;i<cric.length;i++){
    console.log(`List #${i}`);
    for(let j=0;j<cric[i].length;j++){
        console.log(cric[i][j]);
    }
}
//with for of loop
for(list of cric){
    for(names of list){
        console.log(names);
    }
}

//for of loop
let fruits=["apple","banana","litchi","mango"];
for(fruit of fruits){
    console.log(fruit);
}