// spread operator
const friends = ["Rahim", "Karim"];

const schoolFriends = ["Pintu", "CHintu", "Bulbul"];

const collegeFriends = ["Mr. Smart", "Mr. Very very Smart"];

// const allFriends = [...friends, ...schoolFriends, ...collegeFriends];
// console.log(allFriends);

friends.push(...schoolFriends);
friends.push(...collegeFriends);

// console.log(friends);

const user = { name: "Mezba", phoneNo: "01700000000" };

const otherInfo = {
	hobby: "Outing",
	favouriteColor: "Black",
};

const userInfo = { ...user, ...otherInfo };

// rest operator

const sendInvite = (...friends: string[]) => {
	friends.forEach(friend => console.log(`Sent Invitation to ${friend}`));
};

sendInvite("Bulbul", "CHintu", "Pintu");
