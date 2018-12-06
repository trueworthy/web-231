/*
============================================
; Title:  trueworthy-header-test.js
; Author: Lea Trueworthy 
; Date:   December 2018
; Description: Displays a formatted header (by pulling it from another file, I believe)
;===========================================
*/

//connecting one file to another, it uses the format from that file, The 'hidden' require below is the path used to get the needed info. I really hope Im doing this correctly. 
/* var header=require('/Users/leatrueworthy/bu-webdev/web-231/week-2/trueworthy-header'); */


var header=require('./trueworthy-header');

console.log(header.display("Lea", "Trueworthy", "Assignment 2.2"));