const cartItems = [
    { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
    { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
    { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const subTotal = cartItems.reduce((subtotal, product) => {
    return subtotal += (product.price * product.quantity)
}, 0)

// Find the best scorer
const players = [
    { name: "Jamal Bhuyan", score: 88 },
    { name: "Shekh Morsalin", score: 81 },
    { name: "Rakib Hossain", score: 95 },
    { name: "Topu Barman", score: 91 },
    { name: "Sohel Rana", score: 72 },
];

const bestScorer = players.reduce((bestPlayer, player) => {
    if (bestPlayer.score > player.score) {
        return bestPlayer
    }
    return player
}, players[0])
// console.log(bestScorer)

const movies = [
    { title: "Inception", rating: 8.8, genre: "Sci-Fi", year: 2010 },
    { title: "Interstellar", rating: 8.6, genre: "Sci-Fi", year: 2014 },
    { title: "The Dark Knight", rating: 9.0, genre: "Action", year: 2008 },
    { title: "Tenet", rating: 7.4, genre: "Action", year: 2020 },
    { title: "Memento", rating: 8.4, genre: "Thriller", year: 2000 },
    { title: "Dunkirk", rating: 7.9, genre: "War", year: 2017 },
];

const highestRatedMovie = movies.reduce((bestMovie, movie) => {
    if (bestMovie.rating > movie.rating) {
        return bestMovie;
    } else {
        return movie
    }
}, movies[0])
// console.log(highestRatedMovie) // { title: 'The Dark Knight', rating: 9, genre: 'Action', year: 2008 }

const averageMovieRating = movies.reduce((total, movie) => total + movie.rating / movies.length, 0);

// console.log(averageMovieRating)

const genreMovies = movies.reduce((group, movie) => {
    if (!group[movie.genre]) {
        group[movie.genre] = []
    }

    group[movie.genre].push(movie.title);

    return group

}, {})

// console.log(genreMovies)


//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
    "A",
    "C",
    "B",
    "A",
    "B",
    "B",
    "C",
    "A",
    "B",
    "D",
    "A",
    "C",
    "B",
    "A",
];

//TODO Initialize empty object
//TODO Check if the response already exist or not
//TODO If exist then increment the count
//TODO If not, then initialize it with 1

const count = surveyResponses.reduce((table, response) => {
    // if (table[response]) {
    //     table[response] += 1
    // } else {
    //     table[response] = 1;
    // }

    table[response] = (table[response] || 0) + 1;

    return table
}, {})

// console.log(count)

//? Output
// { A: 5, C: 3, B: 5, D: 1 }


//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
    { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
    { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
    { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
    { category: "Home", item: "Chair", price: 150, quantity: 1 },
    { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
    { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

//TODO Init empty object
//TODO Init obj category
//TODO calculate the revenue

const totalSalesByCategory = sales.reduce((table, sale) => {
    const { category, price, quantity } = sale
    if (!table[category]) {
        table[category] = {
            totalRevenue: 0,
            itemCount: 0,
        }
    }

    table[category].totalRevenue += price * quantity;
    table[category].itemCount += quantity;

    return table
}, {})
// console.log(totalSalesByCategory)

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };


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

const postByUserId = posts.reduce((table, post) => {
    if (!table[post.userId]) {
        table[post.userId] = []
    }

    table[post.userId].push(post)

    return table;
}, {});

const userWithPosts = users.map(user => {
    return {
        ...user,
        posts: postByUserId[user.id] || []
    }
})

console.log(userWithPosts)

//? output
// [
//   { id: 101, name: 'Alice', posts: [ { id: 2, ... }, { id: 3, ... } ] },
//   { id: 102, name: 'Bob', posts: [ { id: 1, ... }, { id: 5, ... } ] },
//   { id: 103, name: 'Charlie', posts: [ { id: 4, ... } ] }
// ]
