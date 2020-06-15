<template>
  <div class="search" @click="showSearchComponent">
    <div class="icon">
      <span class="iconfont">&#xe633;</span>
    </div>
    <div class="keywords">{{keyword}}</div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: function(){
    return{
      keywords:[],
    }
  },
  computed:{
    keyword: function(){
      return this.keywords[0] + " | " + this.keywords[1];
    },
  },
  created: function(){
    this.axios.get("./api/search/keywords").then((res) => {
      this.keywords = res.data.data;
      console.log(this.keywords);
    })
  },
  methods:{
    showSearchComponent: function(){
      this.$store.commit('changeComponentShowStatus','search');
    }
  }
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
