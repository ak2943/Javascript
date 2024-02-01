//Constructure object
function Student() {
    function StudentDetails() {
      var studName = "Alisha";
      var Age = 20
      console.log("Constructor Object")
      console.log("\nStudent Details : Student name: " + studName + "\n Age: " + Age);
    }
    function Grades() {
      StudentDetails()
      var ItGrades = 20;
      var sports = 34;
      console.log("Total grades of Student" + (ItGrades + sports))
    }
    return {
      Grades
    }
  }
  
  function Account() {
  
    function StudentFees() {
      let Fees = 30000;
      console.log("Student Fees : " + Fees)
    }
    return {
      StudentFees
    }
  }
  
  var obj = new Account();
  obj.__proto__ = new Student();
  obj.Grades();
  obj.StudentFees();
  
  
  //literal object
  var candidate = {
    firstname: "Alisha",
    lastname: "Mugale",
    call: function() {
      console.log("\nLiteral Object \n" + this.firstname + " " + this.lastname);
    }
  };
  
  candidate.call()