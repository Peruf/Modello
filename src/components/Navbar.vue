<template>
     <md-app-toolbar class="md-primary">
        <h1>Ciao</h1>
        <router-link to="/1" class="link">1</router-link>
        <router-link to="/2" class="link">2</router-link>
        <router-link to="/3" class="link">3</router-link>
        <router-link to="/4" class="link">4</router-link>
        <router-link to="/5" class="link">5</router-link>
        
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