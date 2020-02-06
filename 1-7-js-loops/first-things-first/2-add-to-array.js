let array1 = [
    "B",
    "C",
    "D",
]

const addToStart = (newLetter) => {
    array1.unshift(newLetter)
}

addToStart("A")
console.log(array1)