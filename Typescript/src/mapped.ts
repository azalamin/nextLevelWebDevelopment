// mapped types

// map

const arrayOfNum: number[] = [1, 4, 6];
const arrayOfString: string[] = ["1", "4", "6"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map(num => num.toString());

type AreaOfString = {
	height: string;
	width: string;
};

type AreaOfStringMap<T> = {
	[key in keyof T]: T[key];
};

const area1: AreaOfStringMap<{ height: string; width: number }> = {
	height: "20",
	width: 20,
};
console.log(area1);
