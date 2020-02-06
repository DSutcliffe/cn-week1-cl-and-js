// Arrow Function => Passing parameters
let coffeIsGrinding = false;
const pressGrindBeans = (status) => {
    if (coffeIsGrinding) {              // Asking is coffeIsGrinding TRUE?
        console.log(`${status} the grind`);
        coffeIsGrinding = false;
    } else {
        console.log(`${status} the grind`);
        coffeIsGrinding = true;
    }
}
pressGrindBeans("Stopping");