//Hoisting
console.log(x);        //x is assigned undefined because of "memory allocation phase" in execution context
getName();             //getName is called and the output is printed as another execution context is created whenever a function is called
console.log(getName);  //the whole function code block of getName is printed

var x = 7;
function getName(){
    console.log("Hoisting happens when we call variable, function before it's initialization.");
}

//normal flow without hoisting
var x = 77;            //x is initialized and declared
function getName(){    //getName is declared
    console.log("Hoisting happens when we call variable, function before it's initialization.");
}
console.log(x);        //x is assigned the value after memory allocation and execution phase
getName();             //getName is called and the output is printed as another execution context is created whenever a function is called
console.log(getName);  //the function code block is printed

//Shift operator (...)



