let age = 18
let country = "uk"
if (age >= 18 && country.toUpperCase() == "UK") {
    console.log("Yes, I can serve you")
} else {
    console.log("Sorry, You are not old enough")
}

if (true || false) {
    console.log("true");
} else {
    console.log("false");   // warning code will never be executed
}