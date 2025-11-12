type User = {
	name: string;
	age: number;
};

type Role = {
	role: "admin" | "user";
};

interface IUser {
	name: string;
	age: number;
}

interface IUserWIthRole extends IUser {
	role: "admin" | "user";
}

type UserWithRole = User & Role;

const user: IUserWIthRole = {
	name: "Sabbir Ahmed",
	age: 24,
	role: "admin",
};

// type alias vs interface
// type alias works with primitive and non-primitive data type wheres interface only works with reference types data or non-primitive data type such as object, array, function. And their syntax is bit different, have a look at the code below

type IsAdmin = boolean;

// interface IIsAdmin = boolean // wrong
interface IIsAdmin {
	isAdmin: boolean;
}

// another thing is when we want to merge two types into one, we use & - type intersection with type alias, but when we use interface, we must use extends when merging two types set into one.

// function

type Add = (num1: number, num2: number) => number; // this is clean and simple shows like a function

// this is also can be use, simple clean
interface IAdd {
	(num1: number, num2: number): number;
}
const add: IAdd = (num1, num2) => num1 + num2;

// array
type Friends = string[]; // this is preferred because it's clean

// although we can use it like this but type alias shows more clean and easy to understand
interface IFriends {
	[index: number]: string;
}

const friends: IFriends = ["A", "B", "C"];

// now the question is when should we use interface or type alias? It depends on what you want to do, and when you are using. One thing keep in mind that, when you use see if it is clean code or not? If type alias is useful then use it or use interface.
