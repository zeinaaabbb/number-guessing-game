function startGame(){
    console.log("Welcome to the Number Guessing Game!" +
        "\n" +"I'm thinking of a number between 1 and 100." +
        "\n" +"You have 5 chances to guess the correct number."
    )

    console.log("\n" +"Please select the difficulty level:" +
        "\n" +"1. Easy (10 chances)" +
        "\n" +"2. Medium (5 chances)" +
        "\n" +"3. Hard (3 chances)"
    )

    selectDifficulty()
}
const difficulty = 1 || 2 || 3

function selectDifficulty(){
    
    console.log(`Enter your choice:`)

}

startGame()
