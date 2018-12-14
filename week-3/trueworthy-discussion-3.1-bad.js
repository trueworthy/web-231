/*
============================================
; Title:  Exercise-3.1.js
; Author: Lea Trueworthy
; Date:   11 December 2018
; Description: Displays true or false
;===========================================
//simple explanations of what the structure looks like
if (expression)
 statement1
else
 statement2

 switch statement-->
	switch(expression) {
 	statements
	}
For statement-->
	for(initialize ; test ; increment)
 statement
*/

// header
const header=require('/Users/leatrueworthy/bu-webdev/web-231/week-2/trueworthy-header');
console.log(header.display("Lea", "Trueworthy", "Week 3 Assignment 1"));
console.log("\n")

var time = new Date().getHours(); 
if (time < 10) {
    greeting = "Good morning;
} else if (time < 20) {
    greeting = "Is it lunch time yet?";
} else {
    greeting = "Is it dinner time yet?";
}
//output
console.log(greetings)