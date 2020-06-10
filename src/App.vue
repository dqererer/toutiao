<template>
  <div id="app">
    <router-view></router-view>
    <tab v-if="$store.state.isShowTab">{{$store.state.isShowTab}}</tab>
  </div>
</template>

<script>
import Tab from "./components/Tab";
export default {
  name: 'App',
  data: function(){
    return{
      isShowTab:true,
    }
  },
  components:{
    Tab,
  },
  created: function(){
    this.isShowTab = this.$store.state.isShowTab;
  }
}
</script>

<style scoped>
  
</style>
