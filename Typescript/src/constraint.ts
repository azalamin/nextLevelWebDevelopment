// constraint: strict rules deya

interface IStudent {
	id: number;
	name: string;
	DOB: string;
	class: number;
}

const addStudentToCourse = <T extends IStudent>(studentInfo: T) => {
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
const student3 = {
	id: 1323,
	name: "Mezba",
	hasCar: true,
	isMarried: true,
	DOB: "12-09,199",
	class: 10,
};

const result = addStudentToCourse(student3);

console.log(result);
