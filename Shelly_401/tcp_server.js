const logServer = require('./lib/file')(__dirname + '/log', process.stdout, function(){}).listen(4000, ()=>{
  console.log('server running on 4000');
});
