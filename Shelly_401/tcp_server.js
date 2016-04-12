const net = require('net');
const fs = require('fs');
const log = require(__dirname + '/lib/file.js');
const logger = fs.createWriteStream(__dirname + '/logs/the_log.txt');

const server = net.createServer(function(socket){
  console.log('you connected');
  socket.on('data', function(data){
    logger.write(data);
    var date = new Date();
    var time = date.getTime();
    const logger2 = fs.createWriteStream(__dirname + '/logs/' + time +' .txt');
    logger2.write(data);
  });

});






server.listen(4000, ()=>{
  process.stdout.write('server up on 4000');

});
