<template>
  <div id="app">
    <div class="page">
      <router-view></router-view>
      <Tab></Tab>
    </div>
    <Search class="component"></Search>

  </div>
</template>

<script>
import Tab from './components/Tab';
import Search from './components/Search';
export default {
  name: 'App',
  data: function(){
    return{
      // isShowSearchComponent: this.$store.state.isShowSearchComponent,
    }
  },
  components:{
    Tab,
    Search,
  },
  created: function(){
    // this.isShowSearchComponent = ;
  }
}
</script>

<style scoped>
#app{
  height: 100%;
}
.component{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: white;
}
</style>
