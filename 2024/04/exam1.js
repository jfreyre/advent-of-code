import { puzzle as data } from "./data.js";

const lookupWord = "XMAS";
const directions = [
  { row: 0, col: 1 }, // ➡
  { row: 1, col: 0 }, // ⬇
  { row: 1, col: 1 }, // ↗
  { row: 1, col: -1 }, // ↘
  { row: 0, col: -1 }, // ⬅
  { row: -1, col: 0 }, // ⬆
  { row: -1, col: -1 }, // ↙
  { row: -1, col: 1 }, // ↖
];
const results = [];
const xMax = data[0].length;
const yMax = data.length;

function wordLookup(data) {
  for (let x = 0; x < xMax; x++) {
    for (let y = 0; y < yMax; y++) {
      searchWordFrom(x, y, 0);
    }
  }
  console.log(results, results.length);
}

function isWordAtPosition(row, col, direction) {
  for (let i = 0; i < lookupWord.length; i++) {
    const newRow = row + direction.row * i;
    const newCol = col + direction.col * i;
    if (
      newRow < 0 ||
      newRow >= xMax ||
      newCol < 0 ||
      newCol >= yMax ||
      data[newRow][newCol] !== lookupWord[i]
    ) {
      return false;
    }
  }
  return true;
}

function searchWordFrom(x, y, index) {
  // Nothing special, get out of there
  if (data[x][y] !== lookupWord[index]) {
    return false;
  }

  for (const direction of directions) {
    if (isWordAtPosition(x, y, direction)) {
      results.push({ start: [x, y], direction });
    }
  }
}

wordLookup(data);
