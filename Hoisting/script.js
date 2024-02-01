//Hoisting- It means all the declaration (not initilization) of variables/functions is moved at the top of code so that we can use it before its declared.

console.log("Hello");
hoisting()

function hoisting() {
  var n = 10;
  console.log(n);
  console.log(i)
  var i; //variable hoisted at the top before execution
}