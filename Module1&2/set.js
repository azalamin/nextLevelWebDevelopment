const arr = ["mango", "apple", "banana", 'litchi', 'mango']

const removeDupArr = (arr) => {
    const newArr = []
    arr.forEach(element => {
        if (!newArr.includes(element)) {
            newArr.push(element)
        }
    });
    return newArr
}

const removeDupArrSet = (arr) => {
    const set = new Set(arr)
    return Array.from(set)
}

console.log(removeDupArr(arr))
console.log('set', removeDupArrSet(arr))

