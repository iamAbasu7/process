const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);



async function podmanCheck() {
  const { stdout, stderr } = await exec('podman -v');
  const VERSION = stdout.split(' ')[2];
  const pos1 = VERSION.split('.')[0];
  const pos2 = VERSION.split('.')[1];
  const pos3 = VERSION.split('.')[2];
  if(pos1==3 && pos2 ==4 && pos3 ==4){
    console.log("Proceed")
    //clone repo
  }
  else{
    console.log("Download Podman 3.4.4");
  }
  
}
podmanCheck();