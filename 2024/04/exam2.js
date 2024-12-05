import { sample as data } from "./data.js";

const lookupWord = "MAS";

const xMax = data[0].length;
const yMax = data.length;

function wordLookup(data) {
  let sum = 0;
  for (let x = 1; x < xMax - 1; x++) {
    for (let y = 1; y < yMax - 1; y++) {
      
      if (data[x][y] === 'A') {

        // Definitely not the best way to handle it and probably should be refactored
        let options = (data[x-1][y-1] === 'M' && data[x+1][y+1] === 'S' && data[x-1][y+1] === 'M' && data[x+1][y-1] === 'S') ||
                      (data[x-1][y-1] === 'M' && data[x+1][y+1] === 'S' && data[x-1][y+1] === 'S' && data[x+1][y-1] === 'M') ||
                      (data[x-1][y-1] === 'S' && data[x+1][y+1] === 'M' && data[x-1][y+1] === 'S' && data[x+1][y-1] === 'M') ||
                      (data[x-1][y-1] === 'S' && data[x+1][y+1] === 'M' && data[x-1][y+1] === 'M' && data[x+1][y-1] === 'S');

        if (options) {
          sum++;
          console.log("Found an xmas on", x, y)
        }

      }
    }
  }
  console.log(sum);
}

wordLookup(data);
