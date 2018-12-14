var header = require('../trueworthy-header')

/*
============================================
Title: Exercise 3.3
Author: Professor Krasso
Date: December 13 2018
Modified By: Lea Trueworthy
 Description: This program demonstrates the use of case statements 
===========================================
*/


/*
  Expected output:
  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

// start program

// output header
console.log(header.display("Lea", "Trueworthy", "Exercise 3.3"));
console.log('\n'); 

//starter code provided by professor 

let eventKeyCode = 13

/*if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}*/


//now convert if into switch

switch (eventKeyCode) {
    case 13:
        console.log("The enter key was pressed");
    break;
    case 16:
        console.log("the shift key was pressed");
    break;
    case 32:
        console.log("The spacebar was pressed");
    break;
    case 8:
        console.log("The backspace/delete key was pressed");
    break;
    default:
        console.log("error");
    break;
       
}
//end of program