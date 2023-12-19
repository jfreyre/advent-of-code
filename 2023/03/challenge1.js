import { sample1 as data } from "./data.js";

function extraireChiffresNonProximite(matrice) {
  const resultats = [];

  // Fonction pour vérifier si un caractère est un chiffre et s'il n'est pas à proximité d'un autre symbole
  function estChiffreIsolé(i, j) {
    const symbolesProximités = ["*", "#", "+", "$"]; // Symboles à proximité

    // Vérifier les 8 directions (haut, bas, gauche, droite, et les diagonales)
    for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
        const ni = i + di;
        const nj = j + dj;

        // Vérifier si le caractère est hors des limites de la matrice
        if (
          ni >= 0 &&
          ni < matrice.length &&
          nj >= 0 &&
          nj < matrice[ni].length
        ) {
          const caractere = matrice[ni][nj];

          // Vérifier si le caractère est un symbole à proximité
          if (symbolesProximités.includes(caractere)) {
            return false;
          }
        }
      }
    }

    return !isNaN(parseInt(matrice[i][j], 10)); // Vérifier si le caractère est un chiffre
  }

  // Parcourir la matrice
  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[i].length; j++) {
      if (estChiffreIsolé(i, j)) {
        resultats.push(matrice[i][j]);
      }
    }
  }

  return resultats;
}

// Appeler la fonction avec votre matrice
const chiffresNonProximite = extraireChiffresNonProximite(data);
console.log("Chiffres non à proximité :", chiffresNonProximite);
