//? Input 
// [2, 11, 7, 15] and 9

//? Output
// [0, 2] (because 2 + 7 = 9)

const twoSum = (arr, target) => {
    const numberMap = new Map()

    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i]
        const complement = target - currentNumber;
        console.log('complement', complement)
        if (numberMap.has(complement)) {
            console.log('Inside if', [numberMap.get(complement), i])
            return [numberMap.get(complement), i]
        }
        numberMap.set(currentNumber, i)
        console.log(numberMap)
    }
    return undefined
}

console.log(twoSum([2, 11, 8, 15, 7], 9))