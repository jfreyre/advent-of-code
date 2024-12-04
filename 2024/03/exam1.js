import { puzzle as data } from "./data.js";

const multiplierRegex = /mul\((\d+),(\d+)\)/g;

function multiplier(data) {
  const multiples = [...data.matchAll(multiplierRegex)];

  let sum = 0;
  multiples.forEach((match) => {
    sum += +match[1] * +match[2];

    console.log(match[1], match[2], +match[1] * +match[2]);
  });
  console.log(sum);
}

multiplier(data);
