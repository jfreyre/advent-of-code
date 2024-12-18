import { puzzle as data } from "./data.js";

let level = 0;

for (var i = 0; i < data.length; i++) {
  level += data[i] === "(" ? 1 : -1;
  if (level == -1) {
    console.log(`hey! i've been in the basement at position `, i + 1);
    continue;
  }
}
