function f(a, n) {
    if (n === 0) {
        return 1
    } else if (n === 1) {
        return a
    } else if (n%2===0) {
        // Recursive call when n is even
        return f(a, n/2) * f(a, n/2)
    } else if (n%2===1) {
        // Recursive call when n is odd
        return f(a, Math.floor(n/2)) * f(a, Math.floor(n/2)) * a
    }
}

console.log(Math.pow(3, 5));
console.log(f(3, 5));