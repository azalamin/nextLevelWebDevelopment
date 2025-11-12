// enum
// set of fixed string literal together
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
// type UserRoles = "Admin" | "Editor" | "Viewer";
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
var isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
