const { nextISSTimesForMyLocation } = require('./iss');
// const fetchCordsByIPoordsByIP = methods.fetchCoordsByIP;
// const fetchMyIP = methods.fetchMyIP;
// fetchMyIP((error,ip) => {
//   if (error) {
//     console.log("Was not successful", error);
//     return;
//   }
//   console.log("IP address:", ip);
  
// });

// fetchCoordsByIP("hideIP", (error,coordinates) => {
//   if (error) {
//     console.log('Did not work', null);
//     return;
//   }
//   console.log('worked', coordinates);
  
// });
// const coords = { latitude: 'HideCoord', longitude: 'HideCoord' };
// fetchISSFlyOverTimes(coords, (error, passTimes) => {
//   if (error) {
//     console.log('did not work', error);
//     return;
//   }
//   console.log('worked', passTimes);
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
nextISSTimesForMyLocation((error,passTimes) => {
  if (error) {
    return console.log('It didnt work!', error);
  }
  printPassTimes(passTimes);
});

module.exports = printPassTimes;