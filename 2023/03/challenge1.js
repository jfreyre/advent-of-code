import { data as puzzleInput } from "./data.js";

// TODO: could be simplified with a regex
const proximitySymbols = ["+", "*", "%", "#", "/", "@", "$", "-", "&", "="];

function checkForProximitySum(engine) {
  let sum = 0;

  function getGearValue(line, raw) {
    for (let deltaX = -1; deltaX <= 1; deltaX++) {
      for (let deltaY = -1; deltaY <= 1; deltaY++) {
        const newX = line + deltaX;
        const newY = raw + deltaY;

        if (deltaX === 0 && deltaY === 0) {
          continue; // we don't need to check current symbol
        }

        // Vérifier si le caractère est hors des limites de la matrice
        if (
          newX >= 0 &&
          newX < engine.length &&
          newY >= 0 &&
          newY < engine[line].length
        ) {
          const caractere = engine[newX][newY];

          // Vérifier si le caractère est un symbole à proximité
          if (caractere.match(/\d/)) {
            console.log("aaaa");
            return false;
          }
        }
      }
    }
    return true;
  }

  // Parcourir la matrice
  const rawLength = engine[0].length;
  for (let line = 0; line < engine.length; line++) {
    for (let raw = 0; raw < rawLength; raw++) {
      const current = engine[line][raw];
      if (current === "*") {
        const gearValue = getGearValue(line, raw);
        sum += gearValue;
      }
    }
  }

  return sum;
}

const sum = checkForProximitySum(puzzleInput);

console.log("total :", sum);
