let songOrder = [
    "Alice Smith - Fool for you",
    "Notorious BIG - F U Tonight",
    "LL Cool Jay - Hey Lover",
]
console.log(songOrder)
console.log(songOrder[1])

console.log("Old Order:", songOrder)

songOrder[1] = "New Artist - New Song"
console.log("New Order", songOrder)

console.log(songOrder.length)
console.log(songOrder[1].length)

// .push add item to end of array
songOrder.push("Test Name - Test Name")
console.log(songOrder)

// .pop remove last item
songOrder.pop()
console.log(songOrder)