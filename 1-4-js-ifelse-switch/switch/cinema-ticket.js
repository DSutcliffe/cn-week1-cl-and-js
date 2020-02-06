// Ticket Machine (SWITCH)
let age = 65;
switch(true){
    case age < 18:
        console.log("£8.00");
        break;
    case age >= 18 && age < 60:
        console.log("£10.95");
        break;
    default:
        console.log("£7.50");
}