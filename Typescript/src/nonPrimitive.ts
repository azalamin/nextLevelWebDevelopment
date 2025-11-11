let mixedArr: (string | number)[] = ["egg", 12, "milk", 1, "sugar", 2];

const coordinates: [number, number] = [20, 30];

// reference type

const user: {
	firstName: string;
	middleName?: "Programming Hero";
	lastName: string;
} = {
	firstName: "Mezbaul",
	lastName: "Saban",
	middleName: "Programming Hero",
};

console.log(user);
