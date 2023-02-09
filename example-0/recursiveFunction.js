function f(n) {
    if (n <= 1) {
        return 1
    } else {
        let a = f(n - 1)
        let b = f(n-2)
        let c = a + b
        console.log(n, a, b, c);
        return c
    }
}

console.log(f(5));