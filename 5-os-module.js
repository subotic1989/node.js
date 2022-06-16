const os = require("os"); //operation system

const osMethods = {
  usrInfo: os.userInfo(),
  uptime: os.uptime(),
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(osMethods);
