const functions = require("./iss_promised");
const printPassTimes = require('./index');
const nextISSTimesForMyLocation = functions.nextISSTimesForMyLocation;
// const fetchMyIP = functions.fetchMyIP;
// const fetchCoordsByIP = functions.fetchCoordsByIP;
// const fetchISSFlyOverTimes = functions.fetchISSFlyOverTimes;

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log('It didnt work', error.message);
  });