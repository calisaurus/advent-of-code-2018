var fs = require("fs");

var text = fs.readFileSync(__dirname+"/input.txt", "utf-8");
var textByLine = text.split("\n")

var sum = textByLine.reduce(function (accumulator, line) {
  console.log(accumulator, line, parseInt(line));
  return accumulator + parseInt(line);
}, 0);

console.log(sum);
