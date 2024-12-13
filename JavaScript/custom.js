document.getElementById("Alert_Name").onclick = function() {
    alert("Mian Ahmad Ali");
    let Statement = "alert ('Mian Ahmad Ali')"
    document.getElementById("Statement").innerHTML = Statement;
    document.getElementById("Output").innerHTML = "";

}

document.getElementById("Alert_Number").onclick = function() {
    alert(123456789);
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    let Statement = "alert('123456789')"
    document.getElementById("Statement").innerHTML = Statement;


};
document.getElementById("Show_variable_Names").onclick = function() {
      document.getElementById("Statement").innerHTML="";
      document.getElementById("Output").innerHTML="";
      let html = "<ul><li>A Variable name Can't contain any spaces.</li><li>A variable name can contain only latters,numbers,dollar signs,and underscore</li><li>Though a variable name can't be any of JavaScript's Keywords. For example,<code>userAlert</code> and <code> myVar</code> are legal.</li><li>Captal letters are fine, but be careful.Variable names are case sensitive.A ,code> rose </code> is not a <code> Rose </code>. If you assign the string 'Floribunda' to the Variable <code>roe</code>. and then ask JavaScript for the value assigned to <code>Rose</code>,you 'ill come up empty.</li></ul>"

      document.getElementById("Output").innerHTML=html;
      



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
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    let html = "<code><ul><li>element = 'getelementbyid'</li><li>camelcase = getElementById</li><li>snakecase =  get_element_by_id </li><li>Pascalcase = GetElementById</li></ul></code>"
    document.getElementById("Output").innerHTML = html;
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
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";

    let num1 = 2;
    let num2 = 3;
    let result = num1 + num2;

    document.getElementById("Output").innerHTML = "<p class='text-center'>" + result + "</p>";

    let Statement = "let num1 = " + num1 + ";<br> let num2 = " + num2 + ";<br> let sum =  " + num1 + "+" + num2 + ";"
    document.getElementById("Statement").innerHTML = Statement;

    console.log(`Sum of ${num1} + ${num2} is:`, result);
};

document.getElementById("Subsctract2number").onclick = function() {
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    let num1 = 2; // Declare variables with `let`
    let num2 = 3;
    let result = num1 - num2; // Calculate the subtraction

    // Log the correct message with the result
    
    document.getElementById("Output").innerHTML = "<p class='text-center'>" + result + "</p>";

    let Statement = "let num1 = " + num1 + ";<br> let num2 = " + num2 + ";<br> let Subtraction is  = " + num1 + "-" + num2 + ";";
    document.getElementById("Statement").innerHTML = Statement;
   
    console.log(`Subtraction of ${num1} - ${num2} is:`, result);
};

document.getElementById("Multiply2numbers").onclick = function() {
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    let num1 = 10; // Declare variables with `let`
    let num2 = 30;
    let result = num1 * num2; 
    
    document.getElementById("Output").innerHTML = "<p class='text-center'>" + result + "</p>";

    let Statement = "let num1 = " + num1 + ";<br> let num2 = " + num2 + ";<br> let Multiplication of  = " + num1 + "*" + num2 + ";";
    document.getElementById("Statement").innerHTML = Statement;

    // Log the correct message with the result
   
    console.log(`Multiplication of ${num1} * ${num2} is:`, result);
};
document.getElementById("Division2numbers").onclick = function() {
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    let num1 = 10; // Declare variables with `let`
    let num2 = 30;
    let result = num1 / num2; 
    
    document.getElementById("Output").innerHTML = "<p class='text-center'>" + result + "</p>";

    let Statement = "let num1 = " + num1 + ";<br> let num2 = " + num2 + ";<br> let Division = " + num1 + "/" + num2 + ";";
    document.getElementById("Statement").innerHTML = Statement;

    // Log the correct message with the result
   
    console.log(`Division of ${num1} / ${num2} is:`, result);
};

document.getElementById("CalculatesomeNumbers").onclick = function() {
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";

    let num1 = 10; // Declare variables with `let`
    let num2 = 30;
    let num3 = 6;
    let num4 = 4;

    // Perform the calculation
    let result = num2 / num3 * num1 + num3 ** num4 - (num2 + num1);

    // Display the result in the Output element
    document.getElementById("Output").innerHTML = "<p class='text-center'>" + result + "</p>";

    // Construct and display the Statement
    let Statement = `let Calculate = (${num2} / ${num3}) * ${num1} + ${num3} ** ${num4} - (${num2} + ${num1});`;
    document.getElementById("Statement").innerHTML = Statement;

    // Log the correct message with the result
    console.log(`The calculation of (${num2} / ${num3}) * ${num1} + ${num3} ** ${num4} - (${num2} + ${num1}) is:`, result);
};




console.log("JavaScript file connected!");

