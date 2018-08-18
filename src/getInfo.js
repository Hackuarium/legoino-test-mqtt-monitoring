'use strict';

const delay = require('delay');
const si = require('systeminformation');

module.exports = async function getData() {
  let fsStats = await si.fsStats();
  let networkStats = await si.networkStats('eno1');
  await delay(5000);

  let result = {};
  let cpuTemperature = await si.cpuTemperature();
  result.cpuTemperature = cpuTemperature.main;

  let mem = await si.mem();
  result.memFree = Math.round((mem.free / mem.total) * 100);
  result.swapFree = Math.round((mem.swapfree / mem.swaptotal) * 100);

  fsStats = await si.fsStats();
  result.fsRead = Math.round(fsStats.rx_sec / 1024);
  result.fsWrite = Math.round(fsStats.wx_sec / 1024);

  networkStats = await si.networkStats('eno1');
  result.networkRead = Math.round(networkStats.rx_sec / 1024);
  result.networkWrite = Math.round(networkStats.tx_sec / 1024);

  let currentLoad = await si.currentLoad();
  result.load = Math.round(currentLoad.currentload);
  result.loadUser = Math.round(currentLoad.currentload_user);
  result.loadSystem = Math.round(currentLoad.currentload_system);
  result.loadNice = Math.round(currentLoad.currentload_nice);
  result.loadIdle = Math.round(currentLoad.currentload_idle);
  result.loadIrq = Math.round(currentLoad.currentload_irq);

  let fs = (await si.fsSize()).filter((entry) => entry.type.match('ext4|xfs'));
  result.fsMinUsed = Math.round(Math.min(...fs.map((entry) => entry.use)));
  result.fsMaxUsed = Math.round(Math.max(...fs.map((entry) => entry.use)));
  return result;
};
