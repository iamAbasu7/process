const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);



async function cloneRepo() {
  const { stdout, stderr } = await exec('cat /etc/os-release');
  const VERSION = stdout.split('=')[1];
//   console.log('stdout:', stdout);
  console.log(VERSION)
}
cloneRepo();