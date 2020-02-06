let age = 41

if(age == "42") {          // != Not Equal, if set to "41" result would be 'A' as not checking variable type
    console.log("A")
} else if(age === 41){     // Absolute - checks type aswell as value
    console.log("B")
} else {
    console.log("C")
}