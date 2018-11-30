let output, words
const anagrams = new Map()

function print(s) {
  output.append(s)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

async function main() {
  output = document.getElementById('output')
  console.log('indexing...')
  words = window.frames[0].document.body.textContent.split('\n')
  words.forEach(word => {
    const key = word.split('').sort()
    if (!anagrams.has(key)) anagrams.set(key, [])
    anagrams.get(key).push(word)
  })
  console.log('done')
  const keys = Array.from(anagrams.keys())
  for (let x = 10; x--; ) {
    let last
    for (let i = 99; i--; ) {
      const key = sample(keys)
      const word = anagrams.get(key)[0]
      if (word !== last) {
        print(word.toUpperCase() + ' ')
        await sleep(100)
      }
      last = word
      // TODO ...
    }
    print('\n\n')
  }
}

window.onload = main
