import { mapActions } from 'vuex';

export default {
  data() {
    return {
      userName: ''
    }
  },  
  methods: {
    ...mapActions('user', ['createOrJoinGroup']),    
    onChangeUserName(event) {
      this.userName = event.target.value; 
    },
    createOrJoin() {     
      this.createOrJoinGroup({
        userName: this.userName,
        groupName: this.$route.query.group
      });
    }
  }
};
