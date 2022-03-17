import router from '../../router';
import * as userAPI from '../../api/user';
import { setCurrentUser } from '../../utils/cookie';

export const getGroup = async ({ commit }, groupName) => {  
   const apiResp = await userAPI.getGroup(groupName);
   commit('getGroup', { apiResp });   
};

export const createOrJoinGroup = async (_, { userName, groupName }) => {  
   const apiResp = await userAPI.createOrJoinGroup({userName, groupName});  

   if (!apiResp.error && apiResp.data._id) {
      setCurrentUser(userName);
      setTimeout(() => {         
         router.push(`/pair-up/${apiResp.data.groupName}`);
      }, 0);
   }   
};
