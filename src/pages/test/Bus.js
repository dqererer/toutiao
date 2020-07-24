import Vue from 'vue';
export default new Vue();

//bus原理
// var listener = {
//   'login':  [
//     function fn1(){},
//     function fn2(){}
//   ],
//   'logout': [
//     function fn1(){},
//     function fn2(){}
//   ]
//  }
  
//on eventbus.on(name,fn),注册进去了
// listener[name].push(fn) 
//emit  eventbus.emit(name),触发
// listener[name].forEach(function(item){
//   item();
// })
