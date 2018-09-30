/* Kata Details:

Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

function squareDigits(num){
    // convert num to string
    let numToString = num.toString();

    // convert numToString into an array and use map to square each item in the array and return a number
    let squareEveryDigit = parseInt(numToString.split("").map(num => Math.pow(parseInt(num), 2)).join(""));

    return squareEveryDigit;
}

console.log(squareDigits(9119));