export default function createNewSubFrame(n, value, parent, side) {
    return {
        'n': n, // frame number corresponding to argument n
        'value': value, // frame value corresponding to return value
        'parent': parent, // parent frame
        'side': side, // side of the parent frame
        'left': null, // left child frame
        'right': null, // right child frame
    }
}