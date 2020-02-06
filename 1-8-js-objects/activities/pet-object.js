const pet = {
    name: "Rex",
    typeOfPet: "Dog",
    age: 1,
    colour: "Dapple",
    energy: "",
    health: "",
    toilet: true,

    eat(){
        return (`${this.name} is eating`)
    },

    drink(){
        return (`${this.name} is drinking`)
    },

    sleep(){
        return (`${this.name} is sleeping`)
    },

    train(){
        return (`${this.name} is training`)
    },

    play(){
        return (`${this.name} is playing`)
    },

    toiletBreak(value){
        if (this.toilet == true){
        // if (value == true){
            return (`${this.name} is using the toilet`)
        } else {
            return (`${this.name} is not using the toilet`)
        }
        
    },

    age(){
        return (`${this.name} is ${this.age} years old`)
    },

    expire(){
        return (`${this.name} is dead (Sad Face)`)
    }

}

console.log(pet.eat())
console.log(pet.drink())

console.log(pet.toiletBreak())
// console.log(pet.toiletBreak(false))
console.log(pet.expire())