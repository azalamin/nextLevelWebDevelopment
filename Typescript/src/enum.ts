// enum
// set of fixed string literal together

enum UserRoles {
	Admin = "Admin",
	Editor = "Editor",
	Viewer = "Viewer",
}

// type UserRoles = "Admin" | "Editor" | "Viewer";

const canEdit = (role: UserRoles) => {
	if (role === UserRoles.Admin || role === UserRoles.Editor) {
		return true;
	} else return false;
};

const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
