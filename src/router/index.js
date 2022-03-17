import Vue from 'vue';
import VueRouter from 'vue-router';
import routerList from './router';

const NO_AUTH_PATHS = [
  '/login',
  '/404'   
];

Vue.use(VueRouter);

const Router = new VueRouter({
  mode: 'history', 
  hash: false,
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: routerList
});

Router.beforeEach((to, from, next) => { 
  next();  
});

export default Router;
