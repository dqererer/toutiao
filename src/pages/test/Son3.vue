<template>
  <div class="index">
    <span>{{message}}</span>
    <div @click="change(1)">改变</div>
    <span>{{title}}</span>
    <div @click="change(0)">改变</div>
  </div>
</template>
<script>
export default {
  name: 'Son3',
  props: {
    title: String,
    message: String,
  },
  created: function(){
 
  },
  methods: {
    change: function(type){
      if(type){
        this.$emit("change","message");
      }else{
        this.$emit("change","title");
      }
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
