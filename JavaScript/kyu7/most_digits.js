/*

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/

// let str = "1000";
// console.log(str.length);


function findLongest(array){
    // find the length of each number and get the maximum length
    let numLength = array.map(num => num.toString().length).reduce((a, b) => Math.max(a, b));
    // filters the original array for numbers with length equal to the maximum length and return the first index;
    return array.filter(num => num.toString().length === numLength)[0]; 
}

console.log(findLongest([9000, 8, 8000]));