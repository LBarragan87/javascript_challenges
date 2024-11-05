/*
Write a function to check if a student has passed or failed.
*/

function checkPassOrFail(marks) {
    if (marks < 40) {
        return "Fail";
    } else {
        return "Pass";
    }
}

console.log(checkPassOrFail(45));
console.log(checkPassOrFail(40));
console.log(checkPassOrFail(39));
