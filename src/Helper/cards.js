export function generateDeck() {
  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const suits = ["♦", "♣", "♥", "♠"];

  const deck = [];
  cards.forEach((card) => {
    suits.forEach((suit) => {
      deck.push({ number: card, suit: suit, id: Math.random() });
    });
  });
  return deck;
}

export function getRandomCard(deck) {
  //52[{number: 8, suit: '♠'},{number: 9, suit: '♠'},...]
  const updatedDeck = deck; //copy
  const randomIndex = Math.floor(Math.random() * updatedDeck.length); //1
  const randomCard = updatedDeck[randomIndex]; //{number: 9, suit: '♠'}
  updatedDeck.splice(randomIndex, 1); //51 [{number: 8, suit: '♠'},...]
  return { randomCard, updatedDeck }; //{number: 9, suit: '♠'}, [51]
}
