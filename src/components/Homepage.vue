<template>
  <div class="home">
    <md-list>
      <div v-for="game in games" :key="game.name">
        <md-list-item :to="'/game/' + game.name">
          <span>{{game.name}}</span>
        </md-list-item>
        <md-divider></md-divider>
      </div>
    </md-list>
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


<style>

</style>
