function persistence(num) {
    let count = 0;

    // convert num to a string and splits into an array of single numbers. While the array length is not equal 1, repeat the loop until it becomes 1.
    while (num.toString().split("").length !== 1) {
        num = num.toString().split("").reduce((a, b) => a * b);
        count++;
    }
    return count;
}

console.log(persistence(25));