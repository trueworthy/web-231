/*
============================================
Title:  trueworthy-assignment-3.4.js
Author: Professor Krasso
Date:   15 December 2018
Modified By: Lea Trueworthy
Description: Demonstrate how to create a loop.
===========================================
*/
/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 */

var header = require('../trueworthy-header')

function logMismatch(arg1, arg2) {
  console.log(arg1 + ' ' + "and" + ' ' + arg2 + ' ' + "do not match");
}

function logMatch(arg1, arg2){
  console.log(arg1 + ' ' + "and" + ' ' + arg2 + ' ' + "do match!" + ' ' + "Hooray!");
}
// begin the output process here, may the odds be in your favor
console.log(header.display("Lea", "Trueworthy", "Exercise 3.4")),
console.log('\n');


// variable
var num = 3;

/* Disclaimer: Do not remove this function as this is what you will be using to generate a random number */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

///funtions
function match(arg1, arg2) {
  if (arg1 === arg2)
      return true
  else
      return false
}

function logMismatch(arg1, arg2) {
  console.log(arg1 + ' ' + "and" + ' ' + arg2 + ' ' + "do not match");
}

function logMatch(arg1, arg2){
  console.log(arg1 + ' ' + "and" + ' ' + arg2 + ' ' + "do match!" + ' ' + "Hooray!");
}
// begin the output process here, may the odds be in your favor
console.log(header.display("Lea", "Trueworthy", "Exercise 3.4"));
console.log('\n'); 

// For loop testing match against a random number
for (var x = 0; x < 10; x++) {
  var random = randomNumber();
  if (match (num, random)){
    logMatch(num, random);
  } else {
    logMismatch(num, random);
  };
}
// end program 