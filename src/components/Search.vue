<template>
  <div class="search" v-if="$store.state.showComponent.search.isShow">
    <div class="layout">
      <Back componentName="search"></Back>
    </div>
  </div>
</template>

<script>
import Back from './Back';
export default {
  name: 'Search',
  components:{
    Back,
  },
  created: function(){
    // alert(this.$store.state.count);
  },
  methods:{

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
