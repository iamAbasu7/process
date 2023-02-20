const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);
const { cloneRepo } = require("./cloneZombienet");

module.exports = {
  directoryIsExist: async function () {
    console.log("checking for file parity-zeeve-zombienet ...");
    
    const { stdout, stderr } = await exec('cd && rm -rf parity-zeeve-zombienet');
    
    // console.log('stdout:', stdout);
    // console.error('stderr:', stderr);
    cloneRepo();
  }
} 

// checkDirectory();