/*
Write a function to convert an angle given in degrees to radians.
*/
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

console.log(degreesToRadians(90));
console.log(degreesToRadians(180));
console.log(degreesToRadians(360));
