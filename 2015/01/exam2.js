import { sample as data } from "./data.js";

function sortData(data) {
  var left = data.map((d) => d[0]);
  var right = data.map((d) => d[1]);

  let sum = 0;
  left.forEach((element, index) => {
    var t = right.filter((v, i) => v === element).length;
    sum += element * t;
  });
  console.log(sum);
}

sortData(data);
