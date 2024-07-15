let deck = []
let total = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let totalEl = document.getElementById("total-el")
let deckEl = document.getElementById("deck-el")

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    deck = [firstCard, secondCard]
    total = firstCard + secondCard
    renderGame()
}

function renderGame() {
    deckEl.textContent = "Deck: "
    for (let i = 0; i < deck.length; i++) {
        deckEl.textContent += deck[i] + " "
    }
    
    totalEl.textContent = "Total: " + total
    if (total <= 20) {
        message = "Do you want to draw a new card?"
    } else if (total === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = getRandomCard()
    total += card
    deck.push(card)
    renderGame()
}
