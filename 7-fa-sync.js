// const fs = require("fs"); //file system

const { readFileSync, writeFileSync } = require("fs");

//RETRIEVE FILES
const first = readFileSync("./box/first.txt", "utf8");
const second = readFileSync("./box/second.txt", "utf8");

//WRITE FILE
writeFileSync("./box/new-file.txt", "I can write whatever I want");
//ako nema "new-file.txt" node ce napraviti ako ima ce pregaziti file sa drugim argumentom

writeFileSync("./box/new-file.txt", "-Add second part", {
  flag: "a",
});
//sa flag kazemo node ako ima nesto u folderu dodaj i ovo nemoj pregaziti

console.log(second);
