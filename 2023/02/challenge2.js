import { data as puzzleInput } from "./data.js";

function possibleGames(games, targetCounts) {
  function isValidGame(game) {
    const counts = { red: 0, green: 0, blue: 0 };

    const subsets = game.trim().split(";");

    subsets.forEach((subset) => {
      const cubes = subset.trim().split(", ");
      cubes.forEach((cube) => {
        const [count, color] = cube.split(" ");
        counts[color] = Math.max(parseInt(count), counts[color]);
      });
    });

    return counts.red * counts.green * counts.blue;
  }

  let totalPower = 0;

  for (let i = 0; i < games.length; i++) {
    const gameInfo = games[i].match(/Game (\d+): (\w.*)/);
    const gameID = gameInfo ? parseInt(gameInfo[1]) : 0;

    const power = isValidGame(gameInfo[2]);

    totalPower += power;
  }

  return totalPower;
}

const targetCounts = { red: 12, green: 13, blue: 14 };
const result = possibleGames(puzzleInput, targetCounts);

console.log("sum of valid games", result);
