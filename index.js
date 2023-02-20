const { createBinary } = require("./buildBinary");
const { directoryIsExist } = require("./checkDirectory");
const {podmanCheck} = require("./checkPodman");
const { cloneRepo } = require("./cloneZombienet");

podmanCheck();




// (directoryIsExist()).then(cloneRepo()).then(createBinary());