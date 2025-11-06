// const obj = {
//     nextLevel: { courseId: "level2" },
//     "Programming Hero": { courseId: "level1" },
//     true: 'Web'
// }

// const obj = {};
// obj[course2] = { courseId: 'level2' }
// obj[course1] = { courseId: 'level1' }
// console.log(obj)


const course1 = { name: "Programming Hero" }
const course2 = { name: "Next Level Web Development" }

const courses = [
    [course1, "Level1"],
    [course2, "Level 2"]
]

const map = new Map(courses);
// map.set(course1, { courseId: "Level1" });
// map.set(course2, { courseId: "Level2" });

// map.forEach((value, key) => value.courseId = "Shohoj Shorol " + value.courseId)

// console.log([...map.values()])

// for (let key of map.keys()) {
//     key.name = "Shohoz Shorol Simple " + key.name
// }
console.log(map)

