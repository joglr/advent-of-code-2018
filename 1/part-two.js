import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)
const day = 1

function findDuplicateFrequency(frequencyDeltas) {
  let currentFrequency = 0
  const frequencySet = new Set([0])

  let attempts = 0
  while (++attempts < 150) {
    for (let delta of frequencyDeltas) {
      currentFrequency = currentFrequency + delta
      if (frequencySet.has(currentFrequency)) {
        attempts //?
        return currentFrequency
      }
      frequencySet.add(currentFrequency)
    }
  }
}

async function getResult() {
  const inputContent = await readFile(`./${day}/input.txt`, {
    encoding: 'utf8'
  })
  const frequencyDeltas = inputContent
    .split('\n')
    .map(x => parseInt(x))
    .filter(x => !isNaN(x))

  return findDuplicateFrequency(frequencyDeltas) //?
}

;(async () => {
  const result = await getResult() //?.
  result //?
})()
