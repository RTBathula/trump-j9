import { findSelectedUser, toggledUserTeam, reflectedUserTeam } from '../../utils/pair-up';

export const getGroup = (state, { apiResp }) => { 
  if (apiResp.error) {    
    state.group = null;
    return;
  }

  state.group = apiResp.data;
  const teamList = apiResp.data.userList.map((u) => ({ 
    name: u.name, 
    selected: false,
    disabled: false 
  }));

  state.teams = {
    teamA: {
      ...state.teams.teamA,
      name: 'A',
      users: teamList
    },
    teamB: {
      ...state.teams.teamB,
      name: 'B',
      users: teamList
    },
  };
};

export const toggleUserForTeam = (state, { team, name }) => {
  let toggledTeam = 'teamA';
  let reflectedTeam = 'teamB';

  if (team.name === 'B') {
    toggledTeam = 'teamB';
    reflectedTeam = 'teamA';
  }

  const u = findSelectedUser(state.teams[toggledTeam].users, name);
  if (state.teams[toggledTeam].selectedUsersCount >= 2 && !u.selected) {
    return;
  }
  
  const { 
    toggledList, 
    noOfSelectedUsers, 
    toggledUserSelected, 
  } = toggledUserTeam(state.teams[toggledTeam].users, name);

  const {
    reflectedList,
    reflectedNoOfSelectedUsers,
  } = reflectedUserTeam(state.teams[reflectedTeam].users, name, toggledUserSelected);

  state.teams[toggledTeam].users = toggledList;
  state.teams[toggledTeam].selectedUsersCount = noOfSelectedUsers;

  state.teams[reflectedTeam].users = reflectedList;
  state.teams[reflectedTeam].selectedUsersCount = reflectedNoOfSelectedUsers;
};

export const changeTeamName = (state, { team, label }) => {
  state.teams[`team${team.name}`].label = label;  
};

