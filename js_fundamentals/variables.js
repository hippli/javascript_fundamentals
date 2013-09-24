// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."


var children = 2;
var partnerName = "Susan";
var city = "Toronto";
var jobTitle = "Product Manager";

console.log("You will be a " + jobTitle + " in " + city + ", and married to " + partnerName + " with " + children + " kids.");


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.


var currentYear = 2013;
var birthYear = 1971;
var age = currentYear - birthYear;

console.log("They are either " + age + " or " + (age -1));

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var ageNow = 42;
var ageMax = 90;
var perDayAmount = 2;
var result = (ageMax - ageNow) * 365 * perDayAmount;

console.log("You will need " + result + " to last you until the ripe old age of " + ageMax);

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".




// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celcius = 15;
var fahrenheitConverted = celcius * 9 / 5 + 32;
console.log(celcius + "°C is " + fahrenheitConverted + "°F.");

var fahrenheit = 60;
var celciusConverted = (fahrenheit - 32) * 5 / 9;
console.log(fahrenheit + "°F is " + celciusConverted + "°C.");