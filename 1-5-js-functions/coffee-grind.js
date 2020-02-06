// Functions
// Arrow Function =>
let coffeIsGrinding = false;
const pressGrindBeans = () => {
    if (coffeIsGrinding) {              // Asking is coffeIsGrinding TRUE?
        console.log("Stopping the grind");
        coffeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeIsGrinding = true;
    }
}
pressGrindBeans();