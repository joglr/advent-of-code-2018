import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)

const day = 2

const findCommonChars = str1 => str2 => {
  const commonChars = []
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) commonChars.push(str2[i])
  }
  return {
    str1,
    str2,
    commonChars
  }
}

const findCommonChars = strings => str1 => {
  return strings
    .map(str2 => findCommonChars(str1)(str2))
}

async function getResult() {
  const inputContent = await readFile(`./${day}/input.txt`, {
    encoding: 'utf8'
  })
  const strings = inputContent.split(/\n|\r/).filter(x => x.length > 0)
  const numCharsInCommon = 1
  const results = strings
    .map(findCommonChars(strings))
    .reduce((x, y) => [...x, ...y], [])
    .slice()
    .find(x => x.commonChars.length === x.str1.length - numCharsInCommon)
    .commonChars.join('')
  return results
}

;(async () => {
  const result = await getResult()
  result //?
})()
