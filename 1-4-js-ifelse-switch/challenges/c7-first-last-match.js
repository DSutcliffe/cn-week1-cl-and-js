// Challenge 7
let string1 = "ABCDEA"
let string2 = string1.substring(0,1)
let lastCharPos = string1.length -1
let string3 = string1.substring(lastCharPos)

console.log(string2)
console.log(lastCharPos)
console.log(string3)

if (string2.toUpperCase() == string3.toUpperCase()){
    console.log("TRUE")
} else {
    console.log("FALSE")
}