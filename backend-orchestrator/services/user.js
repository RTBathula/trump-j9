import Group from '../models/group.js';
import { findGroup, createGroup, addUserToGroup } from '../models/group.js';

export const createOrJoinGroup = (body) => {
	if (!body.groupName) {
		return createGroup(body);
	}
	
	return addUserToGroup(body);
};

export const getGroup = (groupName) => {
	return findGroup(groupName);
};

