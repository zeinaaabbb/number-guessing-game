import readline from 'readline-sync'

function startGame(){
    console.log("Welcome to the Number Guessing Game!" +
        "\n \n" +"I'm thinking of a number between 1 and 100." +
        "\n" +"You have 5 chances to guess the correct number."
    )
}

startGame()

function selectRandomInt(){
    let max = 100
    return Math.floor(Math.random() * max) + 1
}

function selectDifficulty(){

    while (true) {
        const questionSelectDifficulty = Number(readline.question("\n" +"Please select the difficulty level:" +
        "\n" +"1. Easy (10 chances)" +
        "\n" +"2. Medium (5 chances)" +
        "\n" + "3. Hard (3 chances)" + "\n" + "\n" + ">>>" + "Enter your choice: "))

        if ((isNaN(questionSelectDifficulty)) || (questionSelectDifficulty > 3) || (questionSelectDifficulty < 1)) {
            console.log("\n \n" + "🚨 The diffulty level should be a number. Select a number between 1 and 3")
            continue;
        }

        if (questionSelectDifficulty === 1) {
            const difficultyOption = "easy"
            console.log("\n" + `Great! You have selected the ${difficultyOption} difficulty level.` + "\n" + "Let's start the game!" + "\n")
            //return 10 number of attempts
            return 10
        } else if (questionSelectDifficulty === 2) {
            const difficultyOption = "medium"
            console.log("\n" + `Great! You have selected the ${difficultyOption} difficulty level.` + "\n" + "Let's start the game!" + "\n")
            //return 5 number of attempts
            return 5
        } else if (questionSelectDifficulty === 3) {
            const difficultyOption = "hard"
            console.log("\n" + `Great! You have selected the ${difficultyOption} difficulty level.` + "\n" + "Let's start the game!" + "\n")
            //return 3 number of attempts
            return 3
        }
    }
}


function startGuessing(){

    const randomNumber = selectRandomInt()
    const numberOfAttempts = selectDifficulty()

    let guessNumber;
    let attempts = 0;

    while ((randomNumber !== guessNumber) && (attempts < numberOfAttempts)) {
        guessNumber = Number(readline.question("Enter your guess: "))

        if (isNaN(guessNumber)) {
            console.log("You need to enter a number")
            continue
        }

        if ((guessNumber > 100) || (guessNumber < 1)) {
            console.log("Try again! The number is between 0 and 100")
            continue
        }

        attempts++;

        if (randomNumber > guessNumber) {
            console.log("Incorrect!" + "\n" + `The number is greater than ${guessNumber}` + "\n")
        } else if (randomNumber < guessNumber) {
            console.log("Incorrect!" + "\n" + `The number is less than ${guessNumber}` + "\n")
        } else if (randomNumber === guessNumber) {
            console.log(`Congratulations! You guessed the correct number in ${attempts} attempts` + "\n");
            break;
        }
    }

        if (randomNumber !== guessNumber) {
            console.log(`Game over! Attempted ${attempts} times. The number to guess was ${randomNumber}` + "\n") 
        }
}

startGuessing()