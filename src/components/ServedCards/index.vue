<template>
  <section :class="'served-cards ' + orientation">
    <div class="served-cards__deck"> 
      <img class="card" :src="cards.Blue_Back.path">
      <img class="card" :src="cards.Blue_Back.path"> 
      <img class="card" :src="cards.Blue_Back.path"> 
      <img class="card" :src="cards.Blue_Back.path">      
      <img class="card" :src="cards.Blue_Back.path"> 
      <img class="card" :src="cards.Blue_Back.path"> 
      <img class="card" :src="cards.Blue_Back.path"> 
      <img class="card" :src="cards.Blue_Back.path"> 
      <img class="card" :src="cards.Blue_Back.path">

      <div class="trump-deck">              
        <img class="card" :src="cards.Blue_Back_Trump.path">                  
      </div>
    </div>
  </section>
</template>

<script src="./control.js" scoped></script>
<style src="./style.scss" lang="scss" scoped></style>
