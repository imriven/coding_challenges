// https://edabit.com/challenge/PTvYKkvf7oytHmJFm

function reverseCase1(str) {
  let reverse = "";
  for (let i of str) {
    if (i === i.toUpperCase()) {
      reverse += i.toLowerCase();
    } else if (i === i.toLowerCase()) {
      reverse += i.toUpperCase();
    }
  }
  return reverse;
}

function reverseCase3(str) {
  let reverse = "";
  for (let i of str) {
    i === i.toUpperCase()
      ? (reverse += i.toLowerCase())
      : (reverse += i.toUpperCase());
  }
  return reverse;
}

function reverseCase(str) {
  return str
    .split("")
    .map((i) => (i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()))
    .join("");
}

console.log(reverseCase("hAPPY bIRTHDAY"));

console.log(reverseCase("MANY THANKS"));

console.log(reverseCase("SpOnTaNeOuS"));
