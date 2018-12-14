/*
  Expected output:
  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!

============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: December 13 2018
; Modified By: Lea Trueworthy
; Description:This program test 6 variables and outputs if the match or don't match.
;===========================================
*/

var header = require('../trueworthy-header')
/* remember variables come BEFORE funtion */

// start program

/* expected outputs.... well hopefully
Apples and oragnes do not match
Dog and Dog do match
five and Potato do not match
*/

// six varibles here
var item1= "Apples";
var item2 = "Oranges";
var item3 = "Dog";
var item4 = "Dog";
var item5 = "Five";
var item6 = "Potato";

//funtions
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
console.log(header.display("Lea", "Trueworthy", "Exercise 3.2"));
console.log('\n'); 

// Output from the match() function... This was from Professor Krasso's file but I don't think we need it for our outputs. I think it's just a reminder for us but I am still including it in my script
console.log(match("A", "B"));
console.log(match(2, 2));

//here are the conditional statements for IF...ELSE
if (match(item1, item2)) {
    logMatch(match(item1, item2)) ;
} else {
    logMismatch(item1, item2) ;
}

if (match(item3, item4)) {
    logMatch(item3, item4) ;
} else {
    logMismatch(item3, item4) ;
}

if (match(item5, item6)) {
    logMatch(item5, item6);
} else {
    logMismatch(item5, item6) ;
}

//end of program