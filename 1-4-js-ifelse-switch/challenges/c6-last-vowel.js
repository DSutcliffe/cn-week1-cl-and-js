// Challenge 6
let string1 = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let string2 = string1.split('')
let vowelTracker = ""

// console.log(string2)
// console.log(string2[1])
// console.log(string2.length)
for( i = 0; i < string2.length; i++){
  if (string2[i].toUpperCase() == "A" || string2[i].toUpperCase() == "E" || string2[i].toUpperCase() == "I" || string2[i].toUpperCase() == "O" || string2[i].toUpperCase() == "U"){
    vowelTracker = string2[i]
  }
//   switch(true){
//     case string2[i].toUpperCase() == "A":
//     case string2[i].toUpperCase() == "E":
//     case string2[i].toUpperCase() == "I":
//     case string2[i].toUpperCase() == "O":
//     case string2[i].toUpperCase() == "U":
//       vowelTracker = string2[i]
//       break
//     default:
//       // console.log("")
//   }
  
}
console.log(`Last vowel in string is ${vowelTracker}`)