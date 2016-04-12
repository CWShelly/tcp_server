const fs = require('fs');
const logger = fs.createWriteStream(__dirname + '/log2.txt');
// logger.write("this ");
// logger.end('x');


exports.log = function(){
// process.stdin.pipe(logger);

  process.stdin.pipe(logger);

// process.stdin.pipe(process.stdout);

};
