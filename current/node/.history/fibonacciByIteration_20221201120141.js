function fibonacci(nthNumber) {
    // ❶
    let a = 1, b = 1;
    let nextNum;
    document.write('a = ' + a + ', b = ' + b + '<br />');
    for (let i = 1; i < nthNumber; i++) {
        // ❷
        nextNum = a + b; // Get the next Fibonacci number.
        a = b;
        b = nextNum;
        document.write('a = ' + a + ', b = ' + b + '<br />');
    }
    return a;
};

document.write(fibonacci(10));