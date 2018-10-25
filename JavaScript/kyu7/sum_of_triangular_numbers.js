/*

Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

*/

function sumTriangularNumbers(n) {
  let number = 0;
  let increment = 0;

  // initialize empty array to store each triangular number
  const triangularNumArr = [];

  while (n) {
    if (n <= 0) {
      return 0;
    } else {
      // While true increase increment variable by 1 and add to number before pushing calculated triangular number into the array. After each loop, decrement n so that eventually n === 0 and the loop breaks.
      increment++;
      number += increment;
      triangularNumArr.push(number);
      n--;
    }
  }

  // sum up all triangular numbers in the array
  return triangularNumArr.reduce((a, b) => a + b);
}

console.log(sumTriangularNumbers(4));