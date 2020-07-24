<template>
  <div class="index">
    <div class="input">
      <input :value="value" @input="function(e){change(e, 1)}">
      <!-- <input :value="value" @input="change"> -->
      <!-- <input :value="value" @input="$emit('input', $event.target.value)"> -->
      <span>{{value}}</span>
    </div>
    <div class="bus">
      <span>我是哥哥,我家有{{money}}块钱</span>
      <div class="add" @click="add">赚钱十块钱</div>
    </div>
    
  </div>
</template>

<script>
import Bus from './Bus.js';
export default {
  name: 'Son',
  data: function(){
    return {
      money:0,
    }
  },
  props: {
    value: String,
    // value:Number
  },
  // beforeCreate: function(){
  //   console.log("beforcreate",this.value);
  //   alert(1);
  // },
  created: function(){
    // console.log("created",this.value);
    Bus.$on("notice",(val)=>{
      this.money += val;
      console.log(this.money);
    });
  },
  beforeMount: function(){
    // console.log("beformount",this.value);
  },
  mounted: function(){
    // console.log("mounted",this.value);
  },
  methods: {
    change: function(e){
      // this.$emit('input', this.$event.target.value);
      this.$emit('input111', e.target.value);
      // this.$emit('input111', document.getElementById('input').value);
    },
    add: function(){
      // console.log('add')
      Bus.$emit("notice",10);
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    border: .1rem solid red;
  }
</style>
