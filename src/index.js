'use strict';

const mqtt = require('mqtt');

const config = require('./config.js');
const getCompactInfo = require('./getCompactInfo');

connectAndSend();

async function connectAndSend() {
  // var client = mqtt.connect('mqtt://mqtt.beemos.org');
  var client = mqtt.connect(config.server);
  let index = 65536;
  client.on('connect', async function () {
    while (true) {
      let compactInfo = await getCompactInfo(index++);
      client.publish(config.topic, compactInfo);
      console.log(index, compactInfo);
    }
  });
}
