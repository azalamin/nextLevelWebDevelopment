// nullable types

const getUser = (input: string | null) => {
	if (input) {
		console.log(`From DB: ${input}`);
	} else {
		console.log(`From DB: All User`);
	}
};

getUser(null);

// unknown

const discountCalculator = (input: unknown): void => {
	if (typeof input === "number") {
		const discountedPrice = input * 0.1;
		console.log(discountedPrice);
	} else if (typeof input === "string") {
		const [price] = input.split(" ");
		const numericPrice = parseFloat(price ?? "0");
		const discountedPrice = numericPrice * 0.1;
		console.log(discountedPrice);
	} else {
		console.log("Wrong Input");
	}
};

discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);
