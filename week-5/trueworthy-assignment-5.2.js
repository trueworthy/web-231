var header = require('/Users/leatrueworthy/bu-webdev/web-231/trueworthy-header')
console.log(header.display('Lea', 'Trueworthy', 'Assignment 5.2'));
console.log('\n')

 /*
============================================
; Title: trueworthy-assignment-5.2.js
; Author: Lea Trueworthy
; Date:   08 January 2019
; Description: ES5 Built-in Functions: ForEach
;===========================================

  Expected output:
  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi
*/

var food = ['Potatos', 'Grilled Cheese Sandwich', 'Pasta', 'Veggie Burger', 'Sushi']

food.forEach(function(food) 

{console.log(food)});