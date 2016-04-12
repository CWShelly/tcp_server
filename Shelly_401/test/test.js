const fs = require('fs');
const expect = require('chai').expect;
// ....
describe('creating a new file', ()=>{
  it('should create a new file',()=>{
expect(fs.exists('gulpfile.js',(exists)=>{
  console.log(exists ? 'it is there' : 'not here');
}));
  });
});
