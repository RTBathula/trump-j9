<template>
  <section class="page">  
    <div class="page__bidding">     
      <div class="page__top-user-block">       
        <ProfileScore />
        <div class="served-cards">
          <ServedCards />
        </div>
      </div>

      <div class="page__mid-user-wrap">
        <div class="page__mid-user-left">
          <ProfileScore orientation="vertical" />
          <div class="served-cards">
            <ServedCards orientation="vertical" />
          </div>
        </div>
        <div class="page__mid-desk">
          
        </div> 
        <div class="page__mid-user-right">
          <div class="served-cards">
            <ServedCards orientation="vertical" />
          </div>          
          <ProfileScore orientation="vertical" />                  
        </div>         
      </div>
      <div class="page__bottom-user-block">
        <div class="served-cards">
          <ServedCards />
        </div>          
        <ProfileScore />         
      </div>
    </div>
  </section>
</template>

<script src="./control.js" scoped></script>
<style src="./style.scss" lang="scss" scoped></style>
