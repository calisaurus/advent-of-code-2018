var fs = require("fs");

var text = fs.readFileSync(__dirname+"/input.txt", "utf-8");
var textByLine = text.trim().split("\n")
var has2characters = countNumberOf2CharStrings(textByLine)
var has3characters = countNumberOf3CharStrings(textByLine)


function countNumberOf2CharStrings(list) {
  const listOf2CharStrings = list.filter(keep2CharStrings)
  console.log(list.length, "reduced to", listOf2CharStrings.length)
  return listOf2CharStrings.length

}

function keep2CharStrings(item) {
  var characterCounts = {}
  var characters = item.split('')
  characters.forEach(character => {
    characterCounts[character] = 0
  })
  characters.forEach(character => {
    characterCounts[character]++
  })
  var has2Characters = Object.entries(characterCounts).filter(kvp => kvp[1] === 2).length > 0
  console.log(item, has2Characters)
  return has2Characters
}

function countNumberOf3CharStrings(list) {
  const listOf3CharStrings = list.filter(keep3CharStrings)
  console.log(list.length, "reduced to", listOf3CharStrings.length)
  return listOf3CharStrings.length

}

function keep3CharStrings(item) {
  var characterCounts = {}
  var characters = item.split('')
  characters.forEach(character => {
    characterCounts[character] = 0
  })
  characters.forEach(character => {
    characterCounts[character]++
  })
  var has3Characters = Object.entries(characterCounts).filter(kvp => kvp[1] === 3).length > 0
  console.log(item, has3Characters)
  return has3Characters
}

console.log(has2characters * has3characters)
