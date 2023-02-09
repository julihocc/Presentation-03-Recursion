import printFrame from "./printFrame.js";

export default function printStack(stack) {
    console.log("------------ Stack status")
    console.log("Stack length: "+"*".repeat(stack.length))
    for (let frame of stack) {
        printFrame(frame)
    }
    console.log("---")
}