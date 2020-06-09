<template>
  <div id="app">
    <md-app>
      <navbar slot="md-app-toolbar"></navbar>
      <home></home>
      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import home from "@/components/Homepage.vue";
import navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    home: home,
    navbar: navbar
  }
};
</script>


<style>
.link {
  border-radius: 10px !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
