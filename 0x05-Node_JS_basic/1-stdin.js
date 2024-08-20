const readline = require('readline');

// Create the interface to read input from stdin and write to stdout
const interFace = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to handle user input and display the message
function askName() {
  interFace.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
    // Close the interface after printing the name
    interFace.close();
  });
}

// Handle process exit event to display closing message
process.on('exit', () => {
  console.log('This important software is now closing');
});

// Start asking for the name
askName();
