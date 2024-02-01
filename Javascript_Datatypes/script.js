//var - it is a keyword which define we are declaring a variable.
//Variables declared with var have global scope and are hoisted to the top of the program before execution.
var number1 = 10;
console.log("number1: " + number1)

//let - it si also used to declare variable in javascript 
// let variables are block-scoped/local scope {within the block},and are not Hoisted 
let number2 = 90;
console.log("number2: " + number2)

//js datatypes are infered/Duck type - we can infere that name is a string & number2 is number
let name = "Alisha";
console.log(name)

let status = true;
console.log(status)
console.log("type of status variable : " + typeof (status));  //to check type of variable

//Undefined- It is a state where variable is declared but yet not assigned/Initilized a value.
let age;
console.log(age)

//Null- It represent the absence of value.
var x;
function fun(x) {
  console.log(x)
}

fun(null)

//Object- In JavaScript objects is collection of properties,  limited set of properties are initialized; then properties can be added and removed, it is represented in Key-value pair
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

var res = person.age;
console.log("Age of Person: " + res)