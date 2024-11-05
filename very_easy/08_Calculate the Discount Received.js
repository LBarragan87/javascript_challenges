/*
Write a function to calculate the discount received.

We can find the discount received by subtracting the discounted price from the original price.

For example, given original Price = 200  and discounted Price = 150, the discount received is 200 - 150 = 50

Return the discount received from the given original price and discounted price.
*/
function calculateDiscount(originalPrice, discountedPrice) {
    return originalPrice - discountedPrice;
}

console.log(calculateDiscount(500, 400));
