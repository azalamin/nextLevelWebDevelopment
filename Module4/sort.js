const selectedSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log("State of array: ", array);

        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = array[i]
            array[i] = array[minIndex]
            array[minIndex] = temp;
        }

        console.log(`After pass: ${i + 1}`, array)
    }
}

console.log(selectedSort([5, 3, 8, 4, 2]))