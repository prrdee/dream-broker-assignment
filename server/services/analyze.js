function textLength(inputText) {
  const withSpaces = inputText.length
  const withoutSpaces = inputText.replace(/\s+/g, '').length

  return { withSpaces: withSpaces, withoutSpaces: withoutSpaces }
}

function wordCount(inputText) {
  const matches = inputText.match(/[\w\d\’\'-]+/gi)
  return matches ? matches.length : 0
}

function characterCount(inputText) {
  //removing non alphabetic characters
  const cleanString = inputText.toLowerCase().replace(/[^A-Za-z]/g, '')

  const arrayOfArrays = Object.entries(
    [...cleanString].reduce((obj, item) => {
      if (item in obj) {
        obj[item]++
      } else {
        obj[item] = 1
      }
      return obj
    }, {}),
  )

  // map array of arrays to array of objects
  const arrayOfObjects = arrayOfArrays.map(function ([a, b]) {
    return { [a]: b }
  })

  // sort array of objects alphabetically
  // de-structure and create a new array so sort doesn't impact arrayOfObjects
  const result = [...arrayOfObjects].sort(function (a, b) {
    if (Object.keys(a)[0] > Object.keys(b)[0]) return 1
    return -1
  })

  return result
}

function analyzeText(inputText) {
  return {
    textLength: textLength(inputText),
    wordCount: wordCount(inputText),
    characterCount: characterCount(inputText),
  }
}

export default { textLength, wordCount, characterCount, analyzeText }
