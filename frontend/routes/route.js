import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login/',
      name: 'login',
      component: () => import('../pages/login.vue')
    },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      title: 'Default Layout',
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../pages/dashboard.vue'),
          title: 'Admin Dashboard',
        },
        {
          path: '/about/',
          name: 'About',
          component: () => import('../pages/about.vue'),
          title: 'About Page'
        },
      ]
    },
  ].map(route => setMeta(route))
});

function setMeta(route) {
  if(route.children) {
    route.children.map(childRoute => setMeta(childRoute))
  }
  try {
    route.meta = {
      title: route.title || route.name
    }
    delete route.title
  } catch (e) {
  }

  return route
}
