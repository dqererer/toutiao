<template>
  <div class="my-channel layout">
    <div class="top">
      <span @click="closeComponent">*</span>
      <span class="iconfont">&#xe633;</span>
    </div>
    <div class="content">
      <div class="section selected">
        <div class="wrap">
          <div class="title">
            <span>我的频道</span>
            <span class="info">点击进入频道</span>
          </div>
          <span class="edit" @click="edit">{{editTitle}}</span>
        </div>
        <ul>
          <div class="word-list">
            <li v-for="(item,index) in selectedList" v-bind:key="index" @click="removeFromSelectedList(index)">
              <div class="item">
                <span>{{item.title}}</span>
                <div v-if="isEditable" class="icon">*</div>
              </div>
            </li>
          </div>
        </ul>
        
      </div>
      <div class="section suggest">
        <div>
          <div class="title">
            <span>为你推荐</span>
            <span class="info">点击添加频道</span>
          </div>
        </div>
        <ul>
          <div class="word-list">
            <li v-for="(item,index) in list" v-bind:key="index">
              <div class="item">
                {{item}}
              </div>
            </li>
          </div>
        </ul>
        
      </div>
      <div class="section hot">
        <div class="nav">
          <span v-for="(item,index) in allChannelList" :key="index" @click="scrollToTheTargetChannel(index)">
            <span>{{item.title}}</span>
          </span>
        </div>
        <ul>
          <li v-for="(item,index) in allChannelList" v-bind:key="item.id" ref="targetChannel">
            <p v-if="index && item.list.length" class="subtitle">
              {{item.title}}
            </p>
            <div class="word-list">
              <div class="item" v-for="(word,id) in item.list" v-bind:key="word.id" @click="select(index,id)">
                <transition  name="fly">
                  <div class="wrap"> 
                    <span>{{word.title}}</span>
                    <div class="icon">+</div>
                  </div>
                </transition>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>      
  </div>
</template>
<script>
import util from '../../utils/utils'
export default {
  name:"MyChannel",
  components:{
  },
  data: function(){
    return {
      list: ["aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii"],
      selectedList:[],
      componentName: "myChannel",
      allChannelList:[],
      isEditable: false,
    }
  },
  computed:{
    editTitle: function(){
      return !this.isEditable ? "编辑" : "完成";
    },
  },
  created: function(){
    this.getAllChannelData();
    this.getSelectedData();
  },
  methods: {
    closeComponent: function(){
      this.$store.commit("changeComponentShowStatus",this.componentName);
    },
    getAllChannelData: function(){
      var that = this;
      this.axios.get("/api/channel/all").then((res) => {
        that.allChannelList = res.data.data;
        this.selectedList.forEach(function(item){
          that.allChannelList[item.mainID]['list'].splice(item.subID,1);
        });
      })
    },
    getSelectedData: function(){
      var arr = util.getDataFromLocalStorage("selectedChannelList");
      if(arr){
        this.selectedList = arr;
      }
    },
    setSelectedData: function(){
      util.setDataToLocalStorage("selectedChannelList",this.selectedList);
    },
    select: function(index,id){
      //向selectedList里添加
      let obj = {
        mainID: index,
        subID: id,
        title: this.allChannelList[index]['list'][id]['title']
      }
      this.selectedList.push(obj);
      //从allchannellist里删减
      this.allChannelList[index]['list'].splice(id,1);
      this.setSelectedData();
    },
    scrollToTheTargetChannel: function(index){
      // 定位到了元素
      let el = this.$refs.targetChannel[index];
      // 获取元素坐标
      let y = el.getBoundingClientRect().y;
      console.log(y);
      el.scrollTop = 900;
    },
    edit: function(){
      this.isEditable = !this.isEditable;
    },
    removeFromSelectedList: function(index){
      if(this.isEditable){
         //获取当前word相关信息
        console.log(this.selectedList[index]);
        var mainID = this.selectedList[index].mainID;
        var obj = {
          id: this.selectedList[index].subID,
          title: this.selectedList[index].title,
        }
        this.allChannelList[mainID]['list'].unshift(obj);
        //向alllist里加入
        this.selectedList.splice(index,1);
        this.setSelectedData();
        //从selectedlist里删除
      }
    },
  }
}
</script>  
<style scoped>
.my-channel .top{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.my-channel .top span{
  font-size: 1.5rem;
}
.my-channel .content{
  height: 100%;
  overflow: scroll;
}
.my-channel .content .section{
  margin-top: 1rem;
}
.my-channel .content .selected .wrap{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.my-channel .content .title{
  font-size: 1.2rem;
  font-weight: 500;
}
.my-channel .content .title span{
  font-size: 1.2rem;
  font-weight: 500;
}
.my-channel .content .title .info{
  font-size: 0.5rem;
  font-weight: normal;
  color: gray;
  margin-left: 0.2rem;
}
.my-channel .content .selected .edit{
  color: red;
}
ul .word-list{
  overflow: hidden;
  width: 100%;
  padding-top: 1rem;
}
ul .word-list .item{
  float: left;
  margin-right: 0.7rem;
}
ul li .item{
  margin-bottom: 1rem;
  width: 5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  border-radius: 0.5rem;
  background: #65616138;
}
.my-channel .content .hot .nav{
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  font-size: 1.2rem;
  /* font-weight: bold; */
}
.my-channel .content .hot .nav span{
  display: inline-block;
  margin-right: 1.5rem;
}
.my-channel .content .hot .nav span:last-of-type{
  margin-right: 0;
}
.my-channel .content .hot ul li .item{
  background: white;
  border: 0.01rem #ececec solid;
  position: relative;
  box-sizing: border-box;
}
.my-channel .content .hot ul li .item .icon{
  position: absolute;
  top: -0.8rem;
  left: 3.8rem;
}
.my-channel .content .selected ul li .item{
  position: relative;
}
.my-channel .content .selected ul li .item .icon{
  position: absolute;
  top: -0.6rem;
  left: 4.2rem;
}

</style>
