import mongoose from 'mongoose';
import Group from '../models/group.js';
import humnaRI from 'human-readable-ids';

function getNewGroupName() {
	return new Promise((resolve, reject) => {
		const newGroupName = humnaRI.hri.random();
		getGroup(newGroupName).then((resp) => {
			if (!resp) {
				return resolve(newGroupName);
			}

			return getNewGroupName();			
		}).catch((er) => {
			reject(er);
		});
	});
}

function createGroup(body) {
	return new Promise((resolve, reject) => {
		getNewGroupName().then((newGroupName) => {
			return saveNewGroup(body, newGroupName);
		}).then((resp) => {
			resolve(resp);
		})
		.catch((err) => {
			reject(err);
		});	
	});
}

function saveNewGroup(body, groupName) {
	const group = new Group();
	group.createdAt   = new Date();
	group.updatedAt   = new Date();
	group.groupName   = groupName;
	group.userList    = [{name: body.userName, idAdmin: true}];

	return new Promise((resolve, reject) => {	
		group.save((err, savedDoc) => {
		  if (err) {
		    return reject(err);
		  }

		  resolve(savedDoc);
		})
	});
}

function addUserToGroup(body) {	
	return new Promise((resolve, reject) => {
		Group.findOneAndUpdate(
			{ groupName: body.groupName },
			{ 
				$set: { updatedAt: new Date() },
				$addToSet: { 
					userList:  { 
						$each: [ { name: body.userName, idAdmin: false } ] 
					}  
				} 
			},
			{ new: true },
		(err, updatedDoc) => {			
		  if (err) {		 
		    return reject(err);
		  }

		  resolve(updatedDoc);
		})
	});
}

export const createOrJoinGroup = (body) => {
	if (!body.groupName) {
		return createGroup(body);
	}
	
	return addUserToGroup(body);
};

export const getGroup = (groupName) => {
	return new Promise((resolve, reject) => {		
    Group.findOne({
      groupName: groupName    
     
    }, (err, resp) => {
      if (err) {
        return reject(err);
      }

      resolve(resp);
    });
  });
};

