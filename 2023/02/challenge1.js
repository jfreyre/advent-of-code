import { data as puzzleInput } from "./data.js";

function possibleGames(games, targetCounts) {
  function isValidGame(game, targetCounts) {
    const counts = { red: 0, green: 0, blue: 0 };

    const subsets = game.trim().split(";");

    subsets.forEach((subset) => {
      const cubes = subset.trim().split(", ");
      cubes.forEach((cube) => {
        const [count, color] = cube.split(" ");
        counts[color] = Math.max(parseInt(count), counts[color]);
      });
    });

    return (
      counts.red <= targetCounts.red &&
      counts.green <= targetCounts.green &&
      counts.blue <= targetCounts.blue
    );
  }

  let sumOfIDs = 0;

  for (let i = 0; i < games.length; i++) {
    const gameInfo = games[i].match(/Game (\d+): (\w.*)/);
    const gameID = gameInfo ? parseInt(gameInfo[1]) : 0;

    const isValid = isValidGame(gameInfo[2], targetCounts);

    if (isValid) {
      sumOfIDs += gameID;
    } else {
      console.log(gameID, gameInfo[2]);
    }
  }

  return sumOfIDs;
}

const targetCounts = { red: 12, green: 13, blue: 14 };
const result = possibleGames(puzzleInput, targetCounts);

console.log("sum of valid games", result);
