const tailFactorial = (n, num=1) => {
    document.write(n," ",num,"<br>")
    if (n===1) {
      return num
    } else {
      return tailFactorial(n-1, num*n)
    }
  }
