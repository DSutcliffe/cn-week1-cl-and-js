// let day = "Monday"
// let alarm = 0700

const myAlarm = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
}

const checkDay = (day, alarm) => {
    if (day.toLocaleLowerCase() == "saturday" || day.toLocaleLowerCase() == "sunday"){
        console.log(myAlarm.weekendAlarm)
    } else if (day.toLocaleLowerCase() == "monday" || day.toLocaleLowerCase() == "tuesday" || day.toLocaleLowerCase() == "wednesday" || day.toLocaleLowerCase() == "thursday" || day.toLocaleLowerCase() == "friday"){
        checkCurrentTime(alarm);
    } else {
        console.log("Please enter a valid day")
    }
}

const checkCurrentTime = (alarm) => {
    if (alarm >= 0700){
        console.log(myAlarm.weekdayAlarm)
    } else {
        console.log(myAlarm.weekendAlarm)
    }
}

checkDay("Monday", 0700)
checkDay("Tuesday", 0655)
checkDay("Wednesday", 0800)
checkDay("Thursday", 0730)
checkDay("Friday", 0530)
checkDay("Saturday", 1200)
checkDay("Sunday", 1100)
checkDay("Cheese", 0800)