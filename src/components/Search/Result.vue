<template>
<div class="keywords">
搜索结果
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
    this.axios.get("/api/search/guess").then((res) => {
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
.search .header{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.search .header .input-wrap{
  position: relative;
  width: 18rem;
}
.search .header .input-wrap input{
  background: #86828214;
  border: 0;
  border-radius: 1rem;
  height: 2rem;
  width: 18rem;
  padding-left: 3rem;
  box-sizing: border-box;
}
.search .header .input-wrap span{
  position: absolute;
  top: .5rem;
  left: 1rem;
}
ul{
  display: flex;
  padding: 1rem 0;
  border-bottom: .01rem solid #e4dede;
}
li{
  width: 50%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 1rem;
  margin: 0.5rem 0;
  overflow:hidden;
}
li:nth-of-type(odd){
  border-right: .01rem solid #bbb6b6;
}
li:nth-of-type(even){
  padding-left: 1rem;
  box-sizing: content-box;
}
.top{
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  color: #757070;
}
</style>
