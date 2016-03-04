'use strict';
module.exports = function (){
  var shell = require('shelljs');
  var sys = {};
  var sysString = shell.exec('systeminfo', {silent: true});
  var tmp = sysString.output.replace(/]:/g,'===');
  var prev;
  tmp = tmp.split('\n');

  for (var i = 0; i < tmp.length; i++){
    if (tmp[i].indexOf('===') > -1) tmp[i] = [tmp[i].replace(/===/g,']: ')]
    else tmp[i] = tmp[i].split(': ');
    tmp[i][0] = tmp[i][0].trim();
    if (tmp[i].length === 2) tmp[i][1] = tmp[i][1].trim();
    if (tmp[i].length === 1) tmp[i] = ['', tmp[i][0]];

    if (tmp[i][0] !== '' ){
      sys[tmp[i][0]] = [tmp[i][1]];
      prev = tmp[i][0];
    } else if (tmp[i][1] === 'IP address(es)') {
      sys[tmp[i][1]] = [];
      prev = tmp[i][1];
    }else{
      if (sys[prev] !== undefined) sys[prev].push(tmp[i][1]);
    }
  }
  return sys;
};
