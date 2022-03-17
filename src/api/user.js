import { makeRequest } from '../utils/axios';

export const getGroup = async (groupName) => makeRequest({
    url: `/api/user/${groupName}`,
    method: 'GET' 
});

export const createOrJoinGroup = async (groupObj) => makeRequest({
    url: `/api/user`,
    method: 'POST',
    data: groupObj 
});
