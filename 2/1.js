import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)

const day = 2
const mapObject = valueMapper => obj =>
  Object.assign(
    ...Object.entries(obj).map(([k, v]) => ({ [k]: valueMapper(v) }))
  )
const getUniqueLettersFromString = string => [...new Set(string).values()]
const normalize = x => (x > 0 ? 1 : 0)
const normalizeDupes = mapObject(normalize)
const reduceTotals = (total, normalizedDupes) => ({
  2: total[2] + normalizedDupes[2],
  3: total[3] + normalizedDupes[3]
})
const hasAmountOfDupes = (letter, string, dupeAmount) =>
  Array.from(string).filter(x => x === letter).length === dupeAmount

const checkStringForDupes = total => string =>
  getUniqueLettersFromString(string).reduce((total, currentLetter) => {
    return {
      2: total[2] + hasAmountOfDupes(currentLetter, string, 2),
      3: total[3] + hasAmountOfDupes(currentLetter, string, 3)
    }
  }, total)

async function getResult() {
  const inputContent = await readFile(`./${day}/input.txt`, {
    encoding: 'utf8'
  })
  const strings = inputContent.split('\n')

  strings.map(checkStringForDupes({ 2: 0, 3: 0 })) //?

  const totals = strings
    .map(checkStringForDupes({ 2: 0, 3: 0 }))
    .map(normalizeDupes)
    .reduce(reduceTotals, { 2: 0, 3: 0 })
  const multipliedTotals = Object.values(totals).reduce((x, y) => x * y, 1)
  return multipliedTotals
}

;(async () => {
  const result = await getResult()
  result //?
})()
