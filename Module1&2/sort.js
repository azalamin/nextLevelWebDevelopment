const numbers = [42, 7, 89, 23, 56, 14, 72, 99];
numbers.sort((a, b) => b - a)

const fruits = ["Mango", "apple", "Banana", "Strawberry", "orange", "Kiwi"];
fruits.sort((a, b) => a.localeCompare(b))

// Nested array flat

const tagsFromPosts = [
    ["javascript", "react", "frontend"],
    ["node", "express", "css"],
    ["css", "html", "design"],
    ["mongodb", "api", "database", "react"],
];

const filterTags = [...new Set(tagsFromPosts.flat())];
// console.log(filterTags)

const currentUserRoles = ["user", "editor", 'manager']
const featureAccessRoles = ["admin", "manager"]

const canAccess = currentUserRoles.some(role => featureAccessRoles.includes(role));
// console.log(canAccess)





// check if the user has any "vip" level access
const userRoles = ["viewer", "contributor"];
const vipRoles = ["admin", "moderator", "vip"];
// TODO: check if userRoles has any of vipRoles
const hasVipLevel = userRoles.some(role => vipRoles.includes(role))

// given an array of user ages, check if there's any under 18
const userAges = [21, 34, 17, 29];
// TODO: print true if anyone is below 18
const isBelow18 = userAges.some(age => age < 18);
// console.log(isBelow18) // true


// check if a shopping cart contains any discount-eligible item
const cart = ["T-shirt", "Shoes", "Coupon", "Hat"];
const discountItems = ["Coupon", "Promo", "Gift Card"];
// TODO: use .some() + .includes() to check

const containDiscount = cart.some(item => discountItems.includes(item));
// console.log(containDiscount) // true


// block access if any banned user tries to login
const loginUsers = ["john", "hacker99", "alex"];
const banned = ["hacker99", "spammer"];
// TODO: print true if any banned user exists in loginUsers
const isBannedUserExists = loginUsers.some(user => banned.includes(user))
// console.log(isBannedUserExists) // true

// // detect if a comment contains any toxic keyword
// const comment = "This app is stupid and slow";
// const badWords = ["stupid", "dumb", "trash"];
// // TODO: check if comment includes any of these badWords
// const containBadWords = comment.split(' ').some(item => badWords.includes(item));
// // console.log(containBadWords) // true


// detect if a comment contains any toxic keyword
const comment = "This app is stupid and slow";
const badWords = ["stupid", "dumb", "trash"];

const containBadWords = badWords.some(word =>
    comment.toLowerCase().includes(word.toLowerCase())
);

// console.log(containBadWords) // true

// const arr = Array.from([1, 2, 3], (value, i) => value * value)
// console.log(arr)

const range = (start, stop, step) => Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);

console.log(range(51, 77, 2))





