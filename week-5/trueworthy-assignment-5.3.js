//header
var header = require('/Users/leatrueworthy/bu-webdev/web-231/trueworthy-header')
console.log(header.display('Lea', 'Trueworthy', 'Assignment 5.2'));
console.log('\n')

 /*
============================================
Title: trueworthy-assignment-5.3.js
Author: Lea Trueworthy
Date:   08 January 2019
Description: Array-Like object collection
;===========================================

  Expected output:
  FirstName LastName
  Exercise 5.3
  Today's Date
  
  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

 // start program

 var famousComposers = [
    {
        firstName: "Ludwig Van",
        lastName: "Beethoven", 
        genre: "Classical", 
        rating: 10,
    },
    {
        firstName: "Wolfgang",
        lastName: "Mozart", 
        genre: "Classical", 
        rating: 8,
    },
    {
        firstName: "Johann",
        lastName: "Bach", 
        genre: "Classsical", 
        rating: 9,
    },
    {
        firstName: "Joseph",
        lastName: "Haydn", 
        genre: "Classical", 
        rating: 6,
    },
    {
        firstName: "Franz",
        lastName: "Schubert", 
        genre: "Classical", 
        rating: 5,
    }
]

famousComposers.forEach(function(composer){
    console.log("Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating);
});

//end program