//Q1
let arr = [2, 4, 6, 8, 10];
function ArrayLarger(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
ArrayLarger(arr, 5);

//Q4
let str = "elephant";
function countVowels(str) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
        // let newStr=str.toLowerCase(str);
        if (str.charAt(j) == 'a' || str.charAt(j) == 'e' || str.charAt(j) == 'i' || str.charAt(j) == 'o' || str.charAt(j) == "u") {
            count++;
        }
    }
    console.log(count);
}
countVowels(str);

//Q3
let country = ["Germany", "United States of America", "Australia"];

function longestCountry(country) {
    let longest = country[0]; // Start with the first country
    for (let i = 1; i < country.length; i++) {
        if (country[i].length > longest.length) {
            longest = country[i];
        }
    }
    return longest;
}

console.log(longestCountry(country));

//Q5
function genRandom(min,max){
    return Math.floor((Math.random()*max)+min);
}
console.log(genRandom(1,10));

//Q2
let repStr="abcdabcdefgggh";
function uniqueChar(str){
    let unique=''; //empty
    for(let i=0;i<str.length;i++){
        let char=str.charAt(i);
        if(unique.indexOf(char)===-1){ //if not already there
            unique+=char; //append
        }
    }
    return unique;
}
console.log(uniqueChar(repStr));


