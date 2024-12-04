import { puzzle as data } from "./data.js";

const multiplierRegex = /mul\((\d+),(\d+)\)/g;

"asdsad".startsWith;

function multiplier(data) {
  // split lines by regex
  var exploded = data.split(/(?=do\(\)|don't\(\))/);

  // keep only the interesting lines
  var interestingOnly = exploded.filter(
    (e, i) => i == 0 || e.startsWith(`do(`)
  );

  const multiples = [...interestingOnly.join().matchAll(multiplierRegex)];

  let sum = 0;
  multiples.forEach((match) => {
    sum += +match[1] * +match[2];

    console.log(match[1], match[2], +match[1] * +match[2]);
  });
  console.log(sum);
}

multiplier(data);
