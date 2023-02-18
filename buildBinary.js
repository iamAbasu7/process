const util = require('node:util');
const { zombienetRun } = require('./runZomienet');
const exec = util.promisify(require('node:child_process').exec);

module.exports = {
  createBinary: async function () {
    const { stdout, stderr } = await exec('cd .. && cd parity-zeeve-zombienet/zombienet/javascript && npm install && npm run build');
    console.log("Binary Build Successfully ...");
    // console.log('stdout:', stdout);
    // console.error('stderr:', stderr);
    zombienetRun();
  }
} 
// checkDirectory();