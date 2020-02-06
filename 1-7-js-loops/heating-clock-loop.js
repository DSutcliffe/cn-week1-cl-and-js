let weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
let weekEnd = ["Saturday", "Sunday"]
let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let currentDay = "Tuesday"
let timeOfDay = 1000

console.log(currentDay)

// while (currentDay != "Monday" && timeOfDay >= 0700 && timeOfDay <= 1800){
//     console.log("Heating is OFF")
//     currentDay = weekDay[Math.floor(Math.random() * 5)]
//     console.log(currentDay)
// }

while (currentDay == "Monday" || currentDay == "Tuesday" || currentDay == "Wednesday" || currentDay == "Thursday" || currentDay == "Friday"){
    currentDay = dayOfWeek[Math.floor(Math.random() * 7)]
    console.log(currentDay)
}