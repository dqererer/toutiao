<template>
  <div class="index">
    <Head></Head>
    <div class="content layout">
      <Channel></Channel>
      <div class="content">
        index
      </div>
      
    </div>
  </div>
</template>

<script>
import Head from'../../components/Head/Head';
import Channel from '../../components/Channel/Channel'
export default {
  name: 'Index',
  created: function(){
    // alert(this.$store.state.count);
  },
  components:{
    Head,
    Channel
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
