// const headFactorial = (n, num) => {
//     console.log(n," ",num)
//     if (n>1) {
//       return headFactorial(n-1, num*n)
//     } else {
//       return num
//     }
//   }

//   headFactorial(5, 1)

const headFactorial = (n, num) => {
  if (n===0) {
    return 
  } else {
    headFactorial(n-1, num*n)
  }
  
  console.log(n, num)
}

headFactorial(5, 1)