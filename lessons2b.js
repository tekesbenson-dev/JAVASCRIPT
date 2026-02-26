

let number1 =5
let number2 =10

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number1 == number1)


//logical operators are used to evaluate two or more conditions and they also give a boolean answer
// logical AND (&&) - it evaluates a true  if and only if all of the conditions / statements are true
console.log((number1 < number2) && (number2 > number1) && (number2 > number2))

 // Logical OR (||) It evaluates to true if one of the condition is true.
 console.log((number1 > number2) || (number2 > number1))

 // logic statement NOT(!) used to negate a condition
 console.log(!(number1 < number2))