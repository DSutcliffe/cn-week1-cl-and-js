// Challenge 5
let timeFull = "23:59"
let timeHH = timeFull.substring(0,2)
let timeMM = timeFull.substring(3)
let timeConcat = timeHH.concat('', timeMM)
let placeOfWork = "CodeNation"
let townOfHome = "Manchester"

console.log(timeHH)
console.log(timeMM)
console.log(timeConcat)

if(timeConcat >= "0800" && timeConcat < "0900"){
    console.log(`Im commuting to ${placeOfWork}`)
} else if(timeConcat >= "0900" && timeConcat < "1700"){
    console.log(`Im in work at ${placeOfWork}`)
} else if(timeConcat >= "1700" && timeConcat < "1800"){
    console.log(`Im commuting home in ${townOfHome}`)
} else {
    console.log(`Im at home in ${townOfHome}`)
}