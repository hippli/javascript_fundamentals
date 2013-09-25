// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(children, partner, city, jobTitle) {

console.log("You will be a " + jobTitle + " in " + city + " and married to "+ partner + "with "+ children + " kids!");

}

tellFortune(1, "susan", "toronto", "product manager");
tellFortune(1, "samantha", "toronto", "entrepreneur");
tellFortune(1, "jamie", "toronto", "baker");

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.


function calculateAge(birth_year, current_year) {
	var age = current_year - birth_year;
	console.log("You are either " + age + " or " + (age - 1));
}

console.log(calculateAge(1971, 2013));
console.log(calculateAge(1980, 2013));
console.log(calculateAge(1927, 2013));

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, perDay) {
	var maxAge = 100;
	var amount = (maxAge - age) * 365 * perDay;
	console.log("You will need " + amount + " to last you until the ripe old age of " + maxAge);
}

calculateSupply(42, 3);
calculateSupply(42, 5);
calculateSupply(25, 6);


// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFarenheight(celcius) {
	cToF = celcius * 9 / 5 + 32;
	console.log(celcius + "°C is " + cToF + "°F");
}

celsiusToFarenheight(15);


function farenheightToCelcius(fahrenheit) {
	fToC = (fahrenheit - 32) * 5 / 9;
	console.log(fahrenheit + "°F is " + fToC + "°C");
}

farenheightToCelcius(15);