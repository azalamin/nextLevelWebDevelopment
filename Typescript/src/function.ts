// Function
// Arrow function normal function

function add(num1: number, num2: number): number {
	return num1 + num2;
}

// add(20, 30);
const addArrow = (num1: number, num2: number): number => {
	return num1 + num2;
};

const arr: number[] = [1, 4, 6];

const sqrArray = arr.map((elem: number): number => elem * elem);
