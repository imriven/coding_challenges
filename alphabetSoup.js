// https://edabit.com/challenge/bHDbMWpdeNaw23jqT

const AlphabetSoup = (str) => {
  let arr = str.split("");
  arr.sort();
  return arr.join("");
};

console.log(AlphabetSoup("hello"));

console.log(AlphabetSoup("edabit"));

console.log(AlphabetSoup("hacker"));

console.log(AlphabetSoup("geek"));

console.log(AlphabetSoup("javascript"));