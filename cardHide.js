//edabit.com/challenge/rtpvAqFT3koqMoFCJ

function cardHide(card) {
  return "*".repeat(card.length - 4) + card.slice(-4);
}

// return `${"*".repeat(card.length - 4)}${card.slice(-4)}`;

console.log(cardHide("1234123456785678"));
