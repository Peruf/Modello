<template>
  <div class="home">
    <div class="md-layout md-gutter md-alignment-top-left">
      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card class="md-primary card">
          <div v-for="game in games" :key="game.name" class="md-layout md-alignmet-central-left">
            <md-card-cover md-text-scrim>
              <md-card-media  class="" md-ratio="3:4">
                <img :src="game.images.medium" class="card-image">
                <md-button :to="'/game/' + game.name" class="md-accent">{{game.name}}</md-button>
              </md-card-media>
            </md-card-cover>
          </div>
        </md-card>
      </div>
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
  max-width: 300px;
  height: auto;
}
.card-image{
  padding: 5%;
}
</style>>

