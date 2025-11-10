// const binarySearch = (arr, target) => {
//     let low = 0;
//     let high = arr.length - 1;
//     let step = 1; // to track the steps

//     console.log(`\nStarting Binary Search for ${target} in [${arr.join(", ")}]\n`);

//     while (low <= high) {
//         const mid = Math.floor((high + low) / 2);
//         const guess = arr[mid];

//         console.log(`🧩 Step ${step++}:`);
//         console.log(`  low = ${low} (${arr[low]})`);
//         console.log(`  high = ${high} (${arr[high]})`);
//         console.log(`  mid = ${mid} (${arr[mid]})`);
//         console.log(`  guess = ${guess}`);

//         if (guess === target) {
//             console.log(`✅ Found ${target} at index ${mid}\n`);
//             return mid;
//         } else if (guess > target) {
//             console.log(`🔹 ${guess} is greater than ${target} → search left side`);
//             high = mid - 1;
//         } else {
//             console.log(`🔸 ${guess} is less than ${target} → search right side`);
//             low = mid + 1;
//         }

//         console.log(`  New range → low: ${low}, high: ${high}\n`);
//     }

//     console.log(`❌ ${target} not found in array.\n`);
//     return -1;
// };

// // Run simulation
// console.log(binarySearch([3, 5, 6, 7, 9, 11], 11));


const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        const guess = arr[mid];

        if (guess === target) {
            return mid
        } else if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

console.log(binarySearch([3, 5, 6, 7, 9, 11], 11))

