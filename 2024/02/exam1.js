import { puzzle as data } from "./data.js";

function inspectReports(reports) {
  const safeReports = reports.filter((e) => isSafe(e));
  console.log(safeReports.length);
}

function isSafe(report) {
  let directionIsUp = report[0] < report[1];

  if (report[0] === report[1]) {
    return false;
  }

  let isSafe = true;
  let index = 0;
  do {
    let delta = report[index] - report[index + 1];

    isSafe =
      Math.abs(delta) <= 3 &&
      delta !== 0 &&
      ((delta < 0 && directionIsUp) || (delta > 0 && !directionIsUp));

    index++;
  } while (isSafe && index < report.length - 1);

  return isSafe;
}

inspectReports(data);
