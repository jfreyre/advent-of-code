import { puzzle as data } from "./data.js";

function solve(data) {
  let sum = 0;

  data.forEach((box) => {
    const [l, w, h] = box.split("x").map(Number);

    const slack = Math.min(l * w, w * h, h * l);
    const result = slack + (2 * l * w + 2 * w * h + 2 * h * l);

    // console.log(l, w, h, result);
    sum += result;
  });

  console.log(`please order `, sum, `paper`);
}

solve(data);
