<template>
  <section class="pairing">
    <p class="pairing__title">Team {{team.name}}</p>
    <input
      class="pairing__teamname"
      type="type"
      :value="team.label" 
      placeholder="Or Enter team name"
      @change="onChangeName($event)"          
    >
    <ul class="pairing__members">
      <li v-for="(user, key) in team.users" :key="key">
        <input 
          type="checkbox" 
          :value="user.name"
          :checked="user.selected"
          :disabled="user.disabled || !user.selected && team.selectedUsersCount >= 2"
          @change="onToggle($event)"
        >
        <span>{{user.name | firstLetterCap}}</span>
      </li>
    </ul> 
  </section>
</template>

<script src="./control.js" scoped></script>
<style src="./style.scss" lang="scss" scoped></style>
