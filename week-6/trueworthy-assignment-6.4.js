//header
var header = require('/Users/leatrueworthy/bu-webdev/web-231/trueworthy-header')
console.log(header.display('Lea', 'Trueworthy', 'Assignment 6.4'));
console.log('\n')

/*
============================================
; Title:  Assignment 6.4
; Author: Lea Trueworthy
; Date:   20 January 2019
; Description: creating nested object
;===========================================
*/

// creating object with nested object
var ticket = {
    id:2603,
    name:"Ticket",
    dateCreated: new Date().toLocaleDateString('en-US'),
    priority:"Very Important",

    person:{
      id:1999,
      firstName:"Spongebob",
      lastName:"Squarepants",
      jobTitle:"Head Fry Cook"
    }
}

//outputting nested object property
console.log(ticket.name +" " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").")