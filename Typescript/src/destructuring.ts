// object destructuring
// array destructuring

const user = {
	id: 123,
	name: {
		firstName: "Mezba",
		middleName: "Hasan",
		lastName: "Persian",
	},
	gender: "Male",
	favoriteColor: "Black",
};

const {
	id,
	name: { firstName, middleName, lastName },
	gender,
	favoriteColor,
} = user;

console.log(firstName);
