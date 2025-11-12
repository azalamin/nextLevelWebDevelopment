// as const

// enum UserRoles {
// 	Admin = "Admin",
// 	Editor = "Editor",
// 	Viewer = "Viewer",
// }
const UserRoles = {
	Admin: "Admin",
	Editor: "Editor",
	Viewer: "Viewer",
} as const;

/*
  readonly  Admin: "Admin",
  readonly  Editor: "Editor",
  readonly  Viewer: "Viewer",

  1. typeof operator
  2. keyof operator

  const user = {
    id: 222,
    name: 'Mezba'
  }

  typeof user 

  type user {
    id: number;
    name: string;
  }

  typeof UserRoles
  {
    Admin: 'Admin';
    Editor: "Editor";
    Viewer: 'Viewer";
  }

  keyof typeof UserRoles {
    
  
  }

*/

// type UserRoles = "Admin" | "Editor" | "Viewer";

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
	if (role === UserRoles.Admin || role === UserRoles.Editor) {
		return true;
	} else return false;
};

const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
