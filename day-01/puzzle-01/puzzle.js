var fs = require("fs");

var text = fs.readFileSync(__dirname+"/input.txt", "utf-8");
var textByLine = text.split("\n")
//console.log(textByLine);

//const solution = [textByLine].reduce((a, b) => a + b, 0);

//var solution = [textByLine].reduce(function (accumulator, currentValue) {
  //return accumulator + currentValue;
//}, 0);

//console.log(solution);

var sum = textByLine.reduce(function (accumulator, line) {
  console.log(accumulator, line, parseInt(line));
  return accumulator + parseInt(line);
}, 0);

console.log(sum);
