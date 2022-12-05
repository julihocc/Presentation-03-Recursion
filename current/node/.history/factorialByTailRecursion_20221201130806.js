// const tailFactorial = (n, num) => {
//     console.log(n," ",num)
//     if (n===1) {
//       return num
//     } else {
//       return tailFactorial(n-1, num*n)
//     }
//   }

//   console.log(tailFactorial(5, 1))

const tailFactorial = (n, num) => {
  if (n===0) {
    return 
  } else {
    console.log(n, num)
  }
  tailFactorial(n-1, num*n)
}

console.log(tailFactorial(5, 1)