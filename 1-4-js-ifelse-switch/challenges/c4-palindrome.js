// Challenge 4
let numOne = "1001"
let numTwo = numOne.split('').reverse().join('')
if (numOne == numTwo) {
    console.log("Palindrome")
} else {
    console.log("Not a palindrome")
}