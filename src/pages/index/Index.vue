<template>
  <keep-alive>
  <div class="index">
    <Head></Head>
    <div class="content layout">
      <div class="header">
        <div class="channel">
          <Channel></Channel>
        </div>
        <div class="edit">
          <Edit componentName="myChannel"></Edit>
        </div>
      </div>
      <div class="content">
        index
      </div>
      
    </div>
  </div>
  </keep-alive>
</template>

<script>
import Head from'../../components/Head/Head';
import Channel from '../../components/Channel/Channel';
import Edit from '../../components/Edit';
export default {
  name: 'Index',
  created: function(){
    // alert(this.$store.state.count);
  },
  components:{
    Head,
    Channel,
    Edit
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
  position: relative;
}
.channel{
  margin-right: 1rem;
}
</style>
