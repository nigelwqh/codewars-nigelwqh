/*

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

function reverseWords(str) {
  // splits the string by whitespaces to get an array of each word
  return str.split(" ")

    /* for each word, split once more into individual letters before reversing
    the word and joining them back */
    .map(word => word.split("").reverse().join(""))

    // join back each reversed word
    .join(" ");
}

console.log(reverseWords("hello my name is nigel"));
