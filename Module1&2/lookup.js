const postsArray = [
    { id: "p-101", title: "Intro to SQL", author: "Alex" },
    { id: "p-102", title: "Data Structures in JS", author: "Beth" },
    { id: "p-103", title: "Understanding Reduce", author: "Chris" },
    { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const lookupTable = postsArray.reduce((table, post) => {
    table[post.id] = post;
    return table
}, {})

for (const key in lookupTable) {
    console.log(lookupTable[key])
}


//? Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }


//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
// const surveyResponses = [
//     "A",
//     "C",
//     "B",
//     "A",
//     "B",
//     "B",
//     "C",
//     "A",
//     "B",
//     "D",
//     "A",
//     "C",
//     "B",
//     "A",
// ];

// //? Output
// // { A: 5, C: 3, B: 5, D: 1 }

// let newObj = {}
// let count = 0
// for (const el of surveyResponses) {
//     if (el in newObj) {
//         count++
//         newObj = { el: count }
//     }
// }
// console.log(newObj)

//* Denormalizing Data (Client-Side "Join")

// Scenario: You have an array of users and a separate array of posts.
// You want to create a new array of users where each user object contains a posts array of their own posts.

//? input
const users = [
    { id: 101, name: "Alice" },
    { id: 102, name: "Bob" },
    { id: 103, name: "Charlie" },
];

const posts = [
    { id: 1, userId: 102, title: "My first post" },
    { id: 2, userId: 101, title: "React Hooks" },
    { id: 3, userId: 101, title: "Data Structures" },
    { id: 4, userId: 103, title: "CSS is fun" },
    { id: 5, userId: 102, title: "Node.js streams" },
];

const postGroup = users.reduce((userWithPost, user) => {
    const matchedPosts = posts.filter(post => post.userId === user.id);
    userWithPost = user
    userWithPost['posts'] = matchedPosts
    return userWithPost
}, [])

// console.log(postGroup)


//? output
// [
//   { id: 101, name: 'Alice', posts: [ { id: 2, ... }, { id: 3, ... } ] },
//   { id: 102, name: 'Bob', posts: [ { id: 1, ... }, { id: 5, ... } ] },
//   { id: 103, name: 'Charlie', posts: [ { id: 4, ... } ] }
// ]



