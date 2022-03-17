import { capitalizeFirstLetter } from '../../utils/text';

export default {
  props: ['name', 'group', 'team', 'onToggleUser', 'onChangeTeamName'],
  data() {
    return {
      userName: ''
    }
  }, 
  methods: {
    onChangeName(event) {
      this.onChangeTeamName(event.target.value);
    },    
    onToggle(event) {
      this.onToggleUser(event.target.value); 
    }
  },
  filters: {
    firstLetterCap(txt) {
      return capitalizeFirstLetter(txt || '');
    }
  }
};
