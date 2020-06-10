<template>
  <div class="post">
    <div class="header">+</div> 
    <div class="bottom">发布</div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  created: function(){
    // alert(this.$store.state.count);
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .post{
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }
  .post .header{
    width: 1.5rem;
    height: 1.5rem;
    background: white;
    border-radius: 1rem;
    text-align: center;
    color: red;
    font-weight: bolder;
  }
  .post .bottom{
    color: white;
    font-size: 0.5rem;
  }
</style>
