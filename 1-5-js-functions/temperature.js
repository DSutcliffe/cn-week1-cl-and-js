// Multiple Functions
const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};

console.log("The temperature is " + getFahrenheit(15) + "°F");
console.log("The temperature is " + getFahrenheit(1) + "°F");
console.log("The temperature is " + multiplyByNineFifths(6) + "°F");