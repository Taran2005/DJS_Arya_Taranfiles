let deck = []
let total = 0
let wonBlackJack = false
let playerAlive = true
let messageElement = document.getElementById("message-el")
let totalElement = document.getElementById("sum-el")
let deckElement = document.getElementById("cards-el")

document.getElementById('newCard').style.visibility = 'hidden';

function rand() {
    return Math.floor(Math.random() * 13) + 1
}

function startGame() {
    deck = []
    deck = [rand(), rand()]
    total = deck[0] + deck[1]
    playerAlive = true
    wonBlackJack = false
    document.getElementById('newCard').style.visibility = 'visible';
    renderGame()
}

function renderGame() {
    deckElement.textContent = "Cards: " + deck.join(" ")
    sumEl.textContent = "Sum: " + total
    if (total <= 20) {
        messageElement.textContent = "draw a new card?"
    } else if (total === 21) {
        messageElement.textContent = "Blackjack!"
        wonBlackJack = true
    } else {
        messageElement.textContent = "You're out!"
        playerAlive = false
        document.getElementById('newCard').style.visibility = 'hidden';
    }
}

function newCard() {
    if (playerAlive && !wonBlackJack) {
        let card = rand()
        total += card
        deck.push(card)
        renderGame()
    }
}