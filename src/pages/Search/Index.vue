<template>
  <div class="search">
    search
  </div>
</template>

<script>
export default {
  name: 'Search',
  components:{
    
  },
  created: function(){
    this.$store.commit('changeTabShowStatus');
  },
  destroyed: function(){
    this.$store.commit('changeTabShowStatus');
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
