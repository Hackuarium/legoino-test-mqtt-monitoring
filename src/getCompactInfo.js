"use strict";

const createCompactLog = require("legoino-util").createCompactLog;

const getInfo = require("./getInfo");

module.exports = async function getCompactInfo(index) {
  let info = await getInfo();
  let options = {
    id: index,
    epoch: Math.round(Date.now() / 1000),
    parameters: {
      A: info.cpuTemperature || 0,
      B: info.memFree || 0,
      C: info.swapFree || 0,
      D: info.fsRead || 0,
      E: info.fsWrite || 0,
      F: info.networkRead || 0,
      G: info.networkWrite || 0,
      H: info.load || 0,
      I: info.loadUser || 0,
      J: info.loadSystem || 0,
      K: info.loadNice || 0,
      L: info.loadIdle || 0,
      M: info.loadIrq || 0,
      N: info.fsMinUsed || 0,
      O: info.fsMaxUsed || 0,
    },
    eventId: 0,
    eventValue: 0,
    deviceId: 17217,
  };
  let compactLog = createCompactLog(options, 16);
  return compactLog;
};
