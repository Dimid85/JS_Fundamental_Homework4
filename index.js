// Завдання 1
function sumSliceArray(arr, first, second) {
   if (!Array.isArray(arr)) {
     throw new Error("Is not an array");
   }
   
   if (typeof first !== "number" || typeof second !== "number") {
     throw new Error("Is not a numbers");
   }
   
   if (first >= arr.length || second >= arr.length) {
     throw new Error("Out of array");
   }
   
   return arr[first] + arr[second];
 }

// Завдання 2
 function checkAge() {
   try {
     const name = prompt("Enter your name:");
     const ageInput = prompt("Enter your age:");
     const status = prompt("Enter your status (admin, moderator, user):");
     
     if (!name || !ageInput || !status) {
       throw new Error("The field is empty! Please enter your age");
     }
     
     const age = Number(ageInput);
     if (isNaN(age)) {
       throw new EvalError("Age must be a number");
     }
     
     if (age < 18 || age > 70) {
       throw new RangeError("Age is out of range");
     }
     
     if (status !== "admin" && status !== "moderator" && status !== "user") {
       throw new EvalError("Invalid status");
     }
     
     alert("You have access to watch the movie.");
   } catch (error) {
     alert(`Error: ${error.name}\n${error.message}`);
   }
 }
 checkAge();

// Завдання 3
   function calcRectangleArea(width, height) {
      if (typeof width !== "number" || typeof height !== "number" || isNaN(width) || isNaN(height)) {
        throw new TypeError("Width and height must be numeric values");
      }
      
      if (width <= 0 || height <= 0) {
        throw new RangeError("Width and height must be positive numbers");
      }
      
      return width * height;
    }
    try {
      const widthInput = prompt("Enter the width of the rectangle:");
      const heightInput = prompt("Enter the height of the rectangle:");
      
      const width = Number(widthInput);
      const height = Number(heightInput);
      
      const area = calcRectangleArea(width, height);
      alert(`The area of the rectangle is: ${area}`);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
 
// Завдання 4
    class MonthException extends Error {
      constructor(message) {
        super(message);
        this.name = "MonthException";
      }
    }
    
    function showMonthName(month) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    
      if (!month) {
        throw new Error("The field is empty! Please enter month");
      }   
      if (month < 1 || month > 12) {
        throw new MonthException("Incorrect month number");
      }
    
      return months[month - 1];
    }
    
    try {
      const monthInput = prompt("Enter number of month:");
      const month = Number(monthInput);
      const monthName = showMonthName(month);
      console.log(monthName);
    } catch (error) {
      console.log(`${error.name} ${error.message}`);
    }
    
// Завдання 5
     class IDException extends Error {
      constructor(message) {
        super(message);
        this.name = "IDException";
      }
    }
    
    function showUser(id) {
      if (id < 0) {
        throw new IDException("ID is negative: " + id);
      }
    
      return { id };
    }
    
    function showUsers(ids) {
      const validUsers = [];
      
      for (const id of ids) {
        try {
          const user = showUser(id);
          validUsers.push(user);
        } catch (error) {
          console.log(`${error.name}: ${error.message}`);
        }
      }
    
      return validUsers;
    }

