interface IDeveloper<T, X = null> {
	name: string;
	salary: number;
	device: {
		brand: string;
		model: string;
		releasedYear: string;
	};
	smartWatch: T;
	bike?: X;
}

interface IBrandLessWatch {
	heartRate: string;
	stopWatch: boolean;
}

const poorDeveloper: IDeveloper<IBrandLessWatch> = {
	name: "Mr. Poor",
	salary: 20,
	device: {
		brand: "Lenovo",
		model: "A21",
		releasedYear: "2010",
	},
	smartWatch: {
		heartRate: "200",
		stopWatch: true,
	},
};

interface IBrandWatch extends IBrandLessWatch {
	callSupport: boolean;
	calculator: boolean;
	AiFeature: boolean;
}

const richDeveloper: IDeveloper<IBrandWatch> = {
	name: "Mr. Rich",
	salary: 100,
	device: {
		brand: "apple",
		model: "m4",
		releasedYear: "2020",
	},
	smartWatch: {
		heartRate: "200",
		stopWatch: true,
		callSupport: true,
		calculator: true,
		AiFeature: true,
	},
	bike: null,
};
