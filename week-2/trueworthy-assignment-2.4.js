/*
============================================
; Author: Professor Krasso
; Date:   9 December 2018
; Modified By: Lea Trueworthy
; Description: Demonstrates how to create functions with and without parameters.
;===========================================
*/


// header
const header = require('./trueworthy-header.js');

console.log(header.display("Lea", "Trueworthy", "Exercise 2.4"));

// Start program

// functions
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function dateWriter(year, month, day) {
  return year + "/" + month + "/" + day;
}

function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

function convertToInt(x) {
  return parseInt(x);
}

function convertToFloat(y) {
  return parseFloat(y);
}
//output
console.log('\n');

console.log("Hello my name is " + fullName("Lea", "Trueworthy") + "!" + '\n');

console.log("Today's date is " + dateWriter(2018, 12, 9) + " and the current temperature is " + formatNumber(30.0, 1) + " degrees." + '\n');

console.log("I am " + convertToInt(25) + " years old and my savings account goal is " + convertToFloat("10001") +  " dollars.");

// End program