<template>
<div class="keywords">
  <div class="hotwords">
    <ul>
      <li v-for="(item,index) in keywords" v-bind:key="index">
        <span @click="searchKeyword('keywords',index)">{{item}}</span>
      </li>
    </ul>
  </div>
  <div class="history-list" v-if="historyList.length">
    <div class="top">
      <div class="title">
        <span>历史记录</span>
        <span class="iconfont">&#xeb8f;</span>
      </div>
      <div class="delete">
        <span class="iconfont" @click="deleteHistroyList">&#xe716;</span>
      </div>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item,index) in historyList" v-bind:key="index">
          <span @click="searchKeyword('historyList',index)">{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="guess">
    <div class="top">
      <div class="title">猜你想搜</div>
      <span class="iconfont yb" @click="deleteHistroyList">&#xe73e;</span>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item,index) in guessList" v-bind:key="index">
          <span @click="searchKeyword('guessList',index)">{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'Search',
  data: function(){
    return{
      guessList: [],
    }
  },
  props:{
    keywords: Array,
    historyList: Array,
  },
  components:{
    
  },
  created: function(){
    this.axios.get("./api/search/guess").then((res) => {
      this.guessList = res.data.data;
    })
  },
  methods:{
    searchKeyword: function(type,index){
      let cur_value = "";
      if (type == 'historyList'){
        cur_value = this.historyList[index];
      }else if(type == 'keywords'){
        cur_value = this.keywords[index];
      }else{
        cur_value = this.guessList[index];
      }
      this.$emit('search',cur_value);
    },
    deleteHistroyList: function(){
      this.$emit('delete');
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  display: flex;
  flex-wrap: wrap;
  padding: 0.8rem 0;
  border-bottom: .01rem solid #e4dede;
}
li{
  width: 50%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 1rem;
  margin: 0.5rem 0;
  overflow:hidden;
  box-sizing: border-box;
}
li:nth-of-type(odd){
  border-right: .01rem solid #cac6c673;
}
li:nth-of-type(even){
  padding-left: 1rem;
}
.top{
  display: flex;
  padding-top: 0.5rem;
  justify-content: space-between;
  align-items: center;
  color: #757070;
}
.top .title{
  width: 5.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #b7b2b2;
}
.history-list .top .delete .iconfont{
  font-size: 1.5rem;
}
.yb{
  font-size: 1.5rem;
}
.guess ul{
  border: 0;
}
</style>
