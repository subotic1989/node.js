const { readFile, writeFile } = require("fs");

console.log("1");

readFile("./box/first.txt", "utf8", (err, res) => {
  // catch first txt
  if (err) {
    return;
  }

  const first = res;

  readFile("./box/second.txt", "utf8", (err, res) => {
    console.log(res);
    console.log("2");
    // catch second txt
    if (err) {
      return;
    }
    const second = res;

    //write new file
    writeFile(
      "./box/res-async.txt",
      `first: ${first}, second: ${second}`,
      (err, res) => {
        if (err) {
          return;
        }
        console.log("3");
      }
    );
  });
});

console.log("4");
