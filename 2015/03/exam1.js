import { puzzle as data } from "./data.js";

function solve(data) {
  let x = 0;
  let y = 0;

  let houses = ["0,0"];

  var moves = data.split("");

  moves.forEach((direction) => {
    if (direction === "^") {
      y++;
    } else if (direction === ">") {
      x++;
    } else if (direction === "<") {
      x--;
    } else if (direction === "v") {
      y--;
    } else {
      console.error("impossible!", direction);
    }
    const key = `${x},${y}`;

    if (houses.indexOf(key) < 0) {
      houses.push(key);
    }
  });

  console.log(`Santa visited`, houses.length, "houses");
}

solve(data);
