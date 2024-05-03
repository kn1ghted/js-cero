// Exercise: Card Game Implementation
// Declares a full deck using strings
const deck = [
    '♠2','♠3','♠4','♠5','♠6','♠7','♠8','♠9','♠10','♠J','♠Q','♠K','♠A',
    '♥2','♥3','♥4','♥5','♥6','♥7','♥8','♥9','♥10','♥J','♥Q','♥K','♥A',
    '♦2','♦3','♦4','♦5','♦6','♦7','♦8','♦9','♦10','♦J','♦Q','♦K','♦A',
    '♣2','♣3','♣4','♣5','♣6','♣7','♣8','♣9','♣10','♣J','♣Q','♣K','♣A',
    'JOKER'
]

// Fisher-Yates Algorithm
function shuffleDeck () {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]
  }
}

function dealCards (numCard) {
  const dealCards = deck.splice(0, numCard)
  return dealCards
}

shuffleDeck()
console.log('This is the shuffled deck:', deck)

// Deals a fixed number of card to players
const player1Hand = dealCards(5)
const player2Hand = dealCards(5)
const player3Hand = dealCards(5)

console.log('Player 1 Hand: ', player1Hand)
console.log('Player 2 Hand: ', player2Hand)
console.log('Player 3 Hand: ', player3Hand)