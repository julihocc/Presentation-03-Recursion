function fibonacci(nthNumber) {
    console.log('fibonacci(' + nthNumber + ') called.<br />');
    if (nthNumber === 1 || nthNumber === 2) {
        // ❶
        // BASE CASE
        console.log('Call to fibonacci(' + nthNumber + ') returning 1.<br />');
        return 1;
    } else {
        // RECURSIVE CASE
        console.log('Calling fibonacci(' + (nthNumber - 1) + ') and fibonacci(' + (nthNumber - 2) + ').<br />');
        let result = fibonacci(nthNumber - 1) + fibonacci(nthNumber - 2);
        console.log('Call to fibonacci(' + nthNumber + ') returning ' + result + '.<br />');
        return result;
    }
}

console.log(fibonacci(10) + '<br />');