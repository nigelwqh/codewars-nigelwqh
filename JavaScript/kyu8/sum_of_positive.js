/*

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
    // If array is not empty, filter through the array to return only num >= 0, then use reduce to sum up all remaining num. Else, return 0.
    return (arr.length !== 0) ? arr.filter(num => num >= 0).reduce((a, b) => a + b, 0) : 0;
}

console.log(positiveSum([-1]))