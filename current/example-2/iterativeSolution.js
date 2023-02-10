class Frame {
    constructor(n) {
        this.n = n //non-negative integer
        this.value = null // float
        this.parent = null // Frame || null
        this.child = null // Frame || null
    }
    hasChild() {
        return this.child !== null && this.child.value !== null
    }
}
function iterativeSolution(a, n) {

    // Declare a stack and push the start frame to it
    const stack = [new Frame(n)]
    // This table will store the values of the frames
    const table = {0:1, 1:a}
    table.hasOwnNonNullProperty = function (n) {
        return this.hasOwnProperty(n) && this[n] !== null
    }

    while (stack.length > 0) {

        const currentFrame = stack.pop()

        // Update the table with the value of the frame, even if it is null
        table[currentFrame.n] = currentFrame.value

        // If the frame has a no value, we can try to calculate this in many ways:
        if (currentFrame.value === null) {
            // If the table has a non-null value for the value of this frame, we can use it
            if (table.hasOwnNonNullProperty(currentFrame.n)) {
                currentFrame.value = table[currentFrame.n]
            }
            // If the frame has a child...
            // ... and the child has a non-null value,...
            // ... we can use the value of the child to calculate the value of the frame
            else if (currentFrame.hasChild()) {
                currentFrame.value = currentFrame.n%2===0 ? currentFrame.child.value * currentFrame.child.value : currentFrame.child.value * currentFrame.child.value * a
                table[currentFrame.n] = currentFrame.value
            }
            // If there is no way to calculate the value in the previous ways,...
            else {
                // we need to push the frame back to the stack
                stack.push(currentFrame)
                // Since in the previous step, there is not child or the child has no value, we need to push the child to the stack
                const childKey = currentFrame.n%2===0 ? currentFrame.n / 2 : Math.floor(currentFrame.n / 2)
                const child = new Frame(childKey)
                child.value = table.hasOwnProperty(childKey) ? table[childKey] : null
                child.parent = currentFrame
                currentFrame.child = child
                stack.push(child)
            }

        }

    }
    return table[n]
}

const a = 6
const n = 4
console.log(Math.pow(a, n));
const output = iterativeSolution(a,n)
console.log(output)