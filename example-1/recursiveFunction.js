function f(n) {
    if (n <= 1) {
        return 1
    } else {
        let a = f(n - 1)
        let b = f(Math.floor(n / 2))
        let c = a * b + 1
        console.log(n, a, b, c);
        return c
    }
}

console.log(f(5));