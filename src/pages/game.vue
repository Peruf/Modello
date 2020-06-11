<template>
  <div class="md-layout md-alignment-center-center">
      <!-- voglio che i game siano una card 
        https://www.boardgameatlas.com/api/search?name=Azul&client_id=vuxWmH7cLW per guardare le caratterisctiche dei giochi
      -->
      <md-card class="md-layout-item" v-if="game">
          <md-card-header class="md-layout">
            <div class="md-layout md-gutter">
                <md-card-media md-medium class="md-layout-item md-size-10" >
                    <img :src="game.images.medium" class="media"> <!-- url dinamico del game -->
                </md-card-media>
                <div class="md-layout-item">
                    <md-card-header-text>
                        <span class="md-title md-layout capitalize name"><b>{{game.name}}</b></span> <!-- prendo il nome del game -->
                    </md-card-header-text> 
                    <div class="md-subhead descrizione">{{game.description}}</div>
                </div>
            </div>
          </md-card-header>    
          <md-card-content>
              <md-table>
                  <md-table-row>
                    <md-table-cell class="upper"><b>Numero giocatori</b></md-table-cell>
                    <md-table-cell>Da {{game.min_players}} a {{game.max_players}}</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell class="upper"><b>Età minima</b></md-table-cell>
                    <md-table-cell>{{game.min_age}}</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell class="upper"><b>Prezzo</b></md-table-cell>
                    <md-table-cell>{{game.price}} $</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell class="upper"><b>Tempo di gioco</b></md-table-cell>
                    <md-table-cell>Da {{game.min_playtime}} a {{game.max_playtime}} minuti</md-table-cell>
                  </md-table-row>
              </md-table>
          </md-card-content>
      </md-card>
      
  </div>
</template>


<script>
import dataservice from '@/dataservice.js'

export default {
    data: function(){
        return{
            game: null,
        }
    },
    watch: {
        $route: function(){
            this.load();
        }
    },
    created: function(){
        this.load();
    },
    methods: {
        load: function(){
            dataservice.getGame(this.$route.params.name).then((data) => {
                this.game = data.data.games[0];
                //console.log(this.game);
            });
        }
    }
}
</script>

<style scoped>

.name{
    padding-left: 1%;
}
.descrizione{
    margin-top: 1em !important;
    text-align: left;
    padding-left: 1%;
}
.nobot{
    border-bottom-width: 0ch;
}
</style>