<template>
  <div class="header">
    <Back componentName="search"></Back>
    <div class="input-wrap">
      <input type="text" v-focus :placeholder="keywords[0]" v-model="value" @focus="getFocus" @blur="loseFocus">
      <span class="iconfont">&#xe633;</span>
    </div>
    <button type="submit" @click="search">搜索</button>
  </div>
</template>

<script>
import Back from '../Back';
export default {
  name: 'Search',
  data: function(){
    return{
      value: "",
      isFocus: false,
    }
  },
  props:{
    newValue:String,
    keywords: Array,
    historyList: Array,
  },
  components:{
    Back,
  },
  watch: {
    value: function(newValue){
      if(this.isFocus){
        this.$emit('component',{ type: 1 , val: newValue });
      }
    },
    newValue:function(val){
      this.value = val;
    }
  },
  created: function(){
    
  },
  methods:{
    search: function(){
      let cur_value = this.value || this.keywords[0];
      this.$emit('search',cur_value);
      this.$emit('component',{ type: 2 , val: cur_value });
    },
    getFocus: function(){
      this.isFocus = true;
    },
    loseFocus: function(){
      this.isFocus = false;
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.header .input-wrap{
  position: relative;
  width: 17rem;
}
.header .input-wrap input{
  background: #86828214;
  border: 0;
  border-radius: 1rem;
  height: 2rem;
  width: 16.5rem;
  padding-left: 2.5rem;
  box-sizing: border-box;
}
.header .input-wrap span{
  position: absolute;
  top: .5rem;
  left: 1rem;
}

button{
  padding: 0;
  font-size: 1rem;
  border: 0;
  background: transparent;
}
</style>
