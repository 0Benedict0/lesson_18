var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location1 + 2;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


var hitLocations = [];

while (!isSunk) {
  
  guess = prompt("Ready, aim, fire! (Enter a number from 0-6):");

  
  if (guess < 0 || guess > 6 || isNaN(guess)) {
    alert("Please enter a valid cell number!");
  } else {
    
    guesses++;

   
    if (hitLocations.includes(guess)) {
      alert("You already hit this spot! Try another.");
      continue;
    }

  
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits++;

     
      hitLocations.push(guess);

     
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}


var accuracy = (3 / guesses) * 100;
var stats = `You took ${guesses} guesses to sink the battleship. Your shooting accuracy was ${accuracy.toFixed(2)}%.`;
alert(stats);