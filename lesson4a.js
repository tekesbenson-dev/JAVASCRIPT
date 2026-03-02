// Functions with parameters.
// Parameters are values that get passed as arguments when we invoke a function.
// They help us to create functions that can be reusable through out a program.

function greeting(name){
    console.log("Hello", name, "How have you been")
}


greeting("Benson")
greeting("Francis")

console.log("=============")

// Below is a function with parameters to calculate sum of two numbers
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of the numbers is:", sum)
}






addition(45,60)
addition(35,80)
console.log("===========")

// by use of a function that accept parameters,calculate the area of triangle whose base is 28cm and height 12cm
// by use of function that accept parameters, calculate the area of triangle whose base is 20cm and height 12cm
function area(base, height) {
    area =0.5 * (base * height) ; 
    console.log("the area is", result, "cm²");
}


area(28,12)


function calculateSimpleInterest(p, r, t) {
  let interest = (p * r * t) / 100;
  console.log("The simple interest is:", interest);
}

calculateSimpleInterest(50000, 5, 8);

