document.getElementById("Alert_Name").onclick = function() {
    alert("Mian Ahmad Ali");
};

document.getElementById("Alert_Number").onclick = function() {
    alert(123456789);
};
document.getElementById("Show_variable_Names").onclick = function() {
    const fullName = "Mian Ahmad";
    let lastName = "Ali";
    let age = 21; // Fixed variable name casing
    let city = "Faisalabad";

    // Log variable values to the console
    console.log("fullName:", fullName);
    console.log("lastName:", lastName);
    console.log("age:", age);
    console.log("city:", city);
};

document.getElementById("Show-camel_case_example").onclick = function() {
    let element = "getelementbyid";
    let camelcase = "getElementById";
    let snakecase =  "get_element_by_id";
    let Pascalcase = "GetElementById";
    
    console.log("element", element);
    console.log("camelcase",camelcase );
    console.log("snakecase",snakecase );
    console.log("Pascalcase",Pascalcase );
};
document.getElementById("Sum2number").onclick = function() {
   num1 = 2;
   num2 = 3;
   result = num1 + num2;

   console.log(`Sum of ${num1} + ${num2} is:` , result);



};
document.getElementById("Subsctract2number").onclick = function() {
    let num1 = 2; // Declare variables with `let`
    let num2 = 3;
    let result = num1 - num2; // Calculate the subtraction

    // Log the correct message with the result
   
    console.log(`Subtraction of ${num1} - ${num2} is:`, result);
};

document.getElementById("Multiply2numbers").onclick = function() {
    let num1 = 10; // Declare variables with `let`
    let num2 = 30;
    let result = num1 * num2; 

    // Log the correct message with the result
   
    console.log(`Multiplication of ${num1} * ${num2} is:`, result);
};
document.getElementById("Division2numbers").onclick = function() {
    let num1 = 10; // Declare variables with `let`
    let num2 = 30;
    let result = num1 / num2; 

    // Log the correct message with the result
   
    console.log(`Division of ${num1} / ${num2} is:`, result);
};

document.getElementById("CalculatesomeNumbers").onclick = function() {
    let num1 = 10; // Declare variables with `let`
    let num2 = 30;
    let result = num1 / num2; 
    Calculate = result * 3

    // Log the correct message with the result
   
    console.log(`The Calculation of number ${result} * ${3} is:`, Calculate);
};



console.log("JavaScript file connected!");

