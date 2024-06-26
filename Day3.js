/*Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".*/

//Approach1

var expect = function(value){
    var obj = {
        toBe: function(expectedVal){
            if(expectedVal === value){
                return true;
            }
            else{
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expectedVal){
            if(expectedVal !== value){
                return true;
            }
            else{
                throw new Error("Equal");
            }
        }
    }
    return obj;
}

//Approach 2 (ternary operator)
// in ternary approach, we can't use "throw" keyword directly
// the below code will display an error
var expect = function(value){
    var obj = {
        toBe: function(expectedVal){
            /*if(expectedVal === value){
                return true;
            }
            else{
                throw new Error("Not Equal");
            }*/
            //(expectedVal===value)?true:throw new Error ("Not Equal");
        },
        notToBe: function(expectedVal){
            if(expectedVal !== value){
                return true;
            }
            else{
                throw new Error("Equal");
            }
        }
    }
    return obj;
}
