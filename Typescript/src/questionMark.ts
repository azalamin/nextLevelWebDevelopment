// ? : ternary operator: decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining

const isEligible = (age: number) => {
	// age > 21 ? console.log("You are eligible") : console.log("You are not eligible!");
	age ?? console.log("You are eligible");
};

// isEligible(20);

const userTheme = null;

const selectedTheme = userTheme ?? "Light Theme";

console.log(selectedTheme);
