/*
Write a function to check if a number is odd or even.
*/
function checkOddOrEven(num) {
    if (num % 2 === 0) return "Even";
    return "Odd";
}

console.log(checkOddOrEven(2));
console.log(checkOddOrEven(3));
console.log(checkOddOrEven(4));
console.log(checkOddOrEven(5));
