type User = {
	id: number;
	name: {
		firstName: string;
		lastName: string;
	};
	gender: "male" | "female";
	contactNo: string;
	address: {
		division: string;
		city: string;
	};
};

const user1: User = {
	id: 123,
	name: {
		firstName: "Mezba",
		lastName: "Persian",
	},
	gender: "male",
	contactNo: "0183938938888",
	address: {
		division: "ctg",
		city: "ctg",
	},
};

type IsAdmin = true;

const isAdmin: IsAdmin = true;

type Name = string;

const myName: Name = "Al amin";

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => {
	return num1 + num2;
};
