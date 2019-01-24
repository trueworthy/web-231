//header
var header = require('/Users/leatrueworthy/bu-webdev/web-231/trueworthy-header')
console.log(header.display('Lea', 'Trueworthy', 'Assignment 7.2'));
console.log('\n')

/*
============================================
Title:  trueworthy-assignment-7.2.js
Date:   23 January 2019
Modified By: Lea Trueworthy
Description: Exercise 7.2 Constructor Functions
;===========================================
*/

function employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

var employees = [
    new employee(01, "Jared", "Edison", "Software Engineer"),
    new employee(02 , "Benjamin", "Button", "Programmer"),
    new employee(03, "Samuel", "Norman", "Project Manager"),
    new employee(04, "Poppy", "Hicks", "Lead Tech"),
    new employee(05, "Michelle", "Thorne", "Senior Software Engineer")
]

for (var i = 0; i < employees.length; i++)
{
    var emp = employees[i];

//output    
    console.log(emp.id + " " + emp.firstName + " " + emp.lastName + " " + '[' + emp.title + ']')
}