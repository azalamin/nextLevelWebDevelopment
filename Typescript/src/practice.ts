/*
Primitive & Non-Primitive

Create variables using all primitive types (string, number, boolean, symbol, null, undefined, bigint).

Create a few non-primitive examples (array, object, tuple).

*/

// const name: string = "Safari";
// const age: number = 26;
// const isAdmin: boolean = true;
// let future: null = null;
// let career: undefined = undefined;

// const user: { name: string; id: number } = {
// 	name: "Salauddin",
// 	id: 20,
// };

// const friends: string[] = ["Fardin", "Rafshan"];

// const nameAndAge: [string, number] = ["Rakib", 26];

/*
Object & Literal Types

Create an object type for a Product, with optional fields (discount?, color?).

Use literal types to restrict properties (e.g. category: "electronics" | "fashion").
*/

type Category = "electronics" | "fashion";

type Product = {
	name: string;
	price: number;
	discount?: string;
	color: string;
	category: Category;
};

const product: Product = {
	name: "Iphone",
	price: 120000,
	color: "red",
	category: "electronics",
	// discount: "20%", // optional
};

/*
Functions
- Write a function that calculates a total price, with typed parameters and return type.
- Try using optional parameters and default values.
*/

type Total = (num1: number, num2?: number) => number;

interface ITotal {
	(num1: number, num2: number): number;
}

const total: Total = (num1, num2 = 0) => num1 + num2;
const total2: ITotal = (num1, num2 = 0) => num1 + num2;
// console.log(total(5));

/*
Rest & Spread Operator
- Write a function that takes multiple numbers using rest and returns their sum.
- Merge two typed arrays or objects using spread.
*/

type Sum = (...rest: number[]) => number;
const sum: Sum = (...rest) => {
	let total: number = 0;
	for (const num of rest) {
		total += num;
	}
	return total;
};
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

type StudentInfo = {
	name: string;
	id: number;
};

const addToCourse = (studentInfo: StudentInfo) => {
	return {
		course: "Next Level",
		...studentInfo,
	};
};

const studentInfo: StudentInfo = {
	name: "Saima Chowdhuri",
	id: 23,
};

// console.log(addToCourse(studentInfo));

const friends: string[] = ["Farhan", "Tawsif", "Sabbir"];
const newFriends: string[] = ["Sajib", "Rayhan", "Jobayer"];
const collegeFriends: string[] = ["Sakib", "Saimon", "Jonayed"];

friends.push(...newFriends, ...collegeFriends);

// console.log(friends);

/*
Destructuring
- Destructure an object type inside a function parameter.
- Destructure an array of tuples.
*/

const user = (name: { firstName: string; lastName: string }, age: number) => {
	return { name, age };
};
// console.log(user({ firstName: "Salma", lastName: "Fateha" }, 23));

type NewUser = [string, string];

const newUser: NewUser = ["Sabbir", "26"];
const [name, age] = newUser;
// console.log({ name, age });

type CustomError = {
	message: string;
};

try {
} catch (error) {
	// console.log((error as CustomError).message);
}
