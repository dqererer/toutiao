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
  width: 200%;
}
.channel .list .item{
  width: 4rem;
  float: left;
}
/* .channel .list{
  display: flex;
} 
.channel .list .item{
  width: 4rem;
}   */
</style>
