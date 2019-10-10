// Code your solutions in this file
const cards = ["Ada", "Brendan", "Ali"];
function writeCards(cards, birthday) {
  const newcards = [];
  for(let i = 0; i < cards.length; i++) {
    newcards.push(`Thank you, ${cards[i]}, for the wonderful ${birthday} gift!`);
  }
  return newcards;
}

writeCards(cards, birthday);
