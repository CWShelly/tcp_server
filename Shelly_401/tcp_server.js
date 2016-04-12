const net = require('net');
const fs = require('fs');
const log = require(__dirname + '/lib/file.js');
const logger = fs.createWriteStream(__dirname + '/the_log2.txt');





const server = net.createServer(function(socket){
  console.log('you connected');
  socket.on('data', function(data){
    // process.stdin.pipe(logger);
    logger.write(data);
  });

});


server.listen(4000, ()=>{
  process.stdout.write('server up on 4000');

});
