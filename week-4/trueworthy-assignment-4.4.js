var header = require('/Users/leatrueworthy/bu-webdev/web-231/trueworthy-header')
console.log(header.display('Lea', 'Trueworthy', 'Assignment 4.4'));
console.log('\n');

/*
// Expected Output
  FirstName LastName
  Assignment 4.4
  Today's Date
  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada
  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada
  -- SELECTED VALUE --
  Iowa
*/

// start program
var states=['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada']


// function that accepts two arguments, an index placeholder and a filterable value
function getStates(arr) {
    for (var s = 0; s < states.length; s++) {
        console.log(states[s]);
    }
}

//function that accepts one dimentional array
function getValue(x, value) 
{
    if(x == value)
        return value;
}

// Output
console.log("--Original Array--")
for(var i =0;i<states.length;i++){
    console.log(states[i])
}

    console.log('\n');

console.log("--Sorted Array--")
getStates(states.sort());

    console.log('\n');

//invoke the filter method
console.log("--Selected Value--")
console.log(
    states.filter
    (
    function (x)
    {
        return getValue(x, "Iowa")
    }
    )[0]
);