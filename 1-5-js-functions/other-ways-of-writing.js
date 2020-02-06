// Different Functions that means the same
// function factorial (n) {                 // Same as line below ie. const fac......
const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}

console.log(factorial(33));