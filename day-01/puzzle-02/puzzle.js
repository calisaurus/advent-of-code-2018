var fs = require("fs");

var text = fs.readFileSync(__dirname + "/input.txt", "utf-8");
var textByLine = text.trim().split("\n")
var frequencyChanges = textByLine.map(line => parseInt(line))

var frequenciesSeen = {
  0: 0
}
var solution = false
var position = 0
var currentFrequency = 0

while (solution === false) {
  if (position >= frequencyChanges.length) {
    position = 0
  }
  var nextFrequencyChange = frequencyChanges[position]
  currentFrequency = currentFrequency + nextFrequencyChange
  console.log(currentFrequency, nextFrequencyChange)
  if (frequenciesSeen[currentFrequency] === 1) {
    solution = currentFrequency
  }
  frequenciesSeen[currentFrequency] = 1
  position++
}
console.log(frequenciesSeen)
console.log(solution)
