// Generic Function

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: { id: number; name: string }) => [value];

const createArrayWithGeneric = <T>(value: T) => {
	return [value];
};

const arrString = createArrayWithGeneric("Apple");
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({ id: 123, name: "Next Level" });

// Tuple

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => {
	return [param1, param2];
};

const res1 = createArrayTupleWithGeneric("Mezba", false);
const res2 = createArrayTupleWithGeneric(2222, {
	name: "Mezba",
	id: 123,
});

const addStudentToCourse = <T>(studentInfo: T) => {
	return {
		course: "Next Level",
		...studentInfo,
	};
};

const student1 = {
	id: 123,
	name: "Mezba",
	hasPend: true,
};

const student2 = {
	id: 1323,
	name: "Mezba",
	hasCar: true,
	isMarried: true,
};

const result = addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);

console.log(result);
console.log(result2);
