var hamlets = [
  "Laurence Olivier, 1948",
  "Grigori Kozintsev, 1964",
  "Tony Richardson, 1969",
  "Franco Zeffirelli, 1990",
  "Kenneth Branagh, 1996",
  "Michael Almereyda, 2000"
];

console.log("Scene I ---------------------------");
hamlets.forEach((h) => {
  let splitHamlet = h.split(", ");
  console.log(`O! the venerable ${splitHamlet[0]} starred as Hamlet in ${splitHamlet[1]}`);
});

console.log("Scene II ---------------------------");
let hamletArrays = hamlets.map((h) => {
  let splitHamlet = h.split(", ");
  splitHamlet[1] = parseInt(splitHamlet[1]);
  return splitHamlet;
});
console.log(hamletArrays);

console.log("Scene III ---------------------------");
let hamletObjects = hamlets.map((h) => {
  let splitHamlet = h.split(", ");
  return {
    name: splitHamlet[0],
    year: splitHamlet[1],
  };
});
console.log(hamletObjects);

console.log("Scene IV ---------------------------");
let swingingHamlets = hamletObjects.filter((h) => {
  return h.year >= 1960 && h.year < 1970;
});
console.log(swingingHamlets);

console.log("Scene V ---------------------------");
let futureHamlets = hamletObjects.filter((h) => h.year >= 2000);
console.log(futureHamlets);
