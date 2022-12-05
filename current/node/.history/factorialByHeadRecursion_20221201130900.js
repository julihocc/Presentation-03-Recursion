// const headFactorial = (n, num) => {
//     console.log(n," ",num)
//     if (n>1) {
//       return headFactorial(n-1, num*n)
//     } else {
//       return num
//     }
//   }

//   headFactorial(5, 1)

const tailFactorial = (n, num) => {
  if (n===0) {
    return 
  } else {
    tailFactorial(n-1, num*n)
    console.log(n, num)
  }
  
}

tailFactorial(5, 1)