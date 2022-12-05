
const tailFactorial = (n, num) => {
  if (n===0) {
    return 
  } else {
    console.log(n, num)
  }
  tailFactorial(n-1, num*n)
}

tailFactorial(5, 1)