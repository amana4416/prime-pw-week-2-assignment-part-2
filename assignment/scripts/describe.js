// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'name' and set it to 'Dane' as a string.
// We then check if the string is equal to 'Mary', 
// Our variable does not equal "Mary" so we move on the the next condition. If our variable did match 'Mary', we would console.log 'Hi, Mary!'
// Since our variable did not meet the first condition, we console.log the string 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable called 'secret' and don't set it to anything yet
// We declare a variable caled 'code' and set it to '123' as a number.
// We check if 'code' is equal to 123. 123 is equal to 123, so 
// We reassign the value 'code' to be multiplied by 2, so 'code' is now set to 246 as a number.
// Since the value of 'code' was correct, the variable 'secret' is now set to 'super' as a string.
// Next we check to see if the new value of 'code' is greater than 250. 246 is not greater than 250 so the next line doesn't run. 
// If the value of 'code' was greater than 250, the variable 'secret' would have been reassigned to 'duper' so it remains unchanged
// We console.log 'super' and get the value 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare the variable 'isStudent' and have it set to the boolean 'true'.
// We declare a variable 'age' and set it to 34 as number.
// We declare the variable 'zip' and set it 55407 as a number.
// We check to see if 'isStudent' is 'true' AND if the 'zip' is greater than 80000. Only one of these (isStudent) is true/correct so we move on to the next condition. The '&&' makes it so both conditions must be met so console.log
// Next we check to see if 'isStudent' is 'false' and 'age' is less than 30. Neither of these conditions are met so we move on to the next condition.
// Then we check to see if 'isStudent' is 'true', so
// We console.log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - the variables are set to the wrong values. They are currently reversed.
// It should be [let colorOne = 'blue'] and [let colorTwo = 'red' ]

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - colorTwo was not reassigned. Both variables were supposed to be reassigned and only reassigned colorOne
// It should also say [colorTwo = 'purple']
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

