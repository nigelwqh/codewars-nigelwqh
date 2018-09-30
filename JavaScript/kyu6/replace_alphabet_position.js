/* Kata Details:

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

a being 1, b being 2, etc.

As an example:

alphabet_position("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

*/

function alphabetPosition(text) {
    let numericText = [];
    let lowerCaseTextArray = text.toLowerCase().split(/\s{2,}/g);

    // converts lower-cased letters in each text array into their respective charcodes - 96 to mimic their position in the alphabet 
    let filteredText = lowerCaseTextArray.map(word => word.split("")
                                         .filter(letter => letter.match(/^[a-z]$/gi))
                                         .map(letter => letter.charCodeAt(0) - 96));
    // loops through each subarray of filteredText variable and combines the substrings into a single string
    for (let eachArr of filteredText) {
        numericText.push(eachArr.join(" "));
    }

    // finally returns a single string of numbers relative to the alphabet positions
    return numericText.join("");
}