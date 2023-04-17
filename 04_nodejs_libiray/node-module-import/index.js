import path from 'path';

function log(){
  console.log(path.resolve(__filename,'index.js'));
}

exports.log=log;