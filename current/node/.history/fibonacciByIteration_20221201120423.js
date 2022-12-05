function fibonacci(nthNumber) {
    // ❶
    let a = 1, b = 1;
    let nextNum = a+b;
    console.log('a = ' + a + ', b = ' + b );
    console.log(`${a}+${b})
    for (let i = 1; i < nthNumber; i++) {
        // ❷
        nextNum = a + b; // Get the next Fibonacci number.
        a = b;
        b = nextNum;
        console.log('a = ' + a + ', b = ' + b );
    }
    return a;
};

console.log(fibonacci(10));