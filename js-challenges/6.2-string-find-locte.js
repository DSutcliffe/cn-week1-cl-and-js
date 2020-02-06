// Take this string "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh".
// The word “hi” appears multiple times. Find the first and last occurrence of the word hi and log them to the console.

let randomString = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"
// let position = randomString.indexOf("hi")
let position = 0

while (position !== -1) {
    position = randomString.indexOf("hi", position + 1)
    console.log(position)
}


