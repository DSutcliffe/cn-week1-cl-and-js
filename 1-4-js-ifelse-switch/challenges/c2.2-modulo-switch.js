// Challenge 2.2
let num = 4
switch(true){
    case num % 3 == 0:
    case num % 5 == 0:
        console.log("This number is divisible by 3 or 5")
        break
    default:
        console.log("This nunber is not divisible by 3 or 5")
}