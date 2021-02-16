// Dependencies
let mathLib = require('./lib/math');
let jokesLib = require('./lib/jokes');


// App object
let app = {};


// Configuration
app.config = {
    'timeBetweenJokes' : 1000
};

// Function that prints a random joke
app.printAJoke = function(){

    // Get all the jokes
    let allJokes = jokesLib.allJokes();

    // Get the length of the jokes
    let numberOfJokes = allJokes.length;

    // Pick a random number between 1 and the number of jokes
    let randomNumber = mathLib.getRandomNumber(1,numberOfJokes);

    // Get the joke at that position in the array (minus one)
    let selectedJoke = allJokes[randomNumber - 1];

    // Send the joke to the console
    console.log(selectedJoke);
};


// Function that loops indefinitely, calling the printAJoke function as it goes
app.indefiniteLoop = function(){

    // Create the interval, using the config letiable defined above
    setInterval(app.printAJoke,app.config.timeBetweenJokes);
};


// Invoke the loop
app.indefiniteLoop();
