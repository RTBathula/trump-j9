import { mapState, mapActions, mapMutations } from 'vuex';
import { ProfilePictures } from '../../utils/profile';
import { Cards } from '../../utils/cards';
import ProfileScore from '../../components/ProfileScore';
import ServedCards from '../../components/ServedCards';

export default {
  components: {
    ProfileScore,
    ServedCards
  },
  data() {
    return {
      profile: ProfilePictures,
      cards: Cards
    }
  }, 
  created() {   
    this.getGroup(this.$route.params.groupName);    
  },
  computed: {
    ...mapState('user', ['group', 'teams']),
  },
  methods: {
    ...mapActions('user', ['getGroup'])
  }
};
