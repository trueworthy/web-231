//header
var header = require('/Users/leatrueworthy/bu-webdev/web-231/trueworthy-header')
console.log(header.display('Lea', 'Trueworthy', 'Assignment 5.4'));
console.log('\n')

 /*
============================================
; Title: trueworthy-assignment-5.4.js
; Author: Lea Trueworthy
; Date:   10 January 2019
; Description:  Demonstrates how to filter list of collection objects
;===========================================

*/

// start program

var famousComposers = [
    {
        firstName:"Kanye",
        lastName:"West",
        genre:"Rap",
        rating:"7",
    },
    {
        firstName:"The",
        lastName:"Killers",
        genre:"Rock",
        rating:"8"
    },
    {
        firstName:"Lady",
        lastName:"Gaga",
        genre:"Pop",
        rating:"7",
    },
    {
        firstName:"Kendrick",
        lastName:"Lamarr",
        genre:"Rap",
        rating:"9"
    },
    {
        firstName:"Sam",
        lastName:"Smith",
        genre:"R&B",
        rating:"10",
    },
];

//output
console.log("-- COMPOSER BY RATING --");

famousComposers.forEach(function(music) {
console.log('Last Name' + ': ' + music.lastName + "\n" + 'Rating' + ': ' + music.rating + "\n")});

console.log("-- COMPOSER BY GENRE --");

famousComposers.forEach(function(music) {
console.log('Last Name' + ': ' + music.lastName + "\n" + 'Genre' + ': ' + music.genre + '\n')});

// end program