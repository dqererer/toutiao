<template>
  <div class="back" @click="hideCurrentComponent">《</div>
</template>

<script>

export default {
  name: 'Back',
  props:{
    componentName: String,
  },
  created: function(){
    // alert(this.$store.state.count);
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
  
</style>
