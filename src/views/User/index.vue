<template>
  <section class="page">  
    <div class="page__user">
      <div class="title">
        <p>Play <span>Trump</span></p>
        <img src="../../assets/logo.png" />
      </div>
      <div class="input">
        <p v-if="$route.query.group">
          <span class="group-label">Group:</span>
          <span class="group-name">
            {{$route.query.group}}
          </span>
        </p>
        <input 
          type="type" 
          placeholder="Enter Your Name"
          @change="onChangeUserName($event)"
        >
        <button @click="createOrJoin()">
          {{$route.query.group ? 'Join the group' : 'Start new group'}}
        </button>
      </div>      
    </div>
  </section>
</template>

<script src="./control.js" scoped></script>
<style src="./style.scss" lang="scss" scoped></style>
