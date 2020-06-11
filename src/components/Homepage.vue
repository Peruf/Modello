<template>
  <div class="home">
    <div class="md-layout md-gutter md-size-100">
        <md-card class="md-primary card md-layout-item md-medium-size-33 md-small-size-40 md-xsmall-size-100" v-for="game in games" :key="game.name">
          <div class="md-layout">
            <md-card-media>
              <img :src="game.images.original" class="card-image">
              <md-button :to="'/game/' + game.name" class="md-accent">{{game.name}}</md-button>
            </md-card-media>
          </div>
        </md-card>
      
    </div>

    
    <md-button class="md-accent md-fixed" @click="loadMore()">Load more</md-button>
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
    DataService.getGames().then(data => {
      this.games = data.data.games;
      console.log(this.games);
    });
  },
  methods: {
    loadMore(){
      this.loading = true;
      this.limit += 20;
      DataService.getGames(this.limit).then(data => {
      this.games = data.data.games;
      this.loading = false;
    });
    }
  }
}

</script>


<style scoped>
.card{
  margin-top: 10px;
}
.card-image{
  max-width: 250px;
  height: auto;
  padding: 5%;
}


</style>>

