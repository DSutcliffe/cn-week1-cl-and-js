let orderCount = 1;

const takeOrder = (topping, drink) => {
    console.log(`[${orderCount}] Pizza with ${topping} and a ${drink} on the side`);
    orderCount++;
}

takeOrder("pineapple", "coke");
takeOrder("pepperoni", "coke");
takeOrder("cheese", "coke");
takeOrder("sausage", "coke");
takeOrder("tikka", "coke");