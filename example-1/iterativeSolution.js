class Frame{
    constructor(n) {
        this.n = n // non-negative integer
        this.value = null // integer
        this.parent = null // Frame
        this.side = null // string
        this.left = null // integer
        this.right = null // integer
    }
}
function iterativeSolution(N) {
    // Declare a stack and push the start currentFrame to it
    const stack = [new Frame(N)]
    // This table will store the values of the frames
    const table = {0:1, 1:1}

    while (stack.length > 0) {
        const currentFrame = stack.pop()

        table[currentFrame.n] = currentFrame.value

        // If the currentFrame has a value, we can calculate in many ways:
        if (currentFrame.value === null) {
            // If the table has a non-null value for this currentFrame, we can use it
            if (table.hasOwnProperty(currentFrame.n) && table[currentFrame.n] !== null) {
                currentFrame.value = table[currentFrame.n]
            }
            // If the currentFrame has both left and right children, we can calculate the value
            else if (currentFrame.left !== null && currentFrame.right !== null) {
                currentFrame.value = currentFrame.left * currentFrame.right + 1
                table[currentFrame.n] = currentFrame.value
            }
            // If there is no way to calculate the value in the previous ways, we need to push the currentFrame back to the stack
            else {
                stack.push(currentFrame)

                // We also need to push the left and right children to the stack
                // Let's calculate f(n-1) and f(n/2)
                const leftChild = new Frame(currentFrame.n-1)
                leftChild.value = table.hasOwnProperty(leftChild.n) ? table[leftChild.n] : null
                leftChild.parent = currentFrame
                leftChild.side = 'left'
                stack.push(leftChild)

                const rightChild = new Frame(Math.floor(currentFrame.n/2))
                rightChild.value = table.hasOwnProperty(rightChild.n) ? table[rightChild.n] : null
                rightChild.parent = currentFrame
                rightChild.side = 'right'
                stack.push(rightChild)
            }

        }
        // If the currentFrame has a value...
        else {
            // ...and it has a parent, we can update the parent's value
            if (currentFrame.parent !== null) {
                // ...we update the corresponding side of the parent.
                currentFrame.parent[currentFrame.side] = currentFrame.value
                // So, if the parent has both left and right children, we can calculate the value of the parent
            }
        }
    }
    return table[N]
}

const input = 10
const output = iterativeSolution(input)
console.log(`\n Solution: f(${input})=${output}` )