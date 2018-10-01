/*

Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

*/

function findSum(n) {
    // creates an array of a range numbers from 0 to n inclusive 
    let rangeOfZeroToN = [...Array(n + 1).keys()];

    // filters the array to contain only multiples of 3 or 5 and sum the numbers
    return rangeOfZeroToN.filter(num => num % 3 ===  0 || num % 5 === 0).reduce((a, b) => a + b);
}

console.log(findSum(5))