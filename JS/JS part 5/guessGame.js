const max = prompt("enter a max numer:");
console.log(`Max number is ${max}`);
let random = Math.floor(Math.random() * max + 1);
let guess = prompt("make a guess:");
while (true) {
    if (guess == "quit") {
        console.log("quitting the game");
        break;
    }
    if (guess == random) {
        console.log("Congratulations! The random no. was", random);
        break;
    } else if (guess > random) {
        guess = prompt("HINT:-The no. you entered is larger. Try again!");
    } else {
        guess = prompt("HINT:-The no. you entered is smaller. Try again!");
    }
}