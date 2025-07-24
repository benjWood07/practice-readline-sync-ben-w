const input = require('readline-sync');  //this will import the readline-sync node

let name = input.question("What's your name? ");  //prompt the user for a name
console.log("Hello, " + name + "! Please answer the following questions.");  //print the user name and start the quiz

let question1 = input.questionInt("What is the sum of 6 and 9? ");  //prompt the user for an int

let question2 = input.question("What does 'typeof 5' return? ");  //propmt the user for a data type

let question3 = input.question("What data type is consiered 'truthy' and 'falsy?' ");  //promtp the user for another data type

let question4 = input.question("What is the result of 3 + '5'? ");  // prompt the user to test understanding of implicit conversion

let question5 = input.question("Can NaN be considered a valid number? (Yes/No) ");  //prompt user to test edgecases

console.log("\nYour answers are:");
console.log(`1. What is the sum of 6 and 9? You answered: ${question1}`);  //print the user's answers to each question
console.log(`2. What does 'typeof 5' return? You answered: ${question2}`);
console.log(`3. What data type is consiered 'truthy' and 'falsy?' You answered: ${question3}`);
console.log(`4. What is the result of 3 + '5'? You answered: ${question4}`);
console.log(`5. Can NaN be considered a valid number? You answered: ${question5}`);
