const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);
const NODE_MAJOR_VERSION = process.versions.node.split('.')[0];
  console.log(NODE_MAJOR_VERSION)


async function nodeVersion() {
  

      if (NODE_MAJOR_VERSION < 16 || NODE_MAJOR_VERSION > 16) {
        const { stdout, stderr } = await exec('nvm install 16 && nvm use 16');
    }

}


nodeVersion()



//     async function nodeCheck() {
//     const { stdout, stderr } = await exec('node -v');
//     console.log(stdout);
//     const VERSION = stdout.split('.')[0];
//     console.log(VERSION);
//     // const pos1 = VERSION.split('.')[0];
//     // const pos2 = VERSION.split('.')[1];
//     // const pos3 = VERSION.split('.')[2];
//     // if(pos1==3 && pos2 ==4 && pos3 ==4){
//     //   console.log("Proceed")
//     //   // directoryIsExist();
//     // }
//     // else{
//     //   console.log("Download Podman 3.4.4");
//     // }
    
//   }

  // nodeCheck()