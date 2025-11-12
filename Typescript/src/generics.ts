// dynamically generalize: Generic

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

// const rollNumbers: number[] = [4, 7, 11];
const rollNumbers: GenericArray<number> = [4, 7, 11];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type Coordinates<X, Y> = [X, Y];

const coordinates: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

type User = {
	name: string;
	age: number;
};

const userList: GenericArray<User> = [
	{
		name: "Mr. X",
		age: 22,
	},
	{
		name: "Mr. U",
		age: 22,
	},
	{
		name: "Mr. Z",
		age: 22,
	},
	// {
	// 	name: "Mr. Z",
	// 	age: "22",
	// },
];
