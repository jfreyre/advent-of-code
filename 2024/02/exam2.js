import { puzzle as data } from "./data.js";

function inspectReports(reports) {
  const safeReports = reports.filter((e) => isReportSafeWithFaultTolerance(e));
  console.log(safeReports.length);
}

function isReportSafeWithFaultTolerance(report) {
  
  if (isReportSafe(report)) {
    return true;
  }

  let i = 0;
  do {
    if (isReportSafe(report.toSpliced(i, 1))) {
      return true;
    }
    i++;
  } while (i < report.length);

  return false;
}

function isReportSafe(report) {
  // If both firsts are equal we can exit
  if (report[0] === report[1]) {
    return false;
  }

  // set direction
  let directionIsUp = report[0] < report[1];
  let isSafe = true;
  let index = 0;

  do {

    let delta = report[index] - report[index + 1];

    isSafe =
      Math.abs(delta) <= 3 &&                                           // Max 3 of delta
      delta !== 0 &&                                                    // Can't be equal
      ((delta < 0 && directionIsUp) || (delta > 0 && !directionIsUp));  // Ensure that if going up, delta is negative OR if going down, delta is positive

    index++;

  // We're safe && we haven't reach the end of the array
  } while (isSafe && index < report.length - 1);
  
  return isSafe;
}

inspectReports(data);
