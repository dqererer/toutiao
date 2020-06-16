<template>
  <div class="search" @click="showSearchComponent">
    <div class="icon">
      <span class="iconfont">&#xe633;</span>
    </div>
    <transition name="update">
      <div class="keywords">{{keyword}}</div>
    </transition>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: function(){
    return{
      keywords:[],
      curruntIndex: 0,
      interval: 0,
    }
  },
  computed:{
    keyword: function(){
      return this.keywords[this.curruntIndex % this.keywords.length] + " | " + this.keywords[(this.curruntIndex % this.keywords.length) + 1];
    },
  },
  created: function(){
    this.getKeyword();
  },
  destroyed:function(){
    clearInterval(this.interval);
  },
  methods:{
    showSearchComponent: function(){
      this.$store.commit('changeComponentShowStatus','search');
      this.$store.commit('setCurrentKeyword',this.keyword);
    },
    getKeyword: function(){
      var this_ = this;
      this.axios.get("./api/search/keywords").then((res) => {
        this_.keywords = res.data.data;
        this_.interval = setInterval(function(){
          this_.curruntIndex = this_.curruntIndex+2;
        },5*1000*60);
      })
    },
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 1rem;
  padding: 1rem 0 1rem 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.search .icon {
  width: 2rem;
}
.search .icon .iconfont{
  font-size: 1.5rem;
}
.search .keywords{
  width: 12rem;
  white-space: nowrap;
}
.search .mask{
  width: 2rem;
  height: 3rem;
  background: linear-gradient(to left, white, transparent);
}

</style>
