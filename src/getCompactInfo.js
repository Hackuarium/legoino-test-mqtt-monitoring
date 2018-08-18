'use strict';

const createCompactLog = require('legoino-util').createCompactLog;

const getInfo = require('./getInfo');

module.exports = async function getCompactInfo(index) {
  let info = await getInfo();
  let options = {
    id: index,
    epoch: Math.round(Date.now() / 1000),
    parameters: {
      A: info.cpuTemperature,
      B: info.memFree,
      C: info.swapFree,
      D: info.fsRead,
      E: info.fsWrite,
      F: info.networkRead,
      G: info.networkWrite,
      H: info.load,
      I: info.loadUser,
      J: info.loadSystem,
      K: info.loadNice,
      L: info.loadIdle,
      M: info.loadIrq,
      N: info.fsMinUsed,
      O: info.fsMaxUsed
    },
    eventId: 0,
    eventValue: 0,
    deviceId: 1234
  };
  let compactLog = createCompactLog(options, 16);
  return compactLog;
};
