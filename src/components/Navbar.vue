<template>
     <md-app-toolbar class="md-primary">
        <md-button to="/" class="md-icon-button md-primary">
        <md-icon>home</md-icon>
      </md-button>
        <md-button to="/1" class="link  md-accent">1</md-button>
        <md-button to="/2" class="link  md-accent">2</md-button>
        <md-button to="/3" class="link  md-accent">3</md-button>
        <md-button to="/4" class="link  md-accent">4</md-button>
        <md-button to="/5" class="link  md-accent">5</md-button>
        
      </md-app-toolbar>  
</template>

<script>
    export default {
        name: 'Navbar',
        data: function() {
            return {
                showNav: false
            }
        }
    }
</script>

<style scoped>
    .nohover:hover{
        background-color: #448aff !important;
    }
</style>>