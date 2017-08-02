'use strict'
const mqtt = require('mqtt');
const sc = require('./config.js');
const services = require('./services/index.js')
let client = mqtt.connect(sc.host, {
  keepalive : 30,
  clientId : sc.name,
  username : sc.username,
  password : sc.password,
  port : sc.port,
  connectTimeout : 3000,
})

client.on('connect', () => {
  client.subscribe(sc.name, {qos : 2});
  services.motivation.freq(60);
})

client.on('message', (topic, message) => {
  let msgArr = message.toString().split('|');
  switch(msgArr[0]){
    case 'move' : 
      if(msgArr.length === 4){
        services.motivation.move(msgArr[1], msgArr[2], msgArr[3]);
      }
    break;
    case 'music' : 
      if(msgArr.length === 2){
        services.music.play(msgArr[2]);
      }
    break;
    case 'stopmusic' : 
      services.music.stopPlay();
    break;
  }
})