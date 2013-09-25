// function helloWhere(){
//   alert("Hello there");
// }
// helloWhere();





// function helloWhere(name, age) {
//    alert( "Hello there " + name + ", I hear you're " + age + " years old!");
// }

// var full_name = "Santa";
// var age = 700;
// helloWhere(full_name, age);



// function concatenate(first, last) {
//    var full;

//    full = first + last;
//    return  full;
// }

// function helloWhere(name, age) {
//    alert( "Hello there " + name + ", I hear you're " + age + " years old!");
// }

// var full_name = concatenate("Santa", "Claus");
// helloWhere(full_name, 400);








// /* the global variable */
// var age = 6000;

// /* a function to concatenate and emphasize names */ 
// function concatenate(first, last) {

// /* at this point the age variable is available because it's global */
// alert(age);

// // at this point full_name is set to a return value ;
// var full_name = first + last + "!!!";
// return  full_name;

// }

// /* wrap script in an anonymous function to contain variables */ 
// (function() {

// /* at this point the age variable is available because it's global */

//    // call the function with arguments to output the returned value
//    alert( "Hello there " + concatenate("Santa", "Claus") + ", I hear you're " + age + " years old!");

//    // call the function with a string to output the returned value
//    alert( "Hello there " + "Santa Claus" + ", I hear you're " + age + " years old!");

//    // at this point "full_name" is undefined because it is contained within the concatenate() function
//    alert(full_name);

// })(); // close anonymous function












// // catsRule is a string, which is truth-y and will cause the block to run
// var catsRule = "something";

// // catsRule is not an empty string, the number 0, undefined or null so the block will run
// if (catsRule) {
//   console.log('Yay cats!');
// }

// // catsRule is an empty string, which is false-y and will cause the block not to run
// var catsRule = '';
// if (catsRule) {
//   console.log('Hello, ' + catsRule);
// }

// // catsRule is the number 0, which is false-y and will cause the block not to run
// var catsRule = 0;
// if (catsRule) {
//   console.log('My opinion on pets is:' + catsRule);
// }

// // catsRule is undefined, which is false-y and will cause the block not to run
// var catsRule;
// if (catsRule) {
//   console.log('Your name is ' + catsRule);
// }





// IF STATEMENT
// var age = 20;
// if( age > 18 ){
//    document.write("<b>Qualifies for driving</b>");
// }


// IF ELSE STATEMENT
// var age = 15;
// if( age > 18 ){
//    document.write("<b>Qualifies for driving</b>");
// }else{
//    document.write("<b>Does not qualify for driving</b>");
// }


// IF ELSE IF STATEMENT
// var book = "maths";
// if( book == "history" ){
//    document.write("<b>History Book</b>");
// }else if( book == "maths" ){
//    document.write("<b>Maths Book</b>");
// }else if( book == "economics" ){
//    document.write("<b>Economics Book</b>");
// }else{
//   document.write("<b>Unknown Book</b>");
// }



// WHILE LOOP
// var count = 0;
// document.write("Starting Loop" + "<br />");
// while (count < 10) {
//   document.write("Current Count: " + count + "<br />");
//   count++;
// }
// document.write("Loop stopped!");


// FOR LOOP
// var count;
// document.write("Starting Loop" + "<br />");
// for(count = 0; count < 10; count++){
//   document.write("Current Count : " + count );
//   document.write("<br />");
// }
// document.write("Loop stopped!");


// BREAK EXAMPLE
// var x = 1;
// document.write("Entering the loop<br /> ");
// while (x < 20) {
//   if (x == 5){ 
//      break;  // breaks out of loop completely
//   }
//   x = x + 1;
//   document.write( x + "<br />");
// }
// document.write("Exiting the loop!<br /> ");


// ARRAYS - CREATION
// var fruit = new Array( "apple", "orange", "mango" ); // [ "apple", "orange", "mango" ]
// document.write(fruit + "</br>");

// var fruits = [ "apples", "oranges", "mangos" ]; // [ "apple", "orange", "mango" ]
// document.write(fruits);

// ARRAYS - ITERATION
// var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
// for (var i = 0; i < rainbowColors.length; i++) {
//   document.write(rainbowColors[i] + " , ");
// }

// OBJECTS
// var aboutMe = {
//   hometown: "Pasadena, CA",
//   hair: "brown",
//   eyes: {left: "blue", right: "green"}
// }; 

// var myHometown = aboutMe.hometown; // "Pasadena, CA"
// document.write(myHometown);
// var eye = aboutMe.eyes.left
// document.write("  Eye color: " + eye)


// DOM
// To return the title of an html page use the following:

var str = document.title;
document.write(str)

