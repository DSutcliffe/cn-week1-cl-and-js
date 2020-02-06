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

    legRemoval(){
        return (person.legs -2)         // Same as below
        return (this.legs -2)           // this is 'this' object
    },

    sayHi(){
        return (`Hello, my name is ${this.name}`)
    }

}

console.log(person)
console.log(person.legRemoval())

console.log(person.sayHi())