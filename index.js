let player = {
    name: "alius",
    chips: 200,
    sayHello: function(){
        console.log("Hej!")
    }
}

let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = ""

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")
function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}
//startGame = () => renderGame()

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
} 

function newCard(){
    if (hasBlackJack === false && isAlive == true){
    let card = getRandomCard() 
    sum += card 
    cards.push(card)
    renderGame()
    }
}










/*

// Objects !
let castle = {
    expensive: true,
    title: "Learn css",
    price: 16,
    tags: ["img/castle.png", "img/castle2.png"]
}


console.log(course.expensive)


//for loop practice
let messages = ["alius", "pipis", "dikis", "smikis", "rikis"]

for(let i = 0; messages.length>i; i++){
    console.log(messages[i])
}
let ats = []
let cardds = [7, 3, 9]
for(let i = 0; cardds.length > i; i++){
    console.log(cardds[i])
    ats.push(cardds[i])
}

let sentence = ["hello", "my", "name", "is", "alius"]
for(let i = 0; sentence.length > i; i++){
    messageEl.textContent += sentence[i] + " "
}
*/
/*

let player1 = 102
let player2 = 107
function total() {
    
    return player1 + player2
}
let fastestRace = total()
console.log(total())


let flooredNumber = Math.floor(3.45632) // Math floor removes decimals

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1 //(dice function 0-5.999) Generates number between 0.0 - 0.999.
    return randomNumber
}
console.log(rollDice())
*/
/*
let hasSolved = false
let hasHints = false
if (hasSolved === false && hasHints === false ){  /// and statement
     showSolution()
}
function showSolution() {
    console.log("showing the solution")
}

let likesDocumentaries = true
let likesStartups = false

if(likesDocumentaries === true || likesStartups === true){ // or statment
    recomendMovie()
}
function recomendMovie() {
    console.log("check out this film ")
}
 
// Create a person object that contains three keys: name, age, and county.
let person = {
    name: "Alius",
    age: 31,
    country: "Sweden"
}

 logData = () => `${person.name} is ${person.age} and lives in ${person.country}`

console.log(logData())


let age = 18  

if (age < 6){
    console.log("free")
}
else if (age <= 17 && age >= 6){
    console.log("child discount")
} else if (age >= 18 && age <= 26){
    console.log("student discount")
} else if (age >= 27 && age < 66){
    console.log("full price")
} else{
    console.log("senior discount")
}

let day = 13
let weekday = "Friday"

if (day === 13 && weekday === "Friday"){
    console.log("Spooky!")
}
let hands = ["rock", "paper", "scissor"]

function random(){
    let index = Math.floor(Math.random() * hands.length)
    return hands[index]
}
console.log(random())

let fruit = ["apple", "orange", "apple", "apple", "orange"];
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function returnFruit(){
    for(let i = 0; fruit.length > i; i++){
        if (fruit[i] === "apple"){
            appleShelf.textContent += "apple "
        }
        else {
            orangeShelf.textContent += "orange "
        }
    }
}
returnFruit()
*/
