<template>
  <section class="page">  
    <div class="page__pairup">
      <div class="page__pairup-title">Pair Up</div>
      <div class="page__pairup-pairs">
        <div class="page__team">
          <Pairing 
            name="A" 
            :group="group" 
            :team="teams.teamA"
            :onChangeTeamName="(val) => {onChangeTeamNameHandler(teams.teamA, val)}"
            :onToggleUser="(val) => {onToggleUserHandler(teams.teamA, val)}"
          />
        </div>
        <div class="page__team">
          <Pairing 
            name="B" 
            :group="group" 
            :team="teams.teamB"
            :onChangeTeamName="(val) => {onChangeTeamNameHandler(teams.teamB, val)}"
            :onToggleUser="(val) => {onToggleUserHandler(teams.teamB, val)}"
          />
        </div>
      </div>
      <div class="page__bid-btn">
        <button 
          :disabled="bidDisabled()" 
          :class="{'disabled': bidDisabled()}"
          @click="startBidding()"
        >
          Start Bidding
        </button>
      </div>    
    </div>
  </section>
</template>

<script src="./control.js" scoped></script>
<style src="./style.scss" lang="scss" scoped></style>
