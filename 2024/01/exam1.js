import { sample as data } from "./data.js";

function sortData(data) {
  var left = data.map((d) => d[0]).sort();

  var right = data.map((d) => d[1]).sort();

  let sum = 0;
  left.forEach((element, index) => {
    sum += Math.abs(right[index] - element);
  });
  console.log(sum);
}

sortData(data);
