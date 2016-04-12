const fs = require('fs');
const logger = fs.createWriteStream(__dirname + '/log2.txt');

exports.log = function(){
  process.stdin.pipe(logger);
};
