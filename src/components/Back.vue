<template>
  <div class="back" @click="hideCurrentComponent">
    <span class="iconfont">&#xe60a;</span>
  </div>
</template>

<script>

export default {
  name: 'Back',
  props:{
    componentName: String,
  },
  created: function(){
  },
  methods:{
    hideCurrentComponent: function(){
      this.$store.commit('changeComponentShowStatus',this.componentName);
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconfont{
  font-size: 1.5rem;
}
</style>
