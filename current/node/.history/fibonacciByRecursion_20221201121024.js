function fibonacci(nthNumber) {
    document.write('fibonacci(' + nthNumber + ') called.<br />');
    if (nthNumber === 1 || nthNumber === 2) {
        // ❶
        // BASE CASE
        document.write('Call to fibonacci(' + nthNumber + ') returning 1.<br />');
        return 1;
    } else {
        // RECURSIVE CASE
        document.write('Calling fibonacci(' + (nthNumber - 1) + ') and fibonacci(' + (nthNumber - 2) + ').<br />');
        let result = fibonacci(nthNumber - 1) + fibonacci(nthNumber - 2);
        document.write('Call to fibonacci(' + nthNumber + ') returning ' + result + '.<br />');
        return result;
    }
}

document.write(fibonacci(10) + '<br />');