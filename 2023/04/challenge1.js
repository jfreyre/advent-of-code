import { challenge1 as data } from "./data.js";

let regex = /(?<card>(\s?[1-9]\d?\s?){5}) \| (?<winner>(\s?[1-9]\d?\s?){8})/;

let sum = 0;
data.forEach((line) => {
  let m = regex.exec(line);

  const card = m.groups.card
    .trim()
    .split(" ")
    .map((v) => +v);
  const winningNumbers = m.groups.winner
    .trim()
    .split(" ")
    .filter((v) => !!v)
    .map((v) => +v);

  // Filtrer les chiffres qui sont présents dans les deux tableaux
  const chiffresCommuns = card.filter((nombre) =>
    winningNumbers.includes(nombre),
  );

  let score =
    chiffresCommuns.length == 0 ? 0 : Math.pow(2, chiffresCommuns.length - 1);

  sum += score;

  if (score > 0) {
    console.log(card, "--> ", winningNumbers, chiffresCommuns, score);
  }
});

console.log(sum);
