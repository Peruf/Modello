<template>
    <md-app-toolbar class="">
        <md-button to="/" class="md-icon-button ">
            <md-icon>home</md-icon>
        </md-button>
        <md-button to="/1" class="link">1</md-button>
        <md-button to="/2" class="link ">2</md-button>
        <md-button to="/3" class="link ">3</md-button>
        <md-button to="/4" class="link ">4</md-button>
        <md-button to="/5" class="link  ">5</md-button>   
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