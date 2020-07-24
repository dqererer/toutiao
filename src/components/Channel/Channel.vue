<template>
  <div class="channel">
    <div class="list">
      <div class="item" v-for="(item,index) in list" v-bind:key="index">
      <span>{{item.title}}</span>
      <div class="icon"></div>
    </div>
    </div>
  </div>
</template>
<script>
import util from '../../utils/utils';
export default {
  name:"Channel",
  components:{
  },
  data: function(){
    return {
      list: [],
    }
  },
  created: function(){
    this.list = util.getDataFromLocalStorage("selectedChannelList");
    this.list.reverse();
    console.log(this.list);
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
  position: relative;
}
.channel .list .cur{
  color:red;
}
.channel .list .item .icon{
  position: absolute;
  top: 0rem;
  right: -.5rem;
  background: red;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 0.5rem;
}
.channel .list .item:last-child{
  margin: 0;
}
</style>
