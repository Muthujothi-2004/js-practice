// 

// let sum = 0, num = 0;

// do {

//     // add all positive numbers
//     sum += num;

//     // take input from the user
//     num = parseInt(prompt("Enter a number: "));
    

//     // loop terminates if num is negative
// } while (num >= 0);

// // last, display sum
// console.log(`The sum is ${sum}`);

// JavaScript code to take input from the user,
// using the prompt function, with a display message.

// const userInput = alert("Please enter your name:");
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for their name
rl.question('Please enter your name: ', (name) => {
    // Output a greeting
    console.log(`Hello, ${name}!`);
    
    // Close the readline interface
    rl.close();
});


