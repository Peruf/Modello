<template>
  <div class="home">
    <navbar></navbar>
    
    <md-app>
      <md-app-content>
        <router-view></router-view> 
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomePage',
  components: {
    'navbar': Navbar,
  }
}
</script>


<style>

</style>
