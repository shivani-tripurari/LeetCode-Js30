/*Given an integer n, return a counter function. 
This counter function initially returns n and then 
returns 1 more than the previous value every 
subsequent time it is called (n, n + 1, n + 2, etc).*/

const counter = function(n){
    return function(){
        return n++;
    }
};
const call = counter(10);
console.log(call());
console.log(call());
console.log(call());
/*Here, call is a function because it is calling the function counter 
with parameter n and, it is inturn calling another function which 
increments the value of n. */

