// 65


In head recursion, the recursive call, when it happens, comes before other processing in the function (think of it happening at the top, or head, of the function).

const headFactorial = (n, num) => {
  if (n===0) {
    return 
  } else {
    headFactorial(n-1, num*n)
  }
  
  console.log(n, num)
}

headFactorial(5, 1)