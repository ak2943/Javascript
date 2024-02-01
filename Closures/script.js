//It basically means function inside the function
//It proveds a good/organized Structure of code and provide security by achieving Encasulation and Data Abstraction, all function defined inside outer function are private we cant access it outside the block,hence we need to return it!

function Calculate() {
    function Add(num1, num2) {
      return num1 + num2;
    }
    function Sub(num1, num2) {
      return num1 - num2;
    }
    function Mult(num1, num2) {
      return num1 * num2;
    }
    function cal() {
      var msg = "Calculation is done!"  //all function and variable are private not acessible outside the block
      function Msg() {
        console.log(msg)
      }
      return {
        Msg
      }
    }
    return {
      Add, Sub, Mult, cal
    }
  }
  
  //console.log(msg);  //error
  var obj = Calculate()
  var res = obj.Add(5, 3);
  console.log("Addition :" + res);
  var m = obj.cal();
  m.Msg();
  