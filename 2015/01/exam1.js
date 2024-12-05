import { puzzle as data } from "./data.js";

let level = 0;

console.log(data);
for (var i = 0; i < data.length; i++) {
  level += data[i] === "(" ? 1 : -1;
}

console.log(level);
