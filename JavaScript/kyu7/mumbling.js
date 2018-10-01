/* Kata Details:

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(s) {
	let accumArr = [];
	let count = 1
	s.split("").map(letter => {
		// pushes each letter after looping them through a repeat function which starts at count = 1 and increments after each loop.
		accumArr.push(letter.repeat(count).toLowerCase());
		count++;
	});

	// capitalizes the first letter of each string in the array before joining them together with a "-" and assign to variable newString
	let newString = accumArr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("-");
	
	return newString;
}