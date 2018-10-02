
/* Kata Details: 

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
    let countX = 0;
    let countO = 0;

    str = str.toLowerCase();
    // initiate a for loop - if element is 'x', increment countX || if element is 'o' increment countO;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'o') {
            countO++;
        } else if (str[i] === 'x') {
            countX++;
        }
    }
    // if number of Os and Xs are equal, return true. Else, false.
    return (countO === countX) ? true : false;
}

console.log(XO("ppp"));