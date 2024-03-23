#! /usr/bin/env node
import inquirer from "inquirer";
// 1, computer will generate a rancdom number  //donee
//2, user input for guessing number //donee
//3, compare user input with computer generated number and show result //donee
const randomNumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomNumber);
const randomnumber = 13;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
if (answers.userGuessedNumber === randomnumber) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
