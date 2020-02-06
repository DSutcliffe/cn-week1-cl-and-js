// Activity on switch case:
let pizzaTopping = "Pineapple"
switch(pizzaTopping){
    case "Ham":
        console.log("These are important ingredients for my pizza.")
        break;
    case "Sausage":
    case "Onion":
        console.log(`I don't mind having ${pizzaTopping} on my pizza.`)
        break;
    default:
        console.log(`${pizzaTopping} should not be on a pizza`)
}