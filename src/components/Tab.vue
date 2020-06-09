<template>
  <div class="tab">
    <div class="wrap">
      <router-link to="/index">
        <span class="iconfont">&#xe608;</span>
        <p>首页</p>
      </router-link>
      <router-link to="/about">西瓜视频</router-link>
      <router-link to="/about"><span v-if="1">未登录</span><span v-else>我的</span></router-link>
    </div>
  </div>
</template>

<script>
import '../assets/font_1589564_fgqs3ab19vr/iconfont.css'
export default {
  name: 'Tab',
  created: function(){
    // alert(this.$store.state.count);
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3rem;
  } 
  .tab .wrap{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  a:link,
  a:visited,
  a:hover,
  a:active{
    color: black;
    text-decoration: none;
  } 
</style>
