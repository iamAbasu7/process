const { createBinary } = require("./buildBinary");
const { directoryIsExist } = require("./checkDirectory");
const { cloneRepo } = require("./cloneZombienet");

directoryIsExist();




// (directoryIsExist()).then(cloneRepo()).then(createBinary());