/*

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

For Example:

DNAStrand ("ATTGC") # return "TAACG"
DNAStrand ("GTAT") # return "CATA"

*/

function DNAStrand(dna) {
    const dnaConverter = dna.split("").map(letter => {
        if (letter === "A") {
            return "T";
        } else if (letter === "T") {
            return "A";
        } else if (letter === "C") {
            return "G";
        } else {
            return "C"
        }
    }).join("");

    return dnaConverter;
};

console.log(DNAStrand("AATTGG"));