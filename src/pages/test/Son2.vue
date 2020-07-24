<template>
  <div class="index">
    <div class="input">
      <input type="text" :value="value" @input="change">
      <span>ddd</span>
    </div>
    <div class="bus">
      <div class="brother">
        <span>我是弟弟,我家有{{money}}块钱</span>
        <div class="add" @click="add">赚钱1块钱</div>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from './Bus.js';
export default {
  name: 'Son2',
  // model: {
  //   prop: 'checked',
  //   event: 'change'
  // },
  // props: {
  //   checked: Boolean
  // },
 
  data: function(){
    return {
      a:1,
      money:0,
      // isShowSearchComponent: this.$store.state.isShowSearchComponent,
    }
  },
  props: {
    value: String,
  },
  created: function(){
    Bus.$on("notice",(val)=>{
      this.money += val;
    });
  },
  methods: {
    change: function(e){
      this.$emit('input', e.target.value);
    },
    add: function(){
      Bus.$emit('notice',1);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    border: .1rem solid red;
  }
</style>
