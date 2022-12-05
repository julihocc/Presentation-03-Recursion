const headFactorial = (n, num=1) => {
    document.write(n," ",num,"<br>")
    if (n>1) {
      return headFactorial(n-1, num*n)
    } else {
      return num
    }
  }

  headFactorial(5)