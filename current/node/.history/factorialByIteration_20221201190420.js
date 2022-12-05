function factorial(number) {
    let product = 1;
    for (let i = 1; i <= number; i++) {
        console.log(i, product)
        product = product * i;
    }
    return product;
}

console.log(factorial(5))