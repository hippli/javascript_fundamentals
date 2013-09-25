// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(x, y) {
	if(x > y) {

		console.log("The greater number of " + x + " and " +  y + " is " + x);
	} else {

		console.log("The greater number of " + x + " and " +  y + " is " + y);
	}
}

greaterNum(10,5);
greaterNum(12,15);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(lang) {
	if (lang == "en") {
		console.log("english");
	} 
	else if (lang == "de") {
	console.log("danish");
	} 
	else {	
	console.log("spanish");
	}
}

helloWorld("en");
helloWorld("de");
helloWorld("sp");


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(number) {

if (number > 90) {
	console.log("A");
}
else if (number > 80) {
	console.log("B");
}
else if (number > 70) {
	console.log("C");
}
else if (number > 60) {
	console.log("D");
}
else {
	console.log("F");
}
}

assignGrade(95);
assignGrade(85);
assignGrade(75);
assignGrade(65);
assignGrade(55);
assignGrade(45);

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number) {
	if (number > 1) {
		console.log(number + " " + noun + "s");
	}
	else {
		console.log(number + " " + noun);
	}

}

pluralize("cat", 2);
pluralize("cat", 1);
