//Write a function createHelloWorld. 
//It should return a new function that always returns "Hello World".

const createHelloWorld = function(){ //anonymous function - withiout keyword "function"
    function another(...args){       //here, args is a variable and we dont need to declare it becaue in js, "..." operator automatically initializes it as an empty array
        return "Hello World";
    }
    return another();
}
const ans = createHelloWorld();
console.log(ans);

// arrow functions
const example = (a,b,c) =>{
    return a+b+c;
}
const c = 10
const result = example(1,2,c);
console.log(result);
/*Here, result is not a function, instead it is 
more like a variable which is storing the value 
of example and its parameters.*/



