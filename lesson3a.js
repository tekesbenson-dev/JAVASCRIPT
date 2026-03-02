// Javascript for loop
// Loops are used to iterate through something  a number of times 
// 1.For  keyword followed by parenthesis 
// 2. Inside the parenthesis we have initialization; condition and increment/decrement

for(let i =5; i<10; i++){
    console.log("The new value of i is:",i)
}
console.log("=================================")

for(let i=1; i<=10; i++){

    if(i===6){
        console.log("This is the number 6")
        continue;

    }
    console.log(i)
}

// create a for loop that will be able to print out all the leap years from 2000 to 2026

//  Write a for loop to print all odd numbers from 1 to 19. Task: Write a for loop to count down from 10 to 1 and print the numbers in the console. Task: Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1]. Task: Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.