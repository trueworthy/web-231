var header = require('/Users/leatrueworthy/bu-webdev/web-231/trueworthy-header')

/*
============================================
; Title:  Assignment- 4.2 Arrays
; Author: Professor Krasso 
; Date:   19 December 2018
; Modified By: Lea Trueworthy
; Description: Demonstrates how to define and output array values
;===========================================

//Expected output:
  FirstName LastName
  Exercise 4.2
  Today's Date
  Apple
  Orange
  Banana
  Mango
  Pear
*/

console.log(header.display('Lea', 'Trueworthy', 'Assignment 4.2'));
console.log('\n');

var fruit = ["Apple", "Orange","Banana", "Mango", "Pear" ];// Array of 5 elements
var fruits="";

function getFruit(array){


  for(var i=0;i<array.length;i++){
       fruits += array[i] +"\n"
     
  }
  return fruits; 
  }
  
  console.log(getFruit(fruit));