/* 

Create a function (or write a script in Shell) 
that takes an integer as an argument and returns "Even" 
for even numbers or "Odd" for odd numbers.

*/

const checkOdd = num => {
  return !parseInt(num) ? "Enter a number" : num % 2 === 0 ? true : false;
};
