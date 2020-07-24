<template>
  <div id="app">
    <div class="page">
      <router-view></router-view>
      <Tab></Tab>
    </div>
      <transition name="basic fade">
        <Search class="component"  v-if="$store.state.showComponent.search.isShow"></Search>
      </transition>
      <transition name="basic pop">
        <MyChannel class="component"  v-if="$store.state.showComponent.myChannel.isShow"></MyChannel>
      </transition>
  </div>
</template>

<script>
import Tab from './components/Tab';
import Search from './components/Search/Search';
import MyChannel from './components/myChannel/MyChannel';
export default {
  name: 'App',
  data: function(){
    return {
      // isShowSearchComponent: this.$store.state.isShowSearchComponent,
    }
  },
  components:{
    Tab,
    Search,
    MyChannel,
  },
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
.fade-enter-active {
  /* transform: translateX(0);  */
  transition: all .2s ease-out;
}
.fade-leave-active {
  transition: all .2s ease;
}
.fade-enter
/* .fade-leave-active for below version 2.1.8 */ {
  transform: translateX(2rem);
}
.pop-enter-active{
  transform: translateX(0); 
  transition: all .2s ease-out;
}
.pop-leave-active{
  transition: all .2s ease;
}
.pop-enter , .pop-leave-to
/* .fade-leave-active for below version 2.1.8 */ {
  transform: translateY(100%);
}
</style>
