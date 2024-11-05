/*
Rounding off a number means adjusting it to the nearest whole number or specified decimal place for simplicity.
*/

function roundOff(num, ndigits) {
    return num.toFixed(ndigits);
}

console.log(roundOff(13.4537, 2));
