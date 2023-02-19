class Frame {
    constructor(m, n) {
        this.m = m
        this.n = n
        this.value = null
    }
}

const ackermann = (M, N) => {
    const stack = [new Frame(M, N)]
    const table = {}
    while (stack.length > 0) {
        const currentFrame = stack.pop()
        const {m, n, value} = currentFrame
        if (value === null) {
            // Case 1
            if (m === 0) {
                currentFrame.value = n + 1
                table[[m, n]] = currentFrame.value
            }
            // Case 2
            if (m>0 && n==0){
                if (table.hasOwnProperty([m-1,1]) && table[[m-1,1]]!==null){
                        currentFrame.value = table[[m-1,1]]
                        table[[m,n]] = currentFrame.value
                } else {
                    stack.push(currentFrame)
                    stack.push(new Frame(m-1,1))
                }
            }
            // Case 3
            if (m>0 && n>0){
                if (table.hasOwnProperty([m,n-1]) && table[[m,n-1]]!==null){
                    if (table.hasOwnProperty([m-1,table[[m,n-1]]]) && table[[m-1,table[[m,n-1]]]]!==null){
                        currentFrame.value = table[[m-1,table[[m,n-1]]]]
                        table[[m,n]] = currentFrame.value
                    } else {
                        stack.push(currentFrame)
                        stack.push(new Frame(m-1,table[[m,n-1]]))
                    }
                } else {
                    stack.push(currentFrame)
                    stack.push(new Frame(m,n-1))
                }
            }
        }
    }
return table[[M,N]]
}

console.log(ackermann(0, 3))
console.log(ackermann(3, 0))
console.log(ackermann(3, 3))