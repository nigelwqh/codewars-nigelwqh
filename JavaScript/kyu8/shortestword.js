/* Kata Details:
    
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.

*/

function findShort(s) {
    const splitS = s.split(" ");
    return splitS.map(word => word.length).reduce((a, b) => Math.min(a, b));
}
