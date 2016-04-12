const fs = require('fs');
const expect = require('chai').expect;

describe('gulpfile exists', ()=>{
  it('should have a gulpfile',()=>{
    expect(fs.exists('gulpfile.js',(exists)=>{
      console.log(exists ? 'it is there' : 'not here');
    }));
  });
});


describe('a new file should be there',()=>{
  it('should have a new file',()=>{
    expect(fs.readdirSync(__dirname + '/../logs').length).to.be.above(1);
  });
});
