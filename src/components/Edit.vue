<template>
  <div class="edit" @click="showChannelEditComponent">
    <span class="iconfont">&#xe643;</span>
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
    showChannelEditComponent: function(){
      this.$store.commit('changeComponentShowStatus',this.componentName);
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit{
  position: absolute;
  top: 0rem;
  left: 21rem;
  background: linear-gradient(to left, transparent, white, transparent);
  height: 100%;
  width: 2rem;
  text-align: center;
}
</style>
