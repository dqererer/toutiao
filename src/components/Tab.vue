<template>
  <div class="tab">
    <div class="wrap">
      <router-link to="/index">
        <div class="item cur">
          <span class="iconfont">&#xe61f;</span>
          <p>首页</p>
        </div> 
      </router-link>
      <router-link to="/ixigua">
        <div class="item">
          <span class="iconfont">&#xe615;</span>
          <p>西瓜视频</p>
        </div>
      </router-link>
      <router-link to="/mine">
        <div class="item">
          <span class="iconfont">&#xe608;</span>
          <span v-if="1">未登录</span>
          <span v-else>我的</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

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
    background: #e0e1e636;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 4rem;
  } 
  .tab .wrap{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .tab .wrap .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .tab .wrap .item .iconfont{
    font-size: 1.5rem;
  }
  .router-link-active{
    color: red;
  }
</style>
