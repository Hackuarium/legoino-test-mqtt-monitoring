'use strict';

const createCompactLog = require('legoino-util').createCompactLog;

module.exports = async function getCompactBeemos(index) {
  let options = {
    id: index,
    epoch: Math.round(Date.now() / 1000),
    parameters: {
      A: 2000 + Math.round(Math.random() * 600),
      B: 4000 + Math.round(Math.random() * 1000),
      C: 1000 + Math.round(Math.random() * 1000),
      D: 1000 + Math.round(Math.random() * 30),
      E: 2000 + Math.round(Math.random() * 1000),
      F: 4000 + Math.round(Math.random() * 600),
      G: 2000 + Math.round(Math.random() * 600),
      H: 5000 + Math.round(Math.random() * 500),
      I: 3700 + Math.round(Math.random() * 600),
      J: 100 + Math.round(Math.random() * 50),
      K: 100 + Math.round(Math.random() * 50),
      L: 100 + Math.round(Math.random() * 50),
      M: 100 + Math.round(Math.random() * 50),
      N: 100 + Math.round(Math.random() * 50),
      O: 100 + Math.round(Math.random() * 50),
      P: 100 + Math.round(Math.random() * 50),
      Q: 100 + Math.round(Math.random() * 50),
      R: 100 + Math.round(Math.random() * 50),
      S: 100 + Math.round(Math.random() * 50),
      T: 100 + Math.round(Math.random() * 50),
      U: 100 + Math.round(Math.random() * 50),
      V: 100 + Math.round(Math.random() * 50),
      W: 100 + Math.round(Math.random() * 50),
      X: 100 + Math.round(Math.random() * 50),
      Y: 100 + Math.round(Math.random() * 50),
      Z: 100 + Math.round(Math.random() * 50)
    },
    eventId: 0,
    eventValue: 0,
    deviceId: 1234
  };
  let compactLog = createCompactLog(options, 16);
  return compactLog;
};
