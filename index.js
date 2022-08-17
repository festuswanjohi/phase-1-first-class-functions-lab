// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2);
};
const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(num) {
  if (num === 2) {
    return fareDoubler;
  } else if (num === 3) {
    return fareTripler;
  } else if (num === 5) {
    return fareQuintupler;
  }
}
function fareDoubler(fare) {
  return fare * 2;
}
function fareTripler(fare) {
  return fare * 3;
}
function fareQuintupler(fare) {
  return fare * 5;
}
function selectDifferentDrivers(arr, driver) {
  if (driver === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arr);
  } else if (driver === returnLastTwoDrivers) {
    return returnLastTwoDrivers(arr);
  }
}
