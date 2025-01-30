import { puzzle as data } from "./data.js";

function solve(data) {
  let coordinates = {
    0: { x: 0, y: 0 },
    1: { x: 0, y: 0 },
  };

  let visitedHouses = ["0,0"];

  var moves = data.split("");

  moves.forEach((direction, index) => {
    const delivery = index % 2; // 0 = santa / 1 = robot

    if (direction === "^") {
      coordinates[delivery].y += 1;
    } else if (direction === ">") {
      coordinates[delivery].x += 1;
    } else if (direction === "<") {
      coordinates[delivery].x -= 1;
    } else if (direction === "v") {
      coordinates[delivery].y -= 1;
    } else {
      console.error("impossible!", direction);
    }

    const key = `${coordinates[delivery].x},${coordinates[delivery].y}`;

    if (visitedHouses.indexOf(key) < 0) {
      visitedHouses.push(key);
    }
  });

  console.log(`Santa and robot visited`, visitedHouses.length, "houses");
}

solve(data);
