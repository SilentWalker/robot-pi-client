'use strict'
const exec = require('child_process').exec;
module.exports = {
  move : (channel, low, high) => {
    if(isNaN(Number(channel)) || isNaN(Number(low)) || isNaN(Number(high))){
      console.log('inavailable argv, cancle move')
    }else{
      exec(`python python/Servo_motivate.py ${channel} ${low} ${high}`, (err, stdOut) => {
        if(err) {
          console.log(err);
        }else{
          console.log(stdOut);
        }
      })
    }
  },

  freq : (freq) => {
    if(freq && isNaN(Number(freq))){
      console.log('inavailable argv, cancle set freq');
    }else{
      exec(`python python/Servo_Freq.py ${freq ? freq : ''}`, (err, stdOut) => {
        if(err) {
          console.log(err);
        }else{
          console.log(stdOut);
        }
      })
    }
  }
}