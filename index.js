const readline = require('readline-sync');

const username = readline.question("What is your name ? \n");

console.log(`\nHey ${username}! Let's play! The topic of the quiz is Space!\n`);

const solutions = {
  q1: "mercury",
  q2: "uranus",
  q3: "andromeda",
  q4: "milky way",
  q5: "79",
}

let score = 0;

function printResult(correct){
if(correct){
  score++;
  console.log("Correct!!!");
  console.log(`Your score - ${score}/5`);
  console.log("\n")
}else {
  console.log("That's wrong :(");
  console.log(`Your score - ${score}/5`);
  console.log("\n")
}
}

const ans1 = readline.question('The planet nearest to the sun is? \n ');
if(ans1.toLowerCase() === solutions['q1']){
printResult(true);
}else {
  printResult(false);
}

const ans2 = readline.question('The coldest planet in the solar system is? \n');
if(ans2.toLowerCase() === solutions['q2']){
printResult(true);
}else {
  printResult(false);
}
