// https://edabit.com/challenge/c23dFfNiKbnguSQtq

function findNemo(sentence) {
  let found = false;
  let array = sentence.split(" ");
  for (let [i, v] of array.entries()) {
    if (v === "Nemo") {
      found = true;
      console.log(`I found Nemo at ${i + 1}!`);
    }
  }
  if (found === false) {
    console.log("I couldn't find Nemo!");
  }
}

findNemo("I am finding Nemo !");
findNemo("Nemo is me");
findNemo("I Nemo am");
findNemo("Hello World");
