const person = {
    name: "Danny",
    age: 41,
    male: true,
    eyeColour: "Blue",
    fingers: 10,
    toes: 10,
    eats: [
        "Pizza",
        "Burgers",
        "Curry",
        "Chinese"
    ],
    drinks: [
        "Water",
        "Beer",
        "Vodka",
        "JD"
    ],
    legs: 4,
}
console.log(person.name)
console.log(person["name"])

console.log(person.eats)
console.log(person["eats"])
// console.log(person[`${eats[1]}`])                // Doesn't work NOT ALLOWED!
console.log(person.eats[1])

// person.favSong = ["Song1", "Song2", "Song3"]        // Add to object
// console.log(person)

person["favSong"] = ["Song1", "Song2", "Song3"]        // Same as above
console.log(person)
