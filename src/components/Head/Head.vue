<template>
  <div class="head">
    <div class="content">
      <div class="search-wrap">
        <Search></Search>
      </div>
      <div class="post-wrap">
        <Post></Post>
      </div>
    </div>  
  </div>
</template>

<script>
import Post from './Post';
import Search from './Search';
export default {
  name: 'Head',
  created: function(){
    // alert(this.$store.state.count);
  },
  components:{
    Post,
    Search
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head{
    width: 100%;
    background: red;
    /* display: flex; */
    height: 5rem;
    padding-top: 2rem;
    box-sizing: border-box;
  }
  .head .content{
    width: 22rem;
    height: 3rem;
    margin: 0 auto; 
  }
  .head .content .search-wrap{
    float: left;
    /* flex:5; */
    width: 16rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .head .content .post-wrap{
    float: right;
    /* flex:1; */
    width: 2rem;
    height: 2.5rem;
  }
</style>
