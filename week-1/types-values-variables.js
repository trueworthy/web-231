/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

// start of program - your code goes below this line

var myFirstName = "Lea";
var myLastName = "Trueworthy";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n");

//my code starts here

var firstName = "John";
var middlename = "P.";
var lastname = "Smith";
var street = "Abbey Road";
var city = "St. John's Wood";
var state = "London"
var pay = "$11.00";
var todaysDate = new Date(2000, 5).toLocaleDateString();

var itemlist = "\nEmployee: ";
var person = "\nName: " + firstName + " " + middlename + " " + lastname;
var address = "\nAddress: " + street + "\n" + city + "," + state;
var pay = "\nPay Rate: " + pay  + "\nHire Date: " + todaysDate;

console.log(itemlist + person + address + pay);

var firstName = "Sarah";
var middlename = "V.";
var lastname = "Johnson";
var street = "Fifth Avenue";
var city = "New York City,";
var state = "New York"
var pay = "$15.00";
var todaysDate = new Date(2005, 0).toLocaleDateString();

var itemlist = "\nEmployee: ";
var person = "\nName: " + firstName + " " + middlename + " " + lastname;
var address = "\nAddress: " + street + "\n" + city + "," + state;
var pay = "\nPay Rate: " + pay  + "\nHire Date: " + todaysDate;

console.log(itemlist + person + address + pay);

var firstName = "Jack";
var middlename = "L.";
var lastname = "Mark";
var street = "Bourbon Street";
var city = "New Orleans,";
var state = "Louisiana"
var pay = "$13.50";
var todaysDate = new Date(2005, 0, 14).toLocaleDateString();

var itemlist = "\nEmployee: ";
var person = "\nName: " + firstName + " " + middlename + " " + lastname;
var address = "\nAddress: " + street + "\n" + city + "," + state;
var pay = "\nPay Rate: " + pay  + "\nHire Date: " + todaysDate;

console.log(itemlist + person + address + pay);

var firstName = "Hannah";
var middlename = "E.";
var lastname = "Mark";
var street = " Canal Street";
var city = "New Orleans,";
var state = "Louisiana"
var pay = "$13.50";
var todaysDate = new Date(2006, 2, 30).toLocaleDateString();

var itemlist = "\nEmployee: ";
var person = "\nName: " + firstName + " " + middlename + " " + lastname;
var address = "\nAddress: " + street + "\n" + city + "," + state;
var pay = "\nPay Rate: " + pay  + "\nHire Date: " + todaysDate;

console.log(itemlist + person + address + pay);

var firstName = "Laura";
var middlename = "T.";
var lastname = "Ray";
var street = "Lombard Street";
var city = "San Francisco,";
var state = "California"
var pay = "$18.25";
var todaysDate = new Date(2013, 7, 2).toLocaleDateString();

var itemlist = "\nEmployee: ";
var person = "\nName: " + firstName + " " + middlename + " " +lastname;
var address = "\nAddress: " + street + "\n" + city + "," + state;
var pay = "\nPay Rate: " + pay  + "\nHire Date: " + todaysDate;

console.log(itemlist + person + address + pay);

// end of program 
