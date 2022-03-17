import { mapState, mapActions, mapMutations } from 'vuex';
import Pairing from '../../components/Pairing';

export default {
  components: {
    Pairing
  },
  data() {
    return {
      userName: ''
    }
  },
  created() {
    this.getGroup(this.$route.params.groupName);    
  },
  computed: {
    ...mapState('user', ['group', 'teams']),
  },
  methods: {
    ...mapActions('user', ['getGroup']),
    ...mapMutations('user', ['toggleUserForTeam', 'changeTeamName']),
    onChangeTeamNameHandler(team, label) {
      this.changeTeamName({team: team, label: label});
    },
    onToggleUserHandler(team, name) {
      this.toggleUserForTeam({team: team, name: name});
    },
    bidDisabled() {
      return this.teams.teamA.selectedUsersCount < 2 || this.teams.teamB.selectedUsersCount < 2;    
    },     
    startBidding() {
      this.$router.push(`/bidding/${this.$route.params.groupName}`);
    }
  }
};
