//header
var header = require('/Users/leatrueworthy/bu-webdev/web-231/trueworthy-header')
console.log(header.display('Lea', 'Trueworthy', 'Assignment 6.3'));
console.log('\n')

/*
============================================
; Title:  trueworthy-assignment-6.3.js
; Author: Professor Krasso
; Date:   20 January 2019
; Modified By: Lea Trueworthy
; Description: Object literal with get and set methods
;===========================================
*/

// variable
var ticket = {

    id:"1999",
    name:"Head Fry Cook",
    requester:"Spongebob Squarepants",

    set ident(val){ // sets id
        this.id = val;
      },
  
    get ident(){ // returns id
      return this.id;
    },
  
    set names(val){ // sets name
      this.name = val;
    },

    get names(){ // returns name
        return this.name;
      },
  
    set requesterName(val){ // sets requester
        this.requesterName = val;
      },

    get requesterName(){ // returns requester
      return this.requester;
    }    
  };
  
  // output
  console.log("{id: " + ticket.id + "," + " name: " + ticket.name + "," + " requester: " + ticket.requester + "}");
  
  //end program