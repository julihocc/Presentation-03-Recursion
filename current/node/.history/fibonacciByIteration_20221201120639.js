function fibonacci(nthNumber) {
    // ❶
    let a = 1, b = 1;
    let nextNum;
    for (let i = 1; i < nthNumber; i++) {
        console.log(`a${i}`)
        // ❷
        nextNum = a + b; // Get the next Fibonacci number.
        a = b;
        b = nextNum;
    }
    return a;
};

console.log(fibonacci(10));