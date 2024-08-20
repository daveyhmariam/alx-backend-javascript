const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function stdIn() {
  rl.question('Welcome to Holberton School, what is your name? ', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();

    process.exit(0);
  });
}

process.on('exit', () => {
  console.log('This important software is now closing');
});

stdIn()
