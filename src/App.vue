<template>
  <div>
    <navBar />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin: 0;
  padding: 0px;
}
</style>

<script>
import navBar from './components/nav-menu.vue';

export default{
  name: "app",
  components: {
    navBar,
  },
};
</script>
