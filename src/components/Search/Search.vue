<template>
  <transition name="fade">
    <div class="search layout">
      <Head :keywords="keywords" :historyList="historyList" :newValue="newValue" @search="addToHistroyList" @component="componentChange"></Head>
        <Keywords v-if="componentType == 0" :keywords="keywords" :historyList="historyList" @search="addToHistroyList" @delete="deleteHistroyList"></Keywords>
        <Suggest v-else-if="componentType == 1" :keyword="keyword" @component="componentChange"></Suggest>
        <Result v-else-if="componentType == 2" ></Result>
    </div>
  </transition>
</template>

<script>
import Keywords from './Keyword';
import Head from './Head'; 
import Suggest from './Suggest';
import Result from './Result';
export default {
  name: 'Search',
  data: function(){
    return{
      keywords:[],
      historyList:[],
      componentType: 0,
      newValue: "",
      keyword:"",
    }
  },
  components:{
    Keywords,
    Head,
    Suggest,
    Result,
  },
  created: function(){
    this.getKeywords();
    this.getHistroyList();
  },
  methods:{
    getKeywords: function(){
      this.keywords = this.$store.state.currentKeyword;
      console.log(this.keywords);
    },
    getHistroyList: function(){
      if(JSON.parse(localStorage.getItem("searchList"))){
        this.historyList = JSON.parse(localStorage.getItem("searchList"));
      }
    },
    addToHistroyList: function(value){ //used
      this.newValue = value;
      var duplicateIndex = this.historyList.indexOf(value);
      if(duplicateIndex > -1){
        this.historyList.splice(duplicateIndex, 1);
      }
        this.historyList.push(value);
        localStorage.setItem("searchList",JSON.stringify(this.historyList));
    },
    deleteHistroyList: function(){  //used
      localStorage.removeItem('searchList');
      this.historyList = [];
    },
    componentChange: function(obj){
      this.componentType = obj.type;
      alert(this.componentType)
      if(obj.val){
         this.keyword = obj.val;
      }
     
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active {
  /* transform: translateX(0);  */
  transition: all .1s ease-out;
}
.fade-leave-active {
  transition: all .1s ease;
}
.fade-enter
/* .fade-leave-active for below version 2.1.8 */ {
  transform: translateX(1rem);
}
</style>
