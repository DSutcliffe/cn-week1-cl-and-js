// Arrow Function => Passing parameters
const cinemaTicketPriceCheck = (age) => {
    console.log(`Your age is: ${age}`)
    if (age < 18) {
        console.log("Your price is: £7.50");
    } else {
        console.log("Full price for youuuuu.");
    }
}
cinemaTicketPriceCheck(17);
cinemaTicketPriceCheck(60);
cinemaTicketPriceCheck(40);
cinemaTicketPriceCheck(11);