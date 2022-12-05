// In tail recursion, it’s the opposite—the processing occurs before the recursive call. Choosing between the two recursive styles may seem arbitrary, but the choice can make all the difference.

const tailFactorial = (n, num) => {
  if (n===1) {
    return num
  } else {
    // console.log(n, num)
    tailFactorial(n-1, num*n)
  }
}

console.log(tailFactorial(5, 1));