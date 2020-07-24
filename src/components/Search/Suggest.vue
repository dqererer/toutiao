<template>
  <transition name="fade">
    <div class="suggest layout">
        <ul>
          <li v-for="(item,index) in suggestList" v-bind:key='index' @click="goToGetResult(index)">
            <span class="iconfont">&#xe633;</span>
            <span class="red">{{keyword}}</span><span>{{item}}</span>
            <span class="right">go</span>
          </li>
        </ul>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Suggest',
  data: function(){
    return{
      suggestList:[],
    }
  },
  props: {
    keyword: String,
  },
  watch: {
    keyword: function(){
      this.getSuggestList();
    },
  },  
  components:{
  },
  created: function(){
    this.getSuggestList();
  },
  methods:{
    getSuggestList: function(){
      this.axios.get("./api/search/suggest").then((res) => {
        this.suggestList = res.data.data;
      })
    },
    goToGetResult: function(){
      this.$emit("component",{ type: 2 });
    },
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
ul{
  padding: 1rem 0;
}
li{
  height: 2.8rem;
  line-height: 2.8rem;
  font-size: 1.2rem;
  overflow: hidden;
  border-bottom: 0.01rem solid #eae7e7;
}
.iconfont{
  font-size: 1.5rem;
  color: #969090;
  margin-right: 0.8rem;
}
.red{
  color:red;
}
.right{
  float: right;
}
</style>
