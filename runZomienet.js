const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

module.exports = {
  zombienetRun: async function () {
    const { stdout, stderr } = await exec('cd .. && node parity-zeeve-zombienet/zombienet/javascript/packages/cli/dist/cli.js -p podman spawn ../../../examples/0001-small-network.toml -d my-zombienet');
    console.log(stdout);
    // console.log('stdout:', stdout);
    // console.error('stderr:', stderr);
  }
} 
// checkDirectory();