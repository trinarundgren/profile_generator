const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your nickname? ", (nickName) => {
  rl.question("What do you love to do in your spare time? ", (activity) => {
    rl.question("What is your favourite color? ", (colour) => {
      rl.question("What is your favourite animal? ", (animal) => {
        rl.question("How old will you turn on your next birthday? ", (age) => {
          console.log(`My nickname is ${nickName} and I love to spend my spare time ${activity}. My favourite colour is ${colour}, I love ${animal} and I will be ${age} on my next birthday.`);

  rl.close();
        })
      })
    })
  })
  
});