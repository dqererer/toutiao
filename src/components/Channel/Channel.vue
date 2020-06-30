<template>
  <div class="channel">
    <div class="list">
      <div class="item" v-for="(item,index) in list" v-bind:key="index">
      {{item}}
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"Channel",
  components:{
  },
  data: function(){
    return {
      list: ["aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii"]
    }
  },
  created: function(){

  },
}
</script>  
<style scoped>
.channel{
  width: 100%;
  height: 2rem;
  overflow-x: scroll;
  overflow-y: hidden;
}
.channel .list{
  white-space: nowrap;
  padding-right: 10rem;
}
.channel .list .item{
  margin-right: 1.5rem;
  display: inline-block;
}
.channel .list .item:last-child{
  margin: 0;
}
</style>
