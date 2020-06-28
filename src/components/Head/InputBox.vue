<template>
  <div class="input-box" @click="showSearchComponent" ref="input">
    <div class="icon">
      <span class="iconfont">&#xe633;</span>
    </div>
    <transition name="update">
      <div class="keywords" ref="keywords">
        <div class="keyword" v-for="(item,index) in keywordsStr" v-bind:key="index">
          {{item}}
        </div>
      </div>
    </transition>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'InputBox',
  data: function(){
    return{
      keywords:[],
      interval: 0,
      curIndex: 0,
      timing: 0,
    }
  },
  computed:{
    keywordsStr: function(){
      let arr =[];
      for(var i = 0; i < this.keywords.length; i++){
        arr[i] = this.keywords[i][0] + '|' + this.keywords[i][1];
      }
      return arr;
    },
  },
  created: function(){
    this.getKeywords();
  },
  watch:{
    keywords: function(){
      this.$nextTick(function(){
        this.keywordsLocationIni();
      })
    },
    curIndex: function(){
      this.keywordsMove();
    },
  },
  destroyed:function(){
    clearInterval(this.interval);
  },
  methods:{
    showSearchComponent: function(){
      console.log(this.keywords);
      console.log(this.curIndex);
      console.log(this.keywords[3 - this.curIndex]);
      this.$store.commit('changeComponentShowStatus','search');
      this.$store.commit('setCurrentKeyword',this.keywords[3 - this.curIndex]);
    },
    getKeywords: function(){
      var that = this;
      this.axios.get("./api/search/keywords").then((res) => {
        var arr =res.data.data;
        for(var i=0,j=0; i < (arr.length/2); i++,j+=2){
          that.keywords[i]=[arr[j],arr[j+1]];
        }
        that.keywords.reverse();
        that.interval = setInterval(function(){
          that.curIndex++;
          if(that.curIndex > that.keywords.length){
            that.curIndex = 0;
          }
        },2*1000*5);
      })
    },
    keywordsLocationIni: function(){
        let elOfKeywords = this.$refs.keywords;
        let infoOfInput = this.$refs.input.getBoundingClientRect();
        let offset = -(elOfKeywords.scrollHeight/2 - infoOfInput.height/2);
        elOfKeywords.style.top = offset+ 'px'; 
    },
    keywordsMove: function(){
      clearInterval(this.timing);
      let el = this.$refs.keywords;
      let infoOfInput = this.$refs.input.getBoundingClientRect();
      var offset;
      console.log("curindex",this.curIndex);
      console.log("lenth",this.keywords.length);
      if(this.curIndex >= this.keywords.length){
        el.style.transform = 'translateY(0px)';
      }else{
        offset = infoOfInput.height * (this.curIndex - 1);
        var that = this;
        this.timing = setInterval(function(){
          if(offset >= infoOfInput.height * that.curIndex ){
            clearInterval(this.timing);
          }else{
            offset ++;
            console.log('offset',offset);
            el.style.transform = 'translateY(' + offset + 'px)';
          }
        },10)
      }
    },
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-box{
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 1rem;
  padding: 1rem 0 1rem 1rem;
  box-sizing: border-box;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  overflow: hidden;
}
.input-box .icon {
  width: 2rem;
}
.input-box .icon .iconfont{
  font-size: 1.5rem;
}
.input-box .keywords{
  position: relative;
  /* top: -139px; */
}
.input-box .keyword{
  width: 12rem;
  height: 2.5rem;
  line-height: 2.5rem;
  white-space: nowrap;
}
.input-box .keyword div{
  height: 2.5rem;
  line-height: 2.5rem;
}
.update-enter-active {
  /* transform: translateX(0);  */
  transition: all .1s ease-out;
}
.update-leave-active {
  transition: all .1s ease;
}
.update-enter
/* .fade-leave-active for below version 2.1.8 */ {
  transform: translateY(1rem);
}
.input-box .mask{
  width: 2rem;
  height: 3rem;
  background: linear-gradient(to left, white, transparent);
}

</style>
