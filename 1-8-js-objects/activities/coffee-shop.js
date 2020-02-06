let coffeeShop = {
    name: "Dan Koffee (Like the drink but spelt differntly)",
    food: [
      "food1", "1.00",
      "food2", "2.00",
      "food3", "3.00"
    ],
    drink: [
      "drink1", "1.00",
      "drink2", "2.00",
      "drink3", "3.00"
    ],
    myFuction1(custOrder){
      let sumTotal = 0
      console.log(coffeeShop.name)
      for (i=0; i < custOrder.length; i++) {
        console.log(`${custOrder[i]}\t\t£${custOrder[i+1]}`)
        sumTotal += parseFloat(custOrder[i+1])
        i = i+1
      }
      console.log(`TOTAL:\t\t£${sumTotal}`)
    }
  }
  console.log(coffeeShop.myFuction1([
    // itemDescription[EVEN], itemPrice[ODD], 
    coffeeShop.drink[0], coffeeShop.drink[1], 
    coffeeShop.drink[0], coffeeShop.drink[1], 
    coffeeShop.drink[2], coffeeShop.drink[3], 
    coffeeShop.food[2], coffeeShop.food[3],
    coffeeShop.food[4], coffeeShop.food[5]
  ]))