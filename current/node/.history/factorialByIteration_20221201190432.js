function factorial(number) {
    let product = 1;
    for (let i = 1; i <= number; i++) {
        product = product * i;        
        console.log(i, product)
    }
    return product;
}

console.log(factorial(5))