<template>
  <div class="home">
    <div class="md-layout md-gutter md-size-100">
        <md-card class="md-primary card md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-40" v-for="game in games" :key="game.name">
          <md-card-media-cover class="md-layout">
            <md-card-media>
              <img :src="game.images.large" class="card-image"><br>
              <md-button :to="'/game/' + game.name" class="md-accent">{{game.name}}</md-button>
            </md-card-media>
          </md-card-media-cover>
        </md-card>
      
    </div>


    <md-progress-spinner md-mode="indeterminate" :md-diameter="20" :md-stroke="2" v-if="loading" class="md-accent" style="margin-top:1em;"></md-progress-spinner>
  </div>
</template>

<script>
import DataService from '@/dataservice.js'

export default {
  name: 'HomePage',
  data: function(){
    return {
      games: [],
      loading: false,
      limit: 20,
    }
  },
  created: function() {
    this.loading = true;
    DataService.getGames().then(data => {
      this.games = data.data.games;
      this.loading = false;
    });
  }
}

</script>


<style scoped>
.card{
  margin-top: 10px;
  max-height: 200px;
  max-width: auto;
}
.card-image{
  margin-top: 5%;
  height: 150px;
  width: auto;
}



</style>>

