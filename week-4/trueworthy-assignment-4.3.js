var header = require('/Users/leatrueworthy/bu-webdev/web-231/trueworthy-header')
console.log(header.display('Lea', 'Trueworthy', 'Assignment 4.3'));
console.log('\n');

/*
  Expected output:
  FirstName LastName
  Exercise 4.3
  Today's Date
  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus
  -- SELECTED VALUE --
  Motorcycle
  -- SELECTED VALUE --
  Bus
*/

/*
============================================
; Title:  Filtering.js
; Author: Professor Krasso 
; Date:   30 December 2018
; Modified By: Lea Trueworthy
; Description: Exercise 4.3 - Filtering Arrays
;===========================================
*/ 
console.log(" --Displaying Array Items-- ");

var vehicles=["car","Motorcycle","truck","bus","bike"]
for(var i = 0; i < vehicles.length; i++) {   // Created loop for listing
    console.log(vehicles[i]);
}

 /* Description: Returns a filtered value from an array */
function getValue(array, string) { //calls the function
   
    for(var i=0;i<array.length;i++){
        if(array[i] === string){
         return array[i]
}
}
}
// output
console.log("\n")
console.log("--Selected Value--")
console.log(getValue(vehicles,"Motorcycle"));

console.log("\n")
console.log("--Selected Value--")
console.log(getValue(vehicles,"bike"));