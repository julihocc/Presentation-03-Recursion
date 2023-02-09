export default function printFrame(frame) {
    let parentValue = frame.parent === null ? null : frame.parent.n
    console.log(`Frame #:${frame.n}, value: ${frame.value}, parent: ${parentValue}, side: ${frame.side}, left child: ${frame.left}, right child: ${frame.right} `)
}