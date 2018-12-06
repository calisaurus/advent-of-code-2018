var fs = require("fs");

var text = fs.readFileSync(__dirname + "/input.txt", "utf-8");
var textByLine = text.trim().split("\n")

textByLine.forEach(line01 => {
  textByLine.forEach(line02 => {
    if (line01 === line02) {
      return
    }
    let errors = 0
    for (let i = 0; i < line01.length; i++) {
      if (line02.charAt(i) !== line01.charAt(i)) {
        errors++
      }
    }
    if (errors === 1) {
      console.log("possible match", line01, line02)
    }
  })
})
