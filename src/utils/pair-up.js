export const findSelectedUser = (users, name) => {
	return users.find((u) => u.name.toLowerCase() === name.toLowerCase());
};

export const toggledUserTeam = (users, name) => {
	let noOfSelectedUsers = 0;
	let toggledUserSelected = false;

	const toggledList = users.map((u) => {
	    let isSelected = u.selected;  
	    if (u.name.toLowerCase() === name.toLowerCase()) {
	    	toggledUserSelected = !u.selected;	      
	    	isSelected = !u.selected;      
	    }

	    noOfSelectedUsers = isSelected ? ++noOfSelectedUsers : noOfSelectedUsers;
	    return {
	      ...u,
	      selected: isSelected
	    }
	});

	return {
		toggledList,
		noOfSelectedUsers,
		toggledUserSelected
	};
};

export const reflectedUserTeam = (users, name, toggledUserSelected) => {
	let noOfSelectedUsers = 0;

	const list = users.map((u) => {
	    noOfSelectedUsers = u.selected ? ++noOfSelectedUsers : noOfSelectedUsers;

	    if (u.name.toLowerCase() === name.toLowerCase()) {      
	      return {
	        ...u,
	        disabled: toggledUserSelected
	      }
	    }

	    return u;
	});

	return {
		reflectedList: list,
		reflectedNoOfSelectedUsers: noOfSelectedUsers 
	};
};
