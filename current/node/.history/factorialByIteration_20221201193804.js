// function factorial(number) {
//     let product = 1;
//     for (let i = 1; i <= number; i++) {
//         product = product * i;        
//         console.log(i, product)
//     }
//     return product;
// }

function factorial(n){
    let acum = 1
    while (n>0) {
        acum = acum * n 
        n = n-1
    }
}