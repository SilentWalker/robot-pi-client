'use strict'
const exec = require('child_process').exec;

module.exports = {
  play : (url) => {
    let cmd = `mplayer ${url}`;
    exec(cmd, (err, stdOut) => {
      if(err){
        console.log(err);
      }else{
        console.log('start playing music');
      }
    })
  },
  stopPlay : () => {
    let cmd = 'killall -9 mplayer';
    exec(cmd, (err, stdOut) => {
      if(err){
        console.log(err);
      }else{
        console.log('stop playing music');
      }
    })
  }
}