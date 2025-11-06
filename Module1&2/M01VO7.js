// const startTime = performance.now()
const firstArray = []
const secondArray = []

for (let i = 0; i < 600000; i++) {
    if (i < 300000) {
        firstArray.push(i)
    }
    secondArray.push(i)
}
console.log(`First array: ${firstArray.length}`)
console.log(`Second array: ${secondArray.length}`)


// console.time('Task')
// console.timeEnd('Task')
// const endTime = performance.now()

// console.log('This function has taken ', endTime - startTime, ' -ms')