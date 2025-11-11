// union |

type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
	if (role === "admin") {
		return "Admin Dashboard";
	} else if (role === "user") {
		return "User Dashboard";
	} else {
		return "Guest dashboard";
	}
};

// console.log(getDashboard("guest"));

// intersection

type Employee = {
	id: string;
	name: string;
	phoneNo: string;
};

type Manager = {
	designation: string;
	teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
	name: "Chowdhury Shaheb",
	id: "123",
	phoneNo: "0170000000",
	designation: "manager",
	teamSize: 13,
};
