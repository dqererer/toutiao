<template>
  <div id="app">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
import Tab from "./components/Tab";
export default {
  name: 'App',
  components:{
    Tab,
  }
}
</script>

<style scoped>
  
</style>
