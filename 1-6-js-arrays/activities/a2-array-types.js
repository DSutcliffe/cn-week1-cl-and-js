let array1 = [
    "1",
    "2",
    "3",
]
console.log("Original", array1)

// shift
array1.shift()                      // remove first array item
// let removeStart1 = array1.shift()      // remove first array item and store in variable
// console.log(removeStart1)
console.log("Shift", array1)

// unshift
array1.unshift("0", "1")             // add to start of array
console.log("Unshift", array1)

// push
array1.push("4", "5")               // add to end of array  
console.log("Push", array1)

// pop
array1.pop()                        // remove from end of array
// let removeEnd1 = array1.pop()       // remove last array item and store in variable
// console.log(removeEnd1)
console.log("Pop", array1)

// slice
console.log("Slice 1", array1.slice(1))

let array2 = array1.slice(2)        // Begin = no. in index and diaply all data
console.log("Slice 2", array2)

let array3 = array1.slice(1, 2)     // Begin = no. in index, End = Everything before that point
console.log("Slice 3", array3)

// splice
array1.splice(0, 0, "-1")           // Insert data to pos 0 and remove nothing
console.log("Splice-1", array1)

array1.splice(3, 2)                 // Remove data at array pos 3 for x no of positions
console.log("Splice-2", array1)

array1.splice(2, 1, "2", "3")       // Remove data at array pos 2 for x no of positions, then insert data
console.log("Splice-2", array1)

// map

// filter

// foreach