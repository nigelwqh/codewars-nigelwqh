/* 

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
    // assigns vowel matches to variable called matched 
    let matched = str.match(/[aeiou]/gi);

    // if there is a match, return the length of the matched array
    if (matched) {
        return matched.length;
    // else return 0 matches
    } else {
        return 0;
    }
}

console.log(getCount("pppp"));