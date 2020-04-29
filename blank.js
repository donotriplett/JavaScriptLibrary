/*
FIZZBUZZ WHITEBOARDING CHALLENGE
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/

let FB = 22;

if (FB % 15 == 0){
    console.log("Fizz Buzz");
} else if (FB % 3 == 0){
    console.log("Fizz");
} else if (FB % 5 == 0){
    console.log("Buzz");
} else {
    console.log("Not divisible by 3 or 5")
}