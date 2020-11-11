"use strict";

/* Takes in a positive whole number and returns an array of all the
    of the numbers that divide evenly into that number */
function findDivisors(num) {
    let divisors = [];

    if (!(Number.isInteger(num)) || (num < 1))
        return "Please provide a positive, whole number.";

    for (let divisor = 1; divisor <= num; divisor++) {
        if (num % divisor === 0) divisors.push(divisor);
    }
    return divisors;
}