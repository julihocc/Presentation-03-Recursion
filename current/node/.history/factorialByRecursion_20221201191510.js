function factorial(number) {
    if (number === 1) {
        // BASE CASE
        return 1;
    } else {
        // RECURSIVE CASE
        // ❶
        return number * factorial(number - 1);
    }
}

console.log(factorial(100000000))