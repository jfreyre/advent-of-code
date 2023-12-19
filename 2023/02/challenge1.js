function possibleGames(input, targetCounts) {
  const games = input.split("\n");

  function isValidGame(game, targetCounts) {
    const counts = { red: 0, green: 0, blue: 0 };

    const subsets = game.trim().split(";");

    subsets.pop(); // Remove the last element which is an empty string

    subsets.forEach((subset) => {
      console.log(subset);

      const cubes = subset.trim().split(", ");
      console.log(cubes);

      cubes.forEach((cube) => {
        const [count, color] = cube.split(" ");
        counts[color] += parseInt(count);
      });
    });

    console.log(".-.-..");

    return (
      counts.red === targetCounts[0] &&
      counts.green === targetCounts[1] &&
      counts.blue === targetCounts[2]
    );
  }

  let sumOfIDs = 0;

  for (let i = 0; i < games.length; i++) {
    const gameInfo = games[i].match(/Game (\d+): (\w.*)/);
    const gameID = gameInfo ? parseInt(gameInfo[1]) : 0;

    if (isValidGame(gameInfo[2], targetCounts)) {
      sumOfIDs += gameID;
    }
  }

  return sumOfIDs;
}

const puzzleInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const targetCounts = [12 /* red */, 13 /* green */, 14 /* blue */];
const result = possibleGames(puzzleInput, targetCounts);

console.log(result, "a"); // Output: 8
