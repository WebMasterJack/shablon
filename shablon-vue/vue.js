import Home from './js/home.js';


const routes = [
    { path: '/', 
    component: Home 
  }];
  let app=Vue.createApp({});
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHistory('/'),
    routes, // short for `routes: routes`
  })
  app.use(router); 
app.mount('#app')