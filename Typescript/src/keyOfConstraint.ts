// keyof : type operator

type RichPeoplesVehicle = {
	car: string;
	bike: string;
	cng: string;
};

type MyVehicle = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "cng";

type User = {
	id: number;
	name: string;
	address: {
		city: string;
	};
};

const user = {
	id: 222,
	name: "Mezba",
	address: {
		city: "ctg",
	},
};

// const myId = user.id;
const myId = user["id"];

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
	return obj[key];
};

const result = getPropertyFromObj(user, "name");
console.log(result);

const product = {
	brand: "HP",
};

const result2 = getPropertyFromObj(product, "brand");
