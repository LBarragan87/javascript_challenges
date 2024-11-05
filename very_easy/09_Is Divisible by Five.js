/*
Write a function to check if a number is divisible by five.
*/
function isDivisibleByFive(num) {
    if (num % 5 === 0) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log(isDivisibleByFive(4));
console.log(isDivisibleByFive(5));
console.log(isDivisibleByFive(6));
console.log(isDivisibleByFive(9));
console.log(isDivisibleByFive(10));
console.log(isDivisibleByFive(11));
