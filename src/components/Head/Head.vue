<template>
  <div class="head">
    <div class="content">
      <div class="input-wrap">
        <InputBox></InputBox>
      </div>
      <div class="post-wrap">
        <Post></Post>
      </div>
    </div>  
  </div>
</template>

<script>
import Post from './Post';
import InputBox from './InputBox';
// improt {mapGetter} from 'vuex';
import { mapState } from 'vuex'
export default {
  name: 'Head',
  created: function(){
    // alert(this.$store.state.count);
  },
  components:{
    Post,
    InputBox
  },
  computed: {
    xxx: function(){
      return this.a + 1;
    },
    // ...mapState(['count0', 'count1', 'count2']),
    ...mapState({
      name: 'count0',
      age: 'count1',
      cc: state => {return state.count2 + state.count0}
    })
  }
  // computed:{
  //   count: function(){
  //     return this.$store.state.count;
  //   },
  //   count2: function(){
  //     return this.$store.state.count2;
  //   }
  // }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head{
    width: 100%;
    background: red;
    height: 5rem;
    padding-top: 2rem;
    box-sizing: border-box;
  }
  .head .content{
    width: 22rem;
    height: 3rem;
    margin: 0 auto; 
  }
  .head .content .input-box{
    float: left;
    width: 16rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
  .head .content .post-wrap{
    float: right;
    /* flex:1; */
    width: 2rem;
    height: 2.5rem;
  }
</style>
