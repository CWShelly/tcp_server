const net = require('net');
const expect = require('chai').expect;
const fs = require('fs');
var WriteStream = require('stream').Writable;
var theLogServer = require(__dirname + '/../lib/file');


describe('log server data', () => {
  beforeEach('set up the stream', () => {
    this.write = new WriteStream();
    this.write.data = '';
    this.write._write = (chunk) => {
      this.write.data += chunk.toString();
    };
  });
// });

it('should log', (done) => {
  var time;
  var logServer = theLogServer(__dirname + '/test_logs/', this.write, () => {
    expect(this.write.data).to.eql('hello!');
    var fileData = fs.readFileSync(__dirname + '/test_logs/' + time);
    expect(fileData.toString()).to.equal('hello!');
    logServer.close();
    done();
  });
  logServer.listen(5000);
  var client = net.connect({ port:5000 }, () => {
    client.write('hello!');
  });
  client.on('data', (data) => {
    time = data.toString();
  });
});
});
