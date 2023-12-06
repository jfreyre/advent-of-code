import { data as sample } from "./data.js";

const numericWordMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function replaceNumericWords(phrase) {
  const regex = new RegExp(Object.keys(numericWordMap).join("|"), "g");
  const result = phrase.replace(
    regex,
    (match) => numericWordMap[match.toLowerCase()],
  );
  return result;
}

function extractFirstAndLastNumbers(line) {
  let updatedLine = replaceNumericWords(line);

  const numbers = updatedLine.match(/\d/g);

  if (!numbers) {
    return [];
  }

  // Extract first and last
  const first = parseInt(numbers[0], 10);
  const last = parseInt(numbers[numbers.length - 1], 10);

  let r = first * 10 + last;

  console.log(line, updatedLine, first, last, r);

  return r;
}

let sum = 0;
sample.forEach((line) => (sum += extractFirstAndLastNumbers(line)));

console.log(sum);
