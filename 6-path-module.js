const path = require("path");

const pathSep = path.sep;
// \

const filePath = path.join("/box", "second-box", "text.txt");
// \box\second-box\text.txt

const baseFile = path.basename(filePath);
// text.txt

const absolutePath = path.resolve(__dirname);
// C:\Users\Admin\Desktop\Udemy\node.js

const absolutePathFile = path.resolve(__filename);
// C:\Users\Admin\Desktop\Udemy\node.js\app.js
