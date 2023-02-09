import createNewSubFrame from "./createNewSubFrame.js";
import printStack from "./printStack.js";


function iterativeSolution(N) {

    console.clear()
    console.log("Let's start with N = ", N, "")

    const start = createNewSubFrame(N, null, null, null)
    // Declare a stack and push the start frame to it
    const stack = [start]
    // Declare a variable to store the current frame
    let frame
    // This table will store the values of the frames
    const table = {}

    while (stack.length > 0) {

        printStack(stack)
        frame = stack.pop()
        console.log('In this round, we popped frame #', frame.n)

        table[frame.n] = frame.value

        // If the frame has a value, we can calculate in many ways:
        if (frame.value === null) {
            // If the table has a non-null value for this frame, we can use it
            if (table.hasOwnProperty(frame.n) && table[frame.n] !== null) {
                frame.value = table[frame.n]
            }
            // If the frame number is 0 or 1, we can use the value directly
            else if (frame.n <= 1) {
                table[frame.n] = frame.value = 1
            }
            // If the frame has both left and right children, we can calculate the value
            else if (frame.left !== null && frame.right !== null) {
                frame.value = frame.left * frame.right + 1
                table[frame.n] = frame.value
            }
            // If there is no way to calculate the value in the previous ways, we need to push the frame back to the stack
            else {
                stack.push(frame)

                // We also need to push the left and right children to the stack
                // Let's calculate f(n-1) and f(n/2)
                let leftKey = frame.n - 1
                let leftValue = table.hasOwnProperty(leftKey) ? table[leftKey] : null
                stack.push(createNewSubFrame(leftKey, leftValue, frame, 'left'))

                let rightKey = Math.floor(frame.n / 2)
                let rightValue = table.hasOwnProperty(rightKey) ? table[rightKey] : null
                stack.push(createNewSubFrame(rightKey, rightValue, frame, 'right'))
            }

        }
        // If the frame has a value...
        else {
            // ...and it has a parent, we can update the parent's value
            if (frame.parent !== null) {
                // ...we update the corresponding side of the parent.
                frame.parent[frame.side] = frame.value
                // So, if the parent has both left and right children, we can calculate the value of the parent
            }
        }
        console.log("Updated table: ", table)
    }
    return frame.value
}

const input = 5
const output = iterativeSolution(input)
console.log(`\n Solution: f(${input})=${output}` )