// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue'
import VueRouter from 'vue-router';
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// import Vue from 'vue'
import index from './pages/index/Index';
import ixigua from './pages/Ixigua/Index';
import mine from './pages/Mine/Index';
import test from './pages/test/Index';

Vue.use(VueRouter);
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  // { path: '/', component: index},
  { path: '*', redirect: 'index'},
  { path: '/index', component: index ,name:"index"},
  { path: '/ixigua', component: ixigua ,name:"ixigua"},
  { path: '/mine', component: mine ,name:"mine"},
  { path: '/test' , component:test ,name:'test'},
  { path: '*', redirect: 'index'},
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

router.beforeEach((to,from,next)=>{
  if(to.name == "mine" ){
    alert(2);
  }
  next();
})

export default router;

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// const app = new Vue({
//   router
// }).$mount('#app')

// 现在，应用已经启动了！
