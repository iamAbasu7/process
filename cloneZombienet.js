const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);
const { createBinary } = require("./buildBinary");

module.exports = {
  cloneRepo: async function () {
    console.log("cloning into zombienet...");
    const { stdout, stderr } = await exec('cd && mkdir parity-zeeve-zombienet && cd parity-zeeve-zombienet && git clone git@github.com:paritytech/zombienet.git && cd zombienet && git checkout tags/v1.3.34');
    console.log("cloning done..");
    // console.log('stdout:', stdout);
    // console.error('stderr:', stderr)
    createBinary();
  }
} 

// cloneRepo(); git clone git@github.com:paritytech/zombienet.git && cd zombienet && git checkout tags/v1.3.34