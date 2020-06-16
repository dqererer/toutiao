<template>
  <transition name="fade">
    <div class="search layout" v-if="$store.state.showComponent.search.isShow">
      <div class="header">
        <Back componentName="search"></Back>
        <div class="input-wrap">
          <input type="text" autofocus="autofocus" placeholder="Search W3School">
          <span class="iconfont">&#xe633;</span>
        </div>
        <button>搜索</button>
      </div>
      <div class="hotwords">
        <ul>
          <li>
            <span>djdkjfdj</span>
          </li>
          <li>
            <span>dfkdkdjfd</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import Back from './Back';
export default {
  name: 'Search',
  components:{
    Back,
    keywords:"",
  },
  created: function(){
    console.log(this.$store.state);
    let obj = JSON.parse(JSON.stringify(this.$store.state));
    console.log(obj);
    this.keywords = obj.currentKeyword;
    
    // this.axios.get("../api/search/keywords").then((res) => {
    //   console.log(res.data.data);
    // })
    // 为啥在这不行，这种情况是自己请求自己的接口还是沿用前一个页面的接口
  },
  methods:{

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
}
li:nth-of-type(odd){
  border-right: .01rem solid #bbb6b6;
}
li:nth-of-type(even){
  padding-left: 1rem;
}

</style>
