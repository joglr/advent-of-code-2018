import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)
const day = 1

async function getResult() {
  const inputContent = await readFile(`./${day}/input.txt`, {
    encoding: 'utf8'
  })

  const result = inputContent
    .split('\n')
    .map(x => parseInt(x))
    .filter(x => !isNaN(x))
    .reduce((total, currentValue) => total + currentValue, 0)
  return result
}

;(async () => {
  const result = await getResult()
  result //?
})()
