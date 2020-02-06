// let userBalance = 25
// let userPin = 1234
// let accountNumber = 98765432

// const checkPin = (userInput) => {
//     console.log("Please enter your pin: ****")
//     if (userInput === userPin){
//         checkBalance()
//     } else {
//         console.log("Pin incorrect")
//     }
// }

// const checkBalance = () => {
//     console.log(`Your balance is £${userBalance}`)
// }

// checkPin(1234)

let userBalance = 25
let userPin = 1234
let accountNumber = 98765432
let userInput;
let userInputasInt = 0
let newPin1 = 0
let newPin2 = 0

// alert("Hello World")        // check linked to browser: shows pop-up

const checkPin = () => {
    // console.log("Please enter your pin: ****")
    userInput = prompt("Please enter your pin:")        // Replaced console.log
    console.log(userInput)

    if (userInput == "") {
        alert("PIN cannot be empty")
        checkPin()
    } else if (userInput == userPin) {
        optionsMenu()
    } else if (userInput == null) {
        alert("Goodbye...")
    }else {
        alert("Pin incorrect, Retry...")
        checkPin()
    }
}

const optionsMenu = () => {
    // userInput = prompt("01. Check Balance \n02. Withdraw Cash 2\n03. Deposit 3\n04. Cancel 4\n05. Option 5\n06. Option 6\n07. Option 7\n08. Option 8\n09. Option 9\n10. Option 10\n11. Option 11")
    userInput = prompt("[01] Check Balance \n[02] Withdraw Cash \n[03] Deposit \n[04] Change PIN \n[05] Cancel")
    userSelection(userInput)
}

const userSelection = (userInput) => {

    switch (userInput) {
        case "":
            alert("Cannot be empty")
            optionsMenu()
            break
        case "1":
            checkBalance()
            break
        case "2":
            withdrawCash()
            break
        case "3":
            deposit()
            break
        case "4":
            checkingPin()
            break
        case "5":
            console.log("Cancel")
            alert("Goodbye...")
            break
        // case "6":
        //     console.log("Option 6")
        //     break
        // case "7":
        //     console.log("Option 7")
        //     break
        // case "8":
        //     console.log("Option 8")
        //     break
        // case "9":
        //     console.log("Option 9")
        //     break
        // case "10":
        //     console.log("Option 10")
        //     break
        // case "11":
        //     console.log("Option 11")
        //     break
        default:
            alert("Goodbye...")
    }
}

const checkBalance = () => {
    alert(`Your balance is £${userBalance}`)
    optionsMenu()
}

const withdrawCash = () => {
    // alert("Withdraw Cash")
    userInput = prompt("How much would you like to withdraw? \n[01] £10 \n[02] £20 \n[03] £50 \n[04] £100 \n\n[05] Cancel")
    switch(userInput){
        case "1":
            userBalance = userBalance-10
            if (userBalance < 0) {
                userBalance = userBalance+10
                alert("Insufficient Funds!")
            } else {
                alert(`Your remaining balance is £${userBalance}`)
            } 
            break
        case "2":
            userBalance = userBalance-20
            if (userBalance < 0) {
                userBalance = userBalance+20
                alert("Insufficient Funds!")
            } else {
                alert(`Your remaining balance is £${userBalance}`)
            }
            break
        case "3":
            userBalance = userBalance-50
            if (userBalance < 0) {
                userBalance = userBalance+50
                alert("Insufficient Funds!")
            } else {
                alert(`Your remaining balance is £${userBalance}`)
            }
            break
        case "4":
            userBalance = userBalance-100
            if (userBalance < 0) {
                userBalance = userBalance+100
                alert("Insufficient Funds!")
            } else {
                alert(`Your remaining balance is £${userBalance}`)
            }
            break
        case "5":
            break
        default:
            alert("Invalid Entry!")
    }
    optionsMenu()
}

const deposit = () => {
    userInput = prompt("How much would you like to deposit?")
    userInputasInt = parseInt(userInput)
    console.log(userInputasInt)
    
    if (isNaN(userInputasInt)){
        alert("Nothing deposited or invalid entry!\nReturning to Main menu")
    } else if (userInputasInt <0){
        alert("Try Option 1 - Withdrawal")
    } else {
        console.log(userInput)
        console.log(userInputasInt)
        userInputasInt = parseInt(userInput)
        userBalance = userBalance + userInputasInt
        alert(`Your new balance is £${userBalance}`)
    }
    optionsMenu()
}

const checkingPin = () => {
    userInput = prompt("Please enter current PIN")
    if (userInput == userPin){
        changePIN()
    } else {
        alert("PIN Incorrect")
    }
    optionsMenu()
}

const changePIN = () => {
    userInput = prompt("Please enter new PIN")
    newPin1 = userInput
    userInput = prompt("Please re-enter new PIN")
    newPin2 = userInput
    if (newPin1 == newPin2) {
        userPin = newPin2
        alert("PIN has been changed.")
    } else {
        alert("PIN numbers did not match!")
    }
    // optionsMenu()
}

checkPin()