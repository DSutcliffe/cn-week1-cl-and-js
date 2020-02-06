// Challenge 3
let num = 15
switch(true){
    case num % 3 == 0 && num % 5 == 0:
        console.log("fizz buzz")
        break
    case num % 3 == 0:
        console.log("fizz")
        break
    case num % 5 == 0:
        console.log("buzz")
        break
    default:
        console.log("This nunber is not divisible by 3 or 5")
}