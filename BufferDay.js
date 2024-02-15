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
//Concatinating arrays
const arr1 = ["hello", "js", "interesting"];
const arr2 = ["ikr", "frontend"]
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//passing elements of an array as arguments of a function
function spreadOperator(...args){
    console.log("This is the spread operator")
    console.log(...args);
}
var args = [1,2,3];
const output = spreadOperator(...args); //whatever elements be in the args array, the spread operator will take all of them
console.log(output);

