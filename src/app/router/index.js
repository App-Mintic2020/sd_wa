import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home.vue';
import Planilla from './../components/Planilla.vue';
import Equipos from './../components/Equipos.vue';

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/planilla',
      name: 'Planilla',
      component: Planilla,
    },
    {
      path: '/equipos',
      name: 'Equipos',
      component: Equipos,
    }
  ]
})
