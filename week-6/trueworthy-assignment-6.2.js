//header
var header = require('/Users/leatrueworthy/bu-webdev/web-231/trueworthy-header')
console.log(header.display('Lea', 'Trueworthy', 'Assignment 6.2'));
console.log('\n')
/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   20 January 2019
; Modified By: Lea Trueworthy
; Description: Exercise 6.2 - Exception Handling
;===========================================
/*
/*
 Expected output:
 FirstName LastName
 Exercise 6.2
 Today's Date
 Catch clause: <Your message>
 Finally clause reached: End of program â€¦
 */

 // try/catch/finally statement

try{
    var n = 21; // set variables
    var k = 3; // set variables
    var sum = n-k;
  
  if (sum > 10)throw "The sum is higher than 10"; // set error message
    console.log(sum);
  }catch(err){
    console.log("Catch clause: " + err); // output error clause
  }finally{
    console.log("Finally clause reached...");
  }
  
  // end program