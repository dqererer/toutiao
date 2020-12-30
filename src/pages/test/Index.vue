<template>
  <div class="index">
    <div class="lifecycle-hooks">
      <p id="other">{{a}}</p>
      <p id="mine">我来了</p>
      <p v-if="1" id="rg">xixi</p>
    </div>
    <div class="v-modle">
      <p>双向绑定原理</p>
      <input id="input" type="text" :value="message" @input="changeMessage">
      <span>{{message}}</span>
    </div>
    <div class="dynamic-components">
      <component v-bind:is="componentName"></component>
    </div>
    <div class="form-input-model">
      <Son v-bind:value="title" @input111="title = $event"></Son>
      <Son2 v-model="message2" />{{message2}}
      <Son3 :title = 'title' :message = 'message' @change="fn"/>
    </div>
    <div class="Custom-directives">
      <span v-red>测试自定义指令</span>
    </div>
    <div class="filter">
      <span>过滤器</span>
      <span v-bind:xxx="a | add">{{100 | add}}</span>
    </div>
    <div class="keepalive">
      <keep-alive>
        <Son v-if="isSonShow"/>
        <Son2 v-else/>
      </keep-alive>
      <div @click="switchComponent">点击切换组件</div>
    </div>
    <div class="bibao">
      <div  @click="bibao">简单闭包</div>
      <div>
        <p>复杂闭包</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </div>
    <div @click="dingshiqi">
      触发定时器
    </div>
    <div @click="promise">
      触发promise
    </div>
    <div class="vuex">
      this is vuex
      {{vuexDate}}
    </div>
  </div>
</template>

<script>
import Son from './Son';
import Son2 from './Son2';
import Son3 from './Son3';
export default {
  name: 'Test',
  data: function(){
    return {
      a:1,
      message: '1',
      message2: '1',
      title: "0",
      self_title:"自定义事件的title",
      componentName:  "Son",
      isSonShow: true,
    }
  },
  computed:{
    vuexDate: function(){
      return this.$store.state.abc;
    }
  },
  directives:{
    red:{
      inserted: function(el){
        el.style.color = 'red';
      }
    }
  },
  filters:{
    add: function(val){
      val = val + "00";
      return val;
    },
  },
  components :{
    Son,
    Son2,
    Son3
  },
  beforeCreate: function(){
    // console.log('before', this.a);
    // this.alertf();
    // alert('beforeCreate');
  },
  created: function(){
    this.$store.dispatch('setDate'); 
    // console.log('ed',this.a);
      // alert('created');
      for(var i = 0;i<10;i++){
        console.log(i);
      }
      alert(i);
    //字符串多行
      var str = "abc"+
      "def";
      var str2 = [
        '123',
        '456'
      ].join('');
      console.log(str);
      console.log(str2);
  },
  beforeMount: function(){
    // console.log('beforemount', this,document.getElementById('mine').innerHTML);
    // console.log('beforemount', this,document.getElementById('other'));
    // console.log('beforemount', this,document.getElementById('rg'));

    // alert("beforeMount");
  },
  mounted: function(){
    // alert('mounted');
    // console.log('mounted', this,document.getElementById('mine').innerHTML);
    // console.log('mounted', this,document.getElementById('other').innerHTML);
    // console.log('beforemount', this,document.getElementById('rg').innerHTML);
    //闭包绑定
    var list = document.getElementsByTagName('li');
    for(var i = 0 ; i < list.length ; i++){
      // list[i].onclick = function(){
      //   alert(i);
      // }
      list[i].onclick = (function(n){
        return function(){
          alert(n);
        }
      })(i); 
    }
    console.log(list);
  },
  beforeDestroy: function(){
    // alert('beforedestroy');
  },
  methods: {
    alertf: function(){
      alert(1);
    },
    changeMessage: function(e){
      this.message = e.target.value;
      var that = this;
      setTimeout(function(){
        that.message = that.message + "0";
      },4000)
    },
    bindFunction: function(){
      Object.defineProperty("this")
    },
    test: function(){
      // console.log("test");
      alert("自定义事件");
    },
    change: function(){
      // console.log("进来了");
      this.$emit('self');
    },
    change_input: function(val){
      this.title = val;
    },
    fn: function(val){
      this.message = val;
    },
    switchComponent: function(){
      this.isSonShow = !this.isSonShow;
    },
    ini: function(){    //原型链、继承相关
      // 原型链继承
      var Person = function(sex,age){
        this.sex = sex;
        this.age = age;
      }
      var person = new Person('female',18);
      var Studunt = function(major){
        this.major = major;
      }
      Studunt.prototype = person;
      var s1 = new Studunt('math');
      // console.log(s1.sex,s1.age,s1.scroe);
      var Exam = function(score){
        this.scroe = score;
      }
      Exam.prototype = s1;
      var e = new Exam(100);
      console.log(e);
      //构造函数继承
      // var Person = function(age){
      //   this.age = age;
      // }
      // var Studunt = function(score,age){
      //   this.score = score;
      //   Person.call(this,age);
      // }
      // var s = new Studunt(100,20);

    },
    bibao: function(){
      function a(j){
        var i = 1;
        function b(){
          i++;
          j++
          console.log(i,j);
        }
        return b;
      }
      var add = a(0);
      console.log("add执行第一次");
      add();
      console.log("add执行第一次");
      add();
      console.log("add执行第一次");
      add();

    },
    dingshiqi: function(callback,time){
      var now = new Date();
      while((new Date() - now) < time){
        window.wait();
      }
      callback();
    },
    promise: function(){
      new Promise((lala,resolve)=>{
        resolve("做好了");
        lala("做不了了");
      }).then(
        (value)=>{
          console.log('好了',value);
        },
        (reason)=>{
          console.log('不好',reason);
        }
      )
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  padding-bottom: 7rem;
}
.event-test{
  height: 6rem;
  width: 20rem;
  line-height: 6rem;
  border: .1rem solid;
}
.keepalive{
  border: .1rem solid black;
}
li{
  height: 2rem;
  width: 10rem;
  border: 1rem solid black;
  }
</style>
