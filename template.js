import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)
const day = 1

async function getResult() {
  const inputContent = await readFile(`./${day}/input.txt`, { encoding: 'utf8' })
  const result = inputContent
  return result
}

;(async () => {
  const result = await getResult()
  result //?
})()
