<template>
  <div id="app">
    <Header />
    <section id="app__content">
      <div id="app__app-screen">
        <router-view></router-view>
      </div>
    </section>   
  </div>
</template>

<script>
  import Header from './containers/Header';
  import Footer from './containers/Footer';
  import 'cardsJS/cards';

  export default {
    name: 'app',
    components: {
      Header,
      Footer,
    }    
  }
</script>

<style lang="scss">
  @import 'assets/scss/style';

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    &__content {
      @extend .full-screen;
      flex: 1;
      display: flex;
      justify-content: center;
    }

    &__app-screen {
      @extend .app-screen;     
      background-color: $ternary;

      @media only screen and (max-width: 576px) {
        width: 100%;
      }     
    }
  }
</style>
