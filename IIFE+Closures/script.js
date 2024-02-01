var obj = (function Main() {
    function Student() {
      var name = "Alisha"
      var dept = "CSE"
      var age = "20"
      cse_count = 300;
      etc_count = 350;
      function student_data() {
        console.log("Student Data : ")
        console.log("Student Name : " + name)
        console.log("Student deprtment : " + dept)
      }
      function student_count() {
        console.log("CSE student Count : " + cse_count)
        console.log("ETC student Count : " + etc_count)
      }
      return {
        student_data, student_count
      }
    }
    function Accounting() {
      student_fees = 30000
      console.log("Fees for Every Student : " +student_fees)
    }
    function Salary() {
      var staff_salary = 50000;
      var emp_salary = 10000;
      function staff_account() {
        console.log("Salary of per Staff Member" + staff_salary)
      }
      function emp_account() {
        console.log("Salary of per Employee" + emp_salary)
      }
      return {
        emp_account
      }
    }
    return {
      Student, Accounting, Salary
    }
  })();
  var x = obj.Student()
  x.student_data()
  x.student_count()
  var y = obj.Salary()
  y.emp_account()
  obj.Accounting();