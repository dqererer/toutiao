<template>
  <div class="search layout">
    <Head :keywords="keywords" :historyList="historyList" :newValue="newValue" @search="addToHistroyList" @component="componentChange"></Head>
    <Keywords v-if="componentType == 0" :keywords="keywords" :historyList="historyList" @search="addToHistroyList" @delete="deleteHistroyList"></Keywords>
    <Suggest v-else-if="componentType == 1" :keyword="keyword" @component="componentChange"></Suggest>
    <Result v-else-if="componentType == 2" ></Result>
  </div>
</template>

<script>
import Keywords from './Keyword';
import Head from './Head'; 
import Suggest from './Suggest';
import Result from './Result';
import util from '../../utils/utils';
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
    console.log(this.historyList);
  },
  beforeDestroy: function(){
    this.$store.commit('changeKeywordsIndex');   
  },  
  methods:{
    getKeywords: function(){
      this.keywords = this.$store.state.currentKeyword;
    },
    getHistroyList: function(){
      var arr = util.getDataFromLocalStorage("searchList");
      if(arr){
        this.historyList = arr;
      }
    },
    addToHistroyList: function(value){ //used
      // debugger;
      this.newValue = value;
      var duplicateIndex = this.historyList.indexOf(value);
      if(duplicateIndex > -1){
        this.historyList.splice(duplicateIndex, 1);
      }
        // this.historyList.push(value);
        this.historyList.unshift(value);
        console.log(this.historyList);
        util.setDataToLocalStorage("searchList",this.historyList);
    },
    deleteHistroyList: function(){  //used
      util.removeDataFromLocalStorage("searchList");
      this.historyList = [];
    },
    componentChange: function(obj){
      this.componentType = obj.type;
      if(obj.val){
         this.keyword = obj.val;
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
