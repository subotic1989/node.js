const fs = require("fs");

fs.writeFileSync("./box/index.html", `<p>john</p>`);

fs.writeFileSync("./box/index.html", "test", { flag: "a" });

const test = fs.readFileSync("./box/first.txt", "utf-8", (err, res) => {
  console.log(res);
});
